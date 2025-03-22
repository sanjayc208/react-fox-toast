import {
  addToast,
  removeToast,
  updateToast,
  pauseToastTimer,
  resumeToastTimer,
  removeAllToast,
  getRemainingTimeForToast,
  Toast,
} from './toast-store';
import { ToastProps } from './types';

export const toast = Object.assign(
  (
    message: React.ReactNode,
    options?: Partial<Omit<ToastProps, 'message'>>
  ) => {
    return addToast({ ...options, message, type: 'custom' }); // Default to custom toast
  },
  {
    success: (
      message: React.ReactNode,
      options?: Partial<Omit<ToastProps, 'message' | 'type'>>
    ) => addToast({ ...options, message, type: 'success' }),
    error: (
      message: React.ReactNode,
      options?: Partial<Omit<ToastProps, 'message' | 'type'>>
    ) => addToast({ ...options, message, type: 'error' }),
    info: (
      message: React.ReactNode,
      options?: Partial<Omit<ToastProps, 'message' | 'type'>>
    ) => addToast({ ...options, message, type: 'info' }),
    envelope: (
      message: React.ReactNode,
      options?: Partial<Omit<ToastProps, 'message' | 'type'>>
    ) => addToast({ ...options, message, type: 'envelope' }),
    drawer: (
      message: React.ReactNode,
      options?: Partial<Omit<ToastProps, 'message' | 'type'>>
    ) => addToast({ ...options, message, type: 'drawer' }),
    warning: (
      message: React.ReactNode,
      options?: Partial<Omit<ToastProps, 'message' | 'type'>>
    ) => addToast({ ...options, message, type: 'warning' }),
    custom: (
      message: React.ReactNode,
      options?: Partial<Omit<ToastProps, 'message' | 'type'>>
    ) => addToast({ ...options, message, type: 'custom' }),
    remove: (id: string) => removeToast(id),
    removeAll: () => removeAllToast(),
    update: (id: string, updates: Partial<Toast>) => updateToast(id, updates),
    pause: (id: string) => pauseToastTimer(id),
    remainingTime: (id: string) => getRemainingTimeForToast(id),
    resume: (id: string) => resumeToastTimer(id),
    promise: <T = void>(
      promise: Promise<T>,
      {
        loading,
        success,
        error,
        position,
        toastOptions = {},
      }: {
        loading: string;
        success: string;
        error: string;
        duration?: number;
        position?: any;
        toastOptions?: Partial<ToastProps>;
      }
    ) => {
      // Show the loading toast indefinitely
      const loadingToastId = addToast({
        message: loading,
        type: 'promise',
        position,
        ...toastOptions,
        duration: Infinity, // Ensure loading toast doesn't disappear
      });

      promise
        .then(() => {
          updateToast(loadingToastId, {
            message: success,
            type: 'success',
            duration: toastOptions.duration ?? 3000, // Use toastOptions.duration
          });
        })
        .catch(() => {
          updateToast(loadingToastId, {
            message: error,
            type: 'error',
            duration: toastOptions.duration ?? 3000, // Use toastOptions.duration
          });
        });
    },
  }
);
