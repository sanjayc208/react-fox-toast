// 'use client';

// import React, { useState, useEffect, useRef } from 'react';
// import { ToastProps } from './types';
// import { defaultIcons } from './default-icons';
// import { useToastContext } from './toast-provider';

// const Toast: React.FC<ToastProps & { onClose: () => void }> = ({
//     id,
//     message,
//     type = 'custom',
//     position = 'bottom-center',
//     onClose,
//     icon,
//     className,
//     style,
//     iconStyle,
//     expandable = false,
//     expandedContent,
//     onExpand,
//     isClosing
// }) => {
//     const [isExpanded, setIsExpanded] = useState(false);
//     const [isVisible, setIsVisible] = useState(false);
//     const toastRef = useRef<HTMLDivElement>(null);
//     const expandedContentRef = useRef<HTMLDivElement>(null);
//     const { updateToast, removeToast, dismissToast } = useToastContext()

//     useEffect(() => {
//         setIsVisible(true);
//     }, []);

//     const handleClick = (e: any) => {
//         // Prevent expansion if the click originates from a button or specific action element
//         if (e.target.closest("button") || e.target.closest("[data-action]")) return;
//         if (expandable) {
//             setIsExpanded((prev) => !prev);
//             onExpand(!isExpanded)
//         }
//     };

//     const toastFunctions = {
//         update: (updates: Partial<ToastProps>) => updateToast(id, updates),
//         remove: () => removeToast(id),
//         dismiss: () => dismissToast(),
//     }
//     return (
//         <div
//             ref={toastRef}
//             className={`mb-4 p-3 rounded-lg shadow-md transition-all duration-300 ease-in-out ${isVisible && !isClosing ? 'opacity-100 translate-y-0'
//                 : position?.includes('top')
//                     ? 'opacity-0 -translate-y-8'
//                     : 'opacity-0 translate-y-8'
//                 } ${type === 'success'
//                     ? 'bg-green-100'
//                     : type === 'error'
//                         ? 'bg-red-100'
//                         : type === 'info'
//                             ? 'bg-blue-100'
//                             : 'bg-gray-100'
//                 } ${className}`}
//             onClick={handleClick}
//             style={{
//                 maxWidth: '400px',
//                 ...style,
//             }}
//         >
//             {typeof message == 'function' ?
//                 <>{message(toastFunctions)}</> : (
//                     <div className="flex items-center justify-between">
//                         <div className="flex items-center space-x-3">
//                             <div className="flex-shrink-0" style={iconStyle}>
//                                 {icon || defaultIcons[type]}
//                             </div>
//                             <div>{message}</div>
//                         </div>
//                         <button onClick={onClose} className="focus:outline-none pl-2 rounded-full">
//                             &#x2715;
//                         </button>
//                     </div>)
//             }
//             {expandable && expandedContent && (
//                 <div
//                     ref={expandedContentRef}
//                     className="overflow-hidden transition-all duration-300 ease-in-out"
//                     style={{
//                         maxHeight: isExpanded ? `${expandedContentRef.current?.scrollHeight}px` : '0px',
//                     }}
//                 >
//                     {expandedContent}
//                 </div>
//             )}
//         </div>
//     );
// };

// export default Toast;


'use client';

import React, { useState, useEffect, useRef } from 'react';
import { ToastProps } from './types';
import { defaultIcons } from './default-icons';
import { useToastContext } from './toast-provider';

const Toast: React.FC<ToastProps & { onClose: () => void }> = ({
    id,
    message,
    type = 'custom',
    position = 'bottom-center',
    onClose,
    icon,
    className,
    style,
    iconStyle,
    expandable = false,
    expandedContent,
    onExpand,
    isClosing,
    expandedClassName
}) => {
    const [isExpanded, setIsExpanded] = useState(false);
    const [isVisible, setIsVisible] = useState(false);
    const toastRef = useRef<HTMLDivElement>(null);
    const expandedContentRef = useRef<HTMLDivElement>(null);
    const { updateToast, removeToast, dismissToast } = useToastContext();

    useEffect(() => {
        setIsVisible(true);
    }, []);

    const handleClick = (e: any) => {
        // Prevent expansion if the click originates from a button or specific action element
        if (e.target.closest("button") || e.target.closest("[data-action]")) return;
        if (expandable) {
            setIsExpanded((prev) => !prev);
            onExpand(!isExpanded);
        }
    };

    const toastFunctions = {
        update: (updates: Partial<ToastProps>) => updateToast(id, updates),
        remove: () => removeToast(id),
        dismiss: () => dismissToast(),
    };

    // Define styles based on toast type
    const backgroundColors: Record<string, string> = {
        success: '#D1FAE5', // Tailwind's bg-green-100
        error: '#FEE2E2', // Tailwind's bg-red-100
        info: '#DBEAFE', // Tailwind's bg-blue-100
        custom: '#F3F4F6', // Tailwind's bg-gray-100
    };

    const containerStyles: React.CSSProperties = {
        marginBottom: '1rem',
        padding: '0.75rem',
        borderRadius: '0.5rem',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        transition: 'all 0.3s ease-in-out',
        opacity: isVisible && !isClosing ? 1 : 0,
        transform: isVisible && !isClosing
            ? 'translateY(0)'
            : position?.includes('top')
                ? 'translateY(-2rem)'
                : 'translateY(2rem)',
        backgroundColor: backgroundColors[type] || backgroundColors.custom,
        maxWidth: '400px',
        ...style,
    };

    const expandedStyles: React.CSSProperties = {
        color: "black",
        overflow: 'hidden',
        transition: 'all 0.3s ease-in-out',
        maxHeight: isExpanded ? `${expandedContentRef.current?.scrollHeight}px` : '0px',
    };

    const buttonStyles: React.CSSProperties = {
        paddingLeft: '0.5rem',
        borderRadius: '50%',
        outline: 'none',
        background: 'none',
        border: 'none',
        cursor: 'pointer',
    };

    const flexContainerStyles: React.CSSProperties = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
    };

    const flexItemsStyles: React.CSSProperties = {
        display: 'flex',
        alignItems: 'center',
        gap: '0.75rem', // Equivalent to Tailwind's space-x-3
    };

    return (
        <div
            ref={toastRef}
            onClick={handleClick}
            className={`${className}`}
            style={containerStyles}
        >
            {typeof message === 'function' ? (
                <>{message(toastFunctions)}</>
            ) : (
                <div style={flexContainerStyles}>
                    <div style={flexItemsStyles}>
                        <div style={{ flexShrink: 0, ...iconStyle }}>
                            {icon || defaultIcons[type]}
                        </div>
                        <div>{message}</div>
                    </div>
                    <button onClick={onClose} style={buttonStyles}>
                        &#x2715;
                    </button>
                </div>
            )}
            {expandable && expandedContent && (
                <div
                    ref={expandedContentRef}
                    style={expandedStyles}
                    className={expandedClassName}
                >
                    {expandedContent}
                </div>
            )}
        </div>
    );
};

export default Toast;
