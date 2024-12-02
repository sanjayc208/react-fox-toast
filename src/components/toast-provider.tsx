// 'use client';

// import React, { createContext, useState, useCallback, useEffect } from 'react';
// import ToastContainer from './toast-container';
// import { ToastContextType, ToastProps } from './types';

// const ToastContext = createContext<ToastContextType | null>(null);

// export const ToastProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
//     const [toasts, setToasts] = useState<any[]>([])

//     const addToast = useCallback((toast: Omit<ToastProps, 'id'>): string => {
//         const id = Math.random().toString(36).substr(2, 9);
//         setToasts((prevToasts) =>
//             toast.position?.includes('top')
//                 ? [{ ...toast, id, isClosing: false }, ...prevToasts]
//                 : [...prevToasts, { ...toast, id, isClosing: false }]
//         );
//         return id;
//     }, []);

//     const removeToast = useCallback((id: string) => {
//         // Mark the toast as closing to trigger animation
//         setToasts((prevToasts) =>
//             prevToasts.map((toast) =>
//                 toast.id === id ? { ...toast, isClosing: true } : toast
//             )
//         );

//         // Remove the toast after the animation duration
//         setTimeout(() => {
//             setToasts((prevToasts) => prevToasts.filter((toast) => toast.id !== id));
//         }, 300); // Match this with the CSS animation duration
//     }, []);

//     const dismissToast = useCallback(() => {
//         // Mark all toasts as closing to trigger animation
//         setToasts((prevToasts) =>
//             prevToasts.map((toast) => ({ ...toast, isClosing: true }))
//         );
    
//         // Remove all toasts after the animation duration
//         setTimeout(() => {
//             setToasts([]);
//         }, 300); // Match this with the CSS animation duration
//     }, []);

//     const updateToast = useCallback((id: string, updates: Partial<ToastProps>) => {
//         setToasts((prevToasts) =>
//             prevToasts.map((toast) => (toast.id === id ? { ...toast, ...updates } : toast))
//         )
//     }, [])

//     useEffect(() => {
//         toasts.forEach((toast) => {
//             if (toast.duration !== Infinity && !toast.isClosing) {
//                 const timer = setTimeout(() => {
//                     removeToast(toast.id);
//                 }, toast.duration || 5000);
//                 return () => clearTimeout(timer);
//             }
//         });
//     }, [toasts, removeToast, dismissToast]);

//     return (
//         <ToastContext.Provider value={{ toasts, addToast, removeToast, updateToast, dismissToast }}>
//             {children}
//             <ToastContainer />
//         </ToastContext.Provider>
//     )
// }

// export const useToastContext = () => {
//   const context = React.useContext(ToastContext);
//   if (!context) throw new Error('useToastContext must be used within a ToastProvider');
//   return context;
// };


'use client';

import React, { createContext, useState, useCallback, useEffect } from 'react';
import ToastContainer from './toast-container';
import { ToastContextType, ToastProps } from './types';

const ToastContext = createContext<ToastContextType | null>(null);
const defaultPosition = 'bottom-center'

export const ToastProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [toasts, setToasts] = useState<any[]>([]);

    // Function to add a toast
    const addToast = useCallback((toast: Omit<ToastProps, 'id'>): string => {
        const id = Math.random().toString(36).substr(2, 9);

        toast.position ??= defaultPosition; // Default to 'bottom-right' if not provided

        setToasts((prevToasts) =>
            toast.position?.includes('top')
                ? [{ ...toast, id, isClosing: false }, ...prevToasts]
                : [...prevToasts, { ...toast, id, isClosing: false }]
        );
        return id;
    }, []);

    // Function to remove a toast
    const removeToast = useCallback((id: string) => {
        setToasts((prevToasts) =>
            prevToasts.map((toast) =>
                toast.id === id ? { ...toast, isClosing: true } : toast
            )
        );
        setTimeout(() => {
            setToasts((prevToasts) => prevToasts.filter((toast) => toast.id !== id));
        }, 300); // Match this with the CSS animation duration
    }, []);

    // Function to dismiss all toasts
    const dismissToast = useCallback(() => {
        setToasts((prevToasts) =>
            prevToasts.map((toast) => ({ ...toast, isClosing: true }))
        );
        setTimeout(() => {
            setToasts([]);
        }, 300); // Match this with the CSS animation duration
    }, []);

    // Function to update a toast
    const updateToast = useCallback((id: string, updates: Partial<ToastProps>) => {
        setToasts((prevToasts) =>
            prevToasts.map((toast) => (toast.id === id ? { ...toast, ...updates } : toast))
        );
    }, []);

    // Auto-remove toasts after their duration
    useEffect(() => {
        toasts.forEach((toast) => {
            if (toast.duration !== Infinity && !toast.isClosing) {
                const timer = setTimeout(() => {
                    removeToast(toast.id);
                }, toast.duration || 5000);
                return () => clearTimeout(timer);
            }
        });
    }, [toasts, removeToast, dismissToast]);

    return (
        <ToastContext.Provider value={{ toasts, addToast, removeToast, updateToast, dismissToast }}>
            {children}
            <ToastContainer />
        </ToastContext.Provider>
    );
};

export const useToastContext = () => {
    const context = React.useContext(ToastContext);
    if (!context) throw new Error('useToastContext must be used within a ToastProvider');
    return context;
};

// export const useToast = () => {
//     const { addToast, updateToast, removeToast, dismissToast } = useToastContext();

//     const promise = (
//         promiseFn: Promise<any>,
//         options: {
//             loading: string;
//             success: string;
//             error: string;
//             duration?: number; // Add optional duration
//             position?: ToastPosition;
//             toastOptions?: Omit<ToastProps, 'id' | 'type'>;
//         }
//     ) => {
//         // Show loading toast
//         const id = addToast({ 
//             message: options.loading, 
//             type: 'promise', 
//             duration: options.duration || Infinity, // Stay until resolved
//             position: options.position || 'bottom-center',
//             ...options.toastOptions 
//         });

//         // Handle promise resolution or rejection
//         promiseFn
//             .then(() => {
//                 updateToast(id, { 
//                     message: options.success, 
//                     type: 'success', 
//                     duration: options.duration || 5000, // Auto-remove after specified duration
//                 });
//             })
//             .catch(() => {
//                 updateToast(id, { 
//                     message: options.error, 
//                     type: 'error', 
//                     duration: options.duration || 5000, // Auto-remove after specified duration
//                 });
//             })
//             .finally(() => {
//                 // Automatically remove after specified duration
//                 setTimeout(() => removeToast(id), options.duration || 5000);
//             });
//     };

//     return {
//         success: (message: string, options?: Omit<ToastProps, 'id' | 'type'>) =>
//             addToast({ ...options, message, type: 'success' }),
//         error: (message: string, options?: Omit<ToastProps, 'id' | 'type'>) =>
//             addToast({ ...options, message, type: 'error' }),
//         info: (message: string, options?: Omit<ToastProps, 'id' | 'type'>) =>
//             addToast({ ...options, message, type: 'info' }),
//         custom: (message: string, options?: Omit<ToastProps, 'id' | 'type'>) =>
//             addToast({ ...options, message, type: 'custom' }),
//         promise,
//         update: (id: string, updates: Partial<ToastProps>) => updateToast(id, updates),
//         remove: (id: string) => removeToast(id),
//         dismiss: () => dismissToast(),
//     };
// };
