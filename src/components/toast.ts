// src/toast/toast.ts
import { addToast, removeToast, updateToast } from './toast-store';
import {ToastPosition} from './types'

export const toast = {
  success: (message: string, options?: Partial<any>) =>
    addToast({ ...options, message, type: 'success' }),
  error: (message: string, options?: Partial<any>) =>
    addToast({ ...options, message, type: 'error' }),
  info: (message: string, options?: Partial<any>) =>
    addToast({ ...options, message, type: 'info' }),
  custom: (message: string, options?: Partial<any>) =>
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
      position?: ToastPosition, 
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
