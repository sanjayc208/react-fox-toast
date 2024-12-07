// src/toast/toast.ts
import { addToast, removeToast, updateToast } from './toast-store';

export const toast = {
  success: (message: React.ReactNode, options?: Partial<any>) =>
    addToast({ ...options, message, type: 'success' }),
  error: (message: React.ReactNode, options?: Partial<any>) =>
    addToast({ ...options, message, type: 'error' }),
  info: (message: React.ReactNode, options?: Partial<any>) =>
    addToast({ ...options, message, type: 'info' }),
  custom: (message: React.ReactNode, options?: Partial<any>) =>
    addToast({ ...options, message, type: 'custom' }),
  remove: (id: string) => removeToast(id),
  update: (id: string, updates: Partial<any>) => updateToast(id, updates),
  promise: (
    promise: Promise<any>,
    { loading, success, error, duration = 5000, position, toastOptions }: { 
      loading: string, 
      success: string, 
      error: string, 
      duration?: number,
      position?: any, 
      toastOptions?: Partial<any>
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
      .then((res) => {
        updateToast(loadingToastId, {
          message: success,
          type: 'success',
          duration,
        });
      })
      .catch((err) => {
        updateToast(loadingToastId, {
          message: error,
          type: 'error',
          duration,
        });
      });
  },
};
