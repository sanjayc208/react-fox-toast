// src/component/toast-store.ts
'use client';
import { ToastPosition, ToastType } from './types'

export interface Toast {
  id: string;
  message: React.ReactNode;
  type: ToastType;
  duration?: number;  // Custom duration before auto-dismiss (in ms)
  position?: ToastPosition;
  isClosing?: boolean;
  isVisible?: boolean;
  expandedContent?: React.ReactNode;
  isExpanded?: boolean;
  icon?: React.ReactNode;
  promise?: Promise<any>;  // For promise support
  status?: 'pending' | 'resolved' | 'rejected'; // For promise states
  timerId?: NodeJS.Timeout; // Store the timer ID for each toast
  startTime?: number; // Time when toast was first displayed
  remainingTime?: number; // Remaining time for the toast
  isPaused?: boolean; // To track if the toast timer is paused
  isPausedOnHover?: boolean; // Optional prop to disable hover pause functionality
  onDismiss?: (id: string, message: React.ReactNode) => void; // Callback triggered on dismiss
  onExpandContent?: (id: string, message: React.ReactNode) => void; // Callback triggered on dismiss
}

const toastSubscribers: Array<(toasts: Toast[]) => void> = [];
let toastList: Toast[] = [];

let defaultDuration: number
let defaultPosition: ToastPosition

// Setter functions to modify default values
export const setToastDefaults = (duration?: number, position?: ToastPosition) => {
  if (duration !== undefined) {
    defaultDuration = duration;
  }
  if (position !== undefined) {
    defaultPosition = position;
  }
};

// Getter functions to retrieve default values (optional)
export const getToastDefaults = () => ({
  duration: defaultDuration,
  position: defaultPosition,
});

export const addToast = (toast: Omit<Toast, 'id'>): string => {
  const id = Math.random().toString(36).substr(2, 9);
  toast.position ??= (defaultPosition); // Default to 'bottom-right' if not provided
  const newToast = {
    ...toast, id, isClosing: false, isVisible: true, isExpanded: false,
    isPausedOnHover: toast.isPausedOnHover ?? true  // Default to true for pausing
  };

  toastList = toast.position?.includes('top') ? [newToast, ...toastList] : [...toastList, newToast];
  notifySubscribers();
  newToast.duration = newToast.duration || defaultDuration //if there is no duration default is 5 second

  // If a duration is set and not 'Infinity', auto-dismiss the toast after the duration
  if (newToast.duration && newToast.duration !== Infinity) {
    startToastTimer(id, newToast.duration);
  }
  return id;
};

// Start or reset the toast timer
const startToastTimer = (id: string, duration: number) => {
  const toast = toastList.find((t) => t.id === id);

  if (toast) {
    if (toast.timerId) {
      clearTimeout(toast.timerId); // Clear any existing timer
    }

    // Set a new timer with the provided duration
    const timerId = setTimeout(() => {
      removeToast(id);
    }, duration);

    // Update the toast with the new timer ID and start time
    toastList = toastList.map((t) =>
      t.id === id ? { ...t, timerId, startTime: Date.now() } : t
    );

    notifySubscribers();
  }
};

export const onExpandToast = (id:string) => {
  //findinf the details of taost with the id
  const toast = toastList.find((t) => t.id === id);
  //if onDimiss callback is sent then return callback with toast data
  if (toast?.onExpandContent) {
    toast.onExpandContent(toast.id, toast.message); // Invoke the onDismiss callback
  }
}

export const removeToast = (id: string) => {
  //findinf the details of taost with the id
  const toast = toastList.find((t) => t.id === id);

  //if onDimiss callback is sent then return callback with toast data
  if (toast?.onDismiss) {
    toast.onDismiss(toast.id, toast.message); // Invoke the onDismiss callback
  }

  toastList = toastList.map((toast) =>
    toast.id === id ? { ...toast, isClosing: true } : toast
  );
  notifySubscribers();
  setTimeout(() => {
    toastList = toastList.filter((toast) => toast.id !== id);
    notifySubscribers();
  }, 300); // Match animation duration
};

// Remove all toasts
export const removeAllToast = () => {
  toastList = toastList.map((toast) => ({
    ...toast,
    isClosing: true,
  }));
  notifySubscribers();

  setTimeout(() => {
    toastList = []; // Clear the entire list of toasts
    notifySubscribers();
  }, 300); // Match animation duration
};

// Update toast
export const updateToast = (id: string, updates: Partial<Toast>) => {
  const toast = toastList.find((t) => t.id === id);

  if (toast && updates.duration !== undefined) {
    // If duration is updated, reset the timer
    startToastTimer(id, updates.duration);
  }

  // Update the toast with the provided updates
  toastList = toastList.map((toast) =>
    toast.id === id ? { ...toast, ...updates } : toast
  );
  notifySubscribers();
};

export const pauseToastTimer = (id: string) => {
  const toast = toastList.find((t) => t.id === id);
  if (toast && toast.timerId && !toast.isPaused) {
    clearTimeout(toast.timerId); // Stop the current timer

    // Calculate elapsed time
    const elapsedTime = Date.now() - (toast.startTime || 0);

    // Update remainingTime: use existing remainingTime or subtract from duration
    const remainingTime = (toast.remainingTime ?? toast.duration!) - elapsedTime;

    // Update the toast object with new remainingTime and mark as paused
    toastList = toastList.map((t) =>
      t.id === id ? { ...t, isPaused: true, remainingTime } : t
    );

    notifySubscribers();
  }
};

export const resumeToastTimer = (id: string) => {
  const toast = toastList.find((t) => t.id === id);

  if (toast && toast.isPaused && toast.remainingTime !== undefined) {
    // console.log(`Resuming toast ${id}. Remaining time: ${toast.remainingTime}ms`);

    // Update toast: mark it as not paused and reset the startTime
    toastList = toastList.map((t) =>
      t.id === id ? { ...t, isPaused: false, startTime: Date.now() } : t
    );

    // Start a new timer with the remainingTime
    startToastTimer(id, toast.remainingTime);
  }
};

export const getRemainingTimeForToast = (id: string): number | null => {
  const toast = toastList.find((t) => t.id === id);

  if (toast && toast.isPaused && toast.remainingTime !== undefined) {
    // If the toast is paused, return the remaining time
    return toast.remainingTime;
  }

  if (toast && !toast.isPaused && toast.duration !== undefined) {
    // If the toast is not paused, calculate remaining time based on duration and elapsed time
    const elapsedTime = Date.now() - (toast.startTime || 0);
    const remainingTime = toast.duration - elapsedTime;
    return remainingTime > 0 ? remainingTime : 0;
  }

  return null; // Return null if no remaining time is available
};

export const subscribeToToasts = (callback: (toasts: Toast[]) => void) => {
  toastSubscribers.push(callback);
  callback(toastList); // Send initial state
  return () => {
    const index = toastSubscribers.indexOf(callback);
    if (index > -1) toastSubscribers.splice(index, 1);
  };
};

const notifySubscribers = () => {
  toastSubscribers.forEach((callback) => callback([...toastList]));
};
