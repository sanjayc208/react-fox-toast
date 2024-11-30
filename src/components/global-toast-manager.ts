import { ToastProps } from './types';

// Type for the ToastManager
export interface ToastManager {
    addToast: (toast: Omit<ToastProps, 'id'>) => string;
    updateToast: (id: string, updates: Partial<ToastProps>) => void;
    removeToast: (id: string) => void;
}

// Declare the global toast manager
export let toastManager: ToastManager | null = null;

// Function to initialize the toast manager
export const setToastManager = (manager: ToastManager) => {
    toastManager = manager;
};
