import { ReactNode } from 'react';
import { ToastTypeTheming } from './toast-container';
import { Toast } from './toast-store';

export type ToastType =
    | 'success'
    | 'error'
    | 'info'
    | 'custom'
    | 'promise'
    | 'warning'
    | 'envelope'
    | 'drawer';

export type ToastPosition =
    | 'top-left'
    | 'top-center'
    | 'top-right'
    | 'bottom-left'
    | 'bottom-center'
    | 'bottom-right';

export type Aria = {
    role: string;
    label: string;
};

export interface ToastProps {
    id: string;
    message: ReactNode | ((v: ToastFunctionsProps) => ReactNode);
    type: ToastType;
    position?: ToastPosition;
    duration?: number;
    icon?: ReactNode;
    className?: string;
    style?: React.CSSProperties;
    iconStyle?: React.CSSProperties;
    expandable?: boolean;
    expandedContent?: ReactNode;
    onExpand?: (v: boolean) => void;
    isClosing?: boolean;
    isCloseBtn?: boolean;
    expandedClassName?: string;
    closeBtnStyle?: React.CSSProperties;
    toastTypeTheming?:
        | Record<ToastType, Partial<ToastTypeTheming>>
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        | Record<string, any>;
    spacingToast?: React.CSSProperties;
    isPausedOnHover?: boolean;
    direction?: 'ltr' | 'rtl';
    aria?: Aria;
}

export interface ToastContextType {
    toasts: ToastProps[];
    addToast: (toast: Omit<ToastProps, 'id'>) => string;
    removeToast: (id: string) => void;
    updateToast: (id: string, updates: Partial<ToastProps>) => void;
    dismissToast: () => void;
}

export type DefaultIcons = Record<ToastType, JSX.Element | null>;

export interface ToastContainerProps {
    isClosing?: boolean;
    position: ToastPosition;
    direction: 'ltr' | 'rtl';
    style: React.CSSProperties;
    type: ToastType;
}

export interface ExpandedContentProps {
    isExpanded: boolean;
    expandedHeight: string;
    className?: string;
}

export interface ToastFunctionsProps {
    update: (updates: Partial<Toast>) => void;
    remove: () => void;
    removeAll: () => void;
}
