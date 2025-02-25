// src/components/toast-component.tsx
'use client';

import React, { useState, useEffect, useRef } from 'react';
import { ToastProps } from './types';
import { defaultIcons } from './default-icons';
import {
  removeToast,
  updateToast,
  removeAllToast,
  pauseToastTimer,
  resumeToastTimer,
  onExpandToast,
} from './toast-store';
import { styled, keyframes } from 'goober';

// Enter Animation (Zoom out to Zoom in)
const fadeIn = (position: string) => keyframes`
  0% { 
    opacity: 0; 
    transform: ${
      position.includes('top')
        ? 'translateY(-200%) scale(0.8)'
        : 'translateY(200%) scale(0.8)'
    };
  }
  100% { 
    opacity: 1; 
    transform: translateY(0) scale(1);
  }
`;

// Exit Animation (Zoom in to Fade Away)
const fadeOut = (position: string) => keyframes`
  0% { 
    opacity: 1; 
    transform: scale(1);
  }
  100% { 
    opacity: 0; 
    transform: ${
      position.includes('top')
        ? 'translateY(-30%) scale(0.8)'
        : 'translateY(30%) scale(0.8)'
    };
  }
`;

// Styled Components for Toast
const ToastContainer = styled('div')((props: any) => {
  const { isclosing, position, direction, style, type } = props;
  return `
      will-change: transform;
      animation: ${
        isclosing === 'false' ? fadeIn(position) : fadeOut(position)
      } 0.35s ease-in-out;
      direction: ${direction};

      /* Using :where() to apply low specificity styles */
      :where(&) {
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        padding: 0.55rem 0.85rem;
        border-radius: 0.5rem;
        background-color: ${backgroundColors[type] || backgroundColors.custom};
        color: black;
        max-width: 50vw;
      }
        
      /* Mobile view (80vw) */
      @media (max-width: 768px) {
        max-width: 80vw;
      }
      ${style}
    `;
});

// Function to create a CSS class dynamically with :where() for low specificity
// function createDynamicWhereClass(className: any, styles: any) {
//   const styleSheet = document.styleSheets[0] || document.createElement("style");

//   if (styleSheet === document.styleSheets[0]) {
//     styleSheet.insertRule(
//       `:where(.${className}) { ${styles} }`,
//       styleSheet.cssRules.length
//     );
//   } else {
//     const styleTag = document.createElement("style");
//     document.head.appendChild(styleTag);
//     styleTag.innerHTML = `:where(.${className}) { ${styles} }`;
//   }
// }

const FlexContainer = styled('div')(
  () => `
    display: flex;
    align-items: center;
    justify-content: space-between;
  `
);

const FlexItems = styled('div')(
  () => `
    display: flex;
    align-items: center;
    gap: 0.75rem;
  `
);

const ExpandedContent = styled('div')(
  (props: any) => `
    color: black;
    overflow: hidden;
    transition: all 0.3s ease-in-out;
    max-height: ${props.isexpanded === 'true' ? props.expandedheight : '0px'};
  `
);

const backgroundColors: Record<string, string> = {
  success: '#D1FAE5',
  error: '#FEE2E2',
  info: '#DBEAFE',
  custom: '#ffffff',
  warning: '#fff4b7',
  tip: '#ffffff',
};

const MessageContainer = styled('div')<{
  fadeout: string;
  type: string;
}>`
  overflow: hidden;
  transition: max-height 0.35s ease-in-out, opacity 0.35s ease-in-out;
  ${({ type, fadeout }) =>
    (type === 'envelope' || type === 'drawer') &&
    `
      max-height: ${fadeout === 'true' ? '0' : '500px'};
      opacity: ${fadeout === 'true' ? '0' : '1'};
    `}
`;

const IconContainer = styled('div')<{
  fadeout: string;
  type: string;
}>`
  overflow: hidden;
  transition: max-height 0.35s ease-in-out, opacity 0.35s ease-in-out;
  ${({ type, fadeout }) =>
    (type === 'envelope' || type === 'drawer') &&
    `
      max-height: ${fadeout === 'true' ? '0' : '500px'};
      opacity: ${fadeout === 'true' ? '0' : '1'};
    `}
`;

const CloseButton = styled('button')(
  (props: any) => `
    ${props.position === 'right' ? 'left: -0.3rem;' : 'right: -0.3rem;'}
    font-size: 0.6rem;
    position: absolute;
    top: -0.3rem;
    width: 1.1rem;
    height: 1.1rem;
    border-radius: 50%;
    border: 1px solid #ddd;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    cursor: pointer;
    z-index: 9999;
    transition: transform 0.2s ease, background-color 0.2s ease;
    background-color: #ffffff;
    color: #000;
    
    &:hover {
      background-color: #f0f0f0;
      transform: scale(1.1);
    }
  `
);

const Toast: React.FC<ToastProps & { onClose: () => void }> = React.memo(
  ({
    id,
    message,
    type = 'custom',
    position = 'bottom-center',
    isCloseBtn = false,
    onClose,
    icon,
    className,
    style,
    iconStyle,
    expandedContent,
    onExpand,
    isClosing,
    expandedClassName,
    closeBtnStyle,
    toastTypeTheming = {},
    isPausedOnHover = true,
    direction = 'ltr',
    aria, // Expected to be an object like { role: 'status', 'label': 'Custom notification' }
  }) => {
    const [isExpanded, setIsExpanded] = useState(false);
    const toastRef = useRef<HTMLDivElement>(null);
    const expandedContentRef = useRef<HTMLDivElement>(null);
    const [fadeOutMessage, setFadeOutMessage] = useState(false);

    useEffect(() => {
      const toastContainerClassName = `toast-container-default-${id}`;
      // createDynamicWhereClass(toastContainerClassName, `
      //   box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
      //   padding: 0.55rem 0.85rem;
      //   border-radius: 0.5rem;
      //   background-color: ${backgroundColors[type] || backgroundColors.custom};
      //   color: black;
      //   max-width: 50vw;
      // `);
    }, [id, type]);

    const handleClick = (e: any) => {
      if (e.target.closest('button') || e.target.closest('[data-action]'))
        return;
      if (expandedContent) {
        if (type === 'envelope') {
          if (!isExpanded) {
            setFadeOutMessage(true);
            setTimeout(() => {
              setIsExpanded(true);
              onExpand(true);
            }, 150);
            onExpandToast(id);
          }
        } else if (type === 'drawer') {
          if (!isExpanded) {
            setFadeOutMessage((p) => !p);
            setTimeout(() => {
              setIsExpanded((p) => !p);
              onExpand(!isExpanded);
            }, 150);
          } else {
            setIsExpanded((p) => !p);
            onExpand(!isExpanded);
            setFadeOutMessage(!isExpanded);
          }
          onExpandToast(id);
        } else {
          if (!isExpanded) onExpandToast(id);
          setIsExpanded((prev) => !prev);
          onExpand(!isExpanded);
        }
      }
    };

    const handleMouseEnter = () => {
      if (isPausedOnHover) {
        pauseToastTimer(id);
      }
    };

    const handleMouseLeave = () => {
      if (isPausedOnHover) {
        resumeToastTimer(id);
      }
    };

    const toastFunctions = {
      update: (updates: Partial<any>) => updateToast(id, updates),
      remove: () => removeToast(id),
      removeAll: () => removeAllToast(),
    };

    const expandedHeight = expandedContentRef.current?.scrollHeight + 'px';

    const typeThemeStyle = toastTypeTheming[type]?.style || {};
    const typeThemeClass = `${toastTypeTheming[type]?.className || ''}`;
    icon = toastTypeTheming[type]?.icon || icon || defaultIcons[type];

    // Default ARIA properties for the container
    const defaultAriaProps = {
      role: 'alert',
      label: 'Notification',
    };

    // Merge any custom ARIA attributes provided via the `aria` prop.
    const ariaProps = { ...defaultAriaProps, ...aria };

    return (
      <ToastContainer
        ref={toastRef}
        onClick={handleClick}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className={`toast-container-default-${id} ${className} ${typeThemeClass}`}
        type={type}
        position={position}
        isclosing={isClosing.toString()}
        direction={direction}
        style={{ ...style, ...typeThemeStyle }}
        {...ariaProps}
      >
        {typeof message === 'function' ? (
          <>{message(toastFunctions)}</>
        ) : (
          <FlexContainer>
            <FlexItems>
              <IconContainer
                type={type}
                fadeout={fadeOutMessage.toString()}
                style={{ flexShrink: 0, ...iconStyle }}
              >
                {icon}
              </IconContainer>
              <MessageContainer type={type} fadeout={fadeOutMessage.toString()}>
                {message}
              </MessageContainer>
            </FlexItems>
            {isCloseBtn && (
              <CloseButton
                onClick={onClose}
                position={position.includes('right') ? 'right' : 'left'}
                style={closeBtnStyle}
              >
                &#x2715;
              </CloseButton>
            )}
          </FlexContainer>
        )}
        {expandedContent && (
          <ExpandedContent
            ref={expandedContentRef}
            isexpanded={isExpanded.toString()}
            expandedheight={expandedHeight}
            className={expandedClassName}
          >
            {expandedContent}
          </ExpandedContent>
        )}
      </ToastContainer>
    );
  }
);

export default Toast;
