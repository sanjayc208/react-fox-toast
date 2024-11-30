import { ToastProps, ToastPosition } from './types';
import { useToastContext } from './toast-provider';


export const useToast = () => {
    const { addToast, updateToast, removeToast, dismissToast } = useToastContext();

    const promise = (
        promiseFn: Promise<any>,
        options: {
            loading: string;
            success: string;
            error: string;
            duration?: number; // Add optional duration
            position?: ToastPosition;
            toastOptions?: Omit<ToastProps, 'id' | 'type'>;
        }
    ) => {
        // Show loading toast
        const id = addToast({ 
            message: options.loading, 
            type: 'promise', 
            duration: options.duration || Infinity, // Stay until resolved
            position: options.position || 'bottom-center',
            ...options.toastOptions 
        });

        // Handle promise resolution or rejection
        promiseFn
            .then(() => {
                updateToast(id, { 
                    message: options.success, 
                    type: 'success', 
                    duration: options.duration || 5000, // Auto-remove after specified duration
                });
            })
            .catch(() => {
                updateToast(id, { 
                    message: options.error, 
                    type: 'error', 
                    duration: options.duration || 5000, // Auto-remove after specified duration
                });
            })
            .finally(() => {
                // Automatically remove after specified duration
                setTimeout(() => removeToast(id), options.duration || 5000);
            });
    };

    return {
        success: (message: string, options?: Omit<ToastProps, 'id' | 'type'>) =>
            addToast({ ...options, message, type: 'success' }),
        error: (message: string, options?: Omit<ToastProps, 'id' | 'type'>) =>
            addToast({ ...options, message, type: 'error' }),
        info: (message: string, options?: Omit<ToastProps, 'id' | 'type'>) =>
            addToast({ ...options, message, type: 'info' }),
        custom: (message: string, options?: Omit<ToastProps, 'id' | 'type'>) =>
            addToast({ ...options, message, type: 'custom' }),
        promise,
        update: (id: string, updates: Partial<ToastProps>) => updateToast(id, updates),
        remove: (id: string) => removeToast(id),
        dismiss: () => dismissToast(),
    };
};