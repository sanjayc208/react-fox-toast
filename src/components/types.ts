import { ReactNode } from 'react';

export type ToastType = 'success' | 'error' | 'info' | 'custom' | 'promise';

export type ToastPosition = 'top-left' | 'top-center' | 'top-right' | 'bottom-left' | 'bottom-center' | 'bottom-right'

export interface ToastProps {
    id: string
    message: ReactNode | Function | string
    type: ToastType
    position?: ToastPosition
    duration?: number
    icon?: ReactNode
    className?: string
    style?: React.CSSProperties
    iconStyle?: React.CSSProperties
    expandable?: boolean
    expandedContent?: ReactNode
    onExpand?: any
    isClosing?: any
    isCloseBtn?:any
    expandedClassName?: string
    toastTypeTheming? : any,
    spacingToast?: React.CSSProperties,
    isPause?: boolean,

}

export interface ToastContextType {
  toasts: ToastProps[]
  addToast: (toast: Omit<ToastProps, 'id'>) => string
  removeToast: (id: string) => void
  updateToast: (id: string, updates: Partial<ToastProps>) => void
  dismissToast: () => void
}
