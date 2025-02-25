import {
    addToast,
    getRemainingTimeForToast,
    pauseToastTimer,
    removeAllToast,
    removeToast,
    resumeToastTimer,
    Toast,
    updateToast,
} from './toast-store';
import { ToastPosition } from './types';

export const toast = Object.assign(
    (message: React.ReactNode, options?: Partial<Toast>) => {
        return toast.custom(message, options); // Default to custom toast
    },
    {
        success: (message: React.ReactNode, options?: Partial<Toast>) =>
            addToast({ ...options, message, type: 'success' }),
        error: (message: React.ReactNode, options?: Partial<Toast>) =>
            addToast({ ...options, message, type: 'error' }),
        info: (message: React.ReactNode, options?: Partial<Toast>) =>
            addToast({ ...options, message, type: 'info' }),
        envelope: (message: React.ReactNode, options?: Partial<Toast>) =>
            addToast({ ...options, message, type: 'envelope' }),
        drawer: (message: React.ReactNode, options?: Partial<Toast>) =>
            addToast({ ...options, message, type: 'drawer' }),
        warning: (message: React.ReactNode, options?: Partial<Toast>) =>
            addToast({ ...options, message, type: 'warning' }),
        custom: (message: React.ReactNode, options?: Partial<Toast>) =>
            addToast({ ...options, message, type: 'custom' }),
        remove: (id: string) => removeToast(id),
        removeAll: () => removeAllToast(),
        update: (id: string, updates: Partial<Toast>) =>
            updateToast(id, updates),
        pause: (id: string) => pauseToastTimer(id),
        remainingTime: (id: string) => getRemainingTimeForToast(id),
        resume: (id: string) => resumeToastTimer(id),
        promise: (
            promise: Promise<void>,
            {
                loading,
                success,
                error,
                duration = 3000,
                position,
                toastOptions,
            }: {
                loading: string;
                success: string;
                error: string;
                duration?: number;
                position?: ToastPosition;
                toastOptions?: Partial<Toast>;
            }
        ) => {
            const loadingToastId = addToast({
                message: loading,
                type: 'promise',
                duration,
                position,
                ...toastOptions,
            });

            promise
                .then(() => {
                    updateToast(loadingToastId, {
                        message: success,
                        type: 'success',
                        duration,
                    });
                })
                .catch(() => {
                    updateToast(loadingToastId, {
                        message: error,
                        type: 'error',
                        duration,
                    });
                });
        },
    }
);
