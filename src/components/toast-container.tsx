'use client';

import React, { useEffect, useRef, useState } from 'react';
import ToastComponent from './toast-component';
import {
    removeToast,
    setToastDefaults,
    subscribeToToasts,
    Toast,
} from './toast-store';
import { Aria, ToastPosition } from './types';

export type ToastTypeTheming = {
    style: React.CSSProperties;
    className: string;
    icon: JSX.Element;
};

interface ToastContainerProps {
    toastTypeTheming?: Record<string, ToastTypeTheming>;
    spacing?: number;
    position?: ToastPosition;
    duration?: number;
    direction?: 'ltr' | 'rtl';
    isPausedOnHover?: boolean;
    aria?: Aria;
}

const DEFAULT_POSITION: ToastPosition = 'bottom-center';
const DEFAULT_DURATION = 3000;
const DEFAULT_SPACING = 0;
const DEFAULT_DIRECTION = 'ltr';
const DEFAULT_IS_PAUSED_ON_HOVER = true;
const DEFAULT_TOAST_TYPE_THEMING = {};
const DEFAULT_ARIA = undefined;

export const ToastContainer: React.FC<ToastContainerProps> = ({
    toastTypeTheming = DEFAULT_TOAST_TYPE_THEMING,
    spacing = DEFAULT_SPACING,
    position = DEFAULT_POSITION,
    duration = DEFAULT_DURATION,
    direction = DEFAULT_DIRECTION,
    isPausedOnHover = DEFAULT_IS_PAUSED_ON_HOVER,
    aria = DEFAULT_ARIA,
}) => {
    // Set new default values
    setToastDefaults(duration, position);

    const [toasts, setToasts] = useState<Toast[]>([]);
    const [isExpansion, setIsExpansion] = useState(false); // Tracks if a toast is being expanded
    const [enableTransition, setEnableTransition] = useState(true); // Controls transition application
    const [toastHeights, setToastHeights] = useState<Record<string, number>>(
        {}
    );
    const toastRefs = useRef<Record<string, HTMLDivElement | null>>({});

    const updateToastHeights = () => {
        const newHeights: Record<string, number> = {};
        Object.keys(toastRefs.current).forEach((id) => {
            const el = toastRefs.current[id];
            if (el) {
                newHeights[id] = el.offsetHeight;
            }
        });
        setToastHeights(newHeights);
    };

    useEffect(() => {
        const unsubscribe = subscribeToToasts(setToasts);
        return () => unsubscribe();
    }, []);

    useEffect(() => {
        const resizeObserver = new ResizeObserver(() => {
            updateToastHeights();
        });

        Object.values(toastRefs.current).forEach((el) => {
            if (el) resizeObserver.observe(el);
        });

        return () => {
            resizeObserver.disconnect();
        };
    }, [toasts]);

    useEffect(() => {
        if (!isExpansion) {
            const timeout = setTimeout(() => {
                setEnableTransition(true);
            }, 300); // Match the duration of your CSS transition
            return () => clearTimeout(timeout);
        }
    }, [isExpansion]);

    const calculatePositions = (
        positionToasts: Array<{ id: string }>,
        isBottom: boolean,
        spacing: number // New parameter for spacing
    ) => {
        let cumulativeHeight = 0;
        const positions = isBottom
            ? [...positionToasts].reverse()
            : positionToasts;

        return positions.map((toast) => {
            const height = toastHeights[toast.id] || 80; // Default height
            const positionValue = isBottom
                ? cumulativeHeight
                : cumulativeHeight;
            cumulativeHeight += height + (spacing || 8); // Add spacing
            return { id: toast.id, positionValue };
        });
    };

    const positionStyles: Record<string, React.CSSProperties> = {
        'top-left': {
            top: '1rem',
            left: '1rem',
            display: 'flex',
            justifyContent: 'start',
            alignItems: 'start',
        },
        'top-center': {
            top: '1rem',
            left: '50%',
            transform: 'translateX(-50%)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
        },
        'top-right': {
            top: '1rem',
            right: '1rem',
            display: 'flex',
            justifyContent: 'end',
            alignItems: 'start',
        },
        'bottom-left': {
            bottom: '1rem',
            left: '1rem',
            display: 'flex',
            justifyContent: 'start',
            alignItems: 'end',
        },
        'bottom-center': {
            bottom: '1rem',
            left: '50%',
            transform: 'translateX(-50%)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
        },
        'bottom-right': {
            bottom: '1rem',
            right: '1rem',
            display: 'flex',
            justifyContent: 'end',
            alignItems: 'end',
        },
    };

    return (
        <>
            {Object.entries(positionStyles).map(([pos, style]) => {
                const isBottom = pos.includes('bottom');
                const positionToasts = toasts.filter(
                    (toast) => toast.position === pos
                );
                const toastPositions = calculatePositions(
                    positionToasts,
                    isBottom,
                    spacing
                );

                return (
                    <div
                        key={pos}
                        style={{ ...style, position: 'fixed', zIndex: 9999 }}
                    >
                        {toastPositions.map(({ id, positionValue }) => (
                            <div
                                key={id}
                                ref={(el) => {
                                    toastRefs.current[id] = el;
                                }}
                                style={{
                                    marginBottom: '0.5rem',
                                    top: isBottom
                                        ? undefined
                                        : `${positionValue}px`,
                                    bottom: isBottom
                                        ? `${positionValue}px`
                                        : undefined,
                                    position: 'absolute',
                                    width: 'max-content',
                                    transition: enableTransition
                                        ? 'all 0.2s ease-in-out'
                                        : undefined,
                                }}
                            >
                                <ToastComponent
                                    {...toasts.find(
                                        (toast) => toast.id === id
                                    )!}
                                    direction={direction} // supports ltr or rtl
                                    toastTypeTheming={
                                        toastTypeTheming
                                    } /* Theming the toast type */
                                    isPausedOnHover={
                                        isPausedOnHover
                                    } /* on mouse hover trigger this props */
                                    onClose={() => {
                                        removeToast(id);
                                    }}
                                    aria={aria} // for accessability
                                    onExpand={(isExpanded: boolean) => {
                                        setIsExpansion(isExpanded);
                                        if (isExpanded) {
                                            setEnableTransition(false);
                                            setTimeout(() => {
                                                setEnableTransition(true);
                                            }, 300);
                                        } else {
                                            setEnableTransition(false);
                                        }
                                    }}
                                />
                            </div>
                        ))}
                    </div>
                );
            })}
        </>
    );
};
