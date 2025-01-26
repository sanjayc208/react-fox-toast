// src/components/toast-component.tsx
'use client';

import React, { useState, useEffect, useRef } from 'react';
import { ToastProps } from './types';
import { defaultIcons } from './default-icons';
import { removeToast, updateToast, removeAllToast, pauseToastTimer, resumeToastTimer, onExpandToast } from './toast-store';
import { styled, keyframes } from 'goober';

// Enter Animation (Zoom out to Zoom in)
const fadeIn = (position: string) => keyframes`
  0% { 
    opacity: 0; 
    transform: ${position.includes('top') ? 'translateY(-200%) scale(0.8)' : 'translateY(200%) scale(0.8)'}; /* Move from top or bottom */
  }
  100% { 
    opacity: 1; 
    transform: translateY(0) scale(1); /* Zoom in and position at center */
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
    transform: ${position.includes('top') ? 'translateY(-30%) scale(0.8)' : 'translateY(30%) scale(0.8)'}; /* Move to top or bottom */
  }
`;

// Styled Components for Toast
const ToastContainer = styled('div')(
  (props: any) => {
    const { isclosing, position, direction, style } = props; // Extract non-DOM props

    return `
        will-change: transform;
        animation: ${isclosing === "false" ? fadeIn(position) : fadeOut(position)} 0.35s ease-in-out;
        direction: ${direction};

        /* Mobile view (80vw) */
        @media (max-width: 768px) {
          max-width: 80vw; /* For mobile devices */
        }
        ${style}
      `;
  }
);

// Function to create a CSS class dynamically with :where() for low specificity
function createDynamicWhereClass(className: any, styles: any) {
  const styleSheet = document.styleSheets[0] || document.createElement("style");

  // If the stylesheet already exists, append the rule to it
  if (styleSheet === document.styleSheets[0]) {
    styleSheet.insertRule(
      `:where(.${className}) { ${styles} }`,
      styleSheet.cssRules.length
    );
  } else {
    // If no stylesheet exists, create a new one
    const styleTag = document.createElement("style");
    document.head.appendChild(styleTag);
    styleTag.innerHTML = `:where(.${className}) { ${styles} }`;
  }
}

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
    max-height: ${props.isexpanded === "true" ? props.expandedheight : '0px'};
  `
);

const MessageContainer = styled('div')<{
  fadeout: string;
  type: string;
}>`
  overflow: hidden;
  transition: max-height 0.35s ease-in-out, opacity 0.35s ease-in-out;
  ${({ type, fadeout }) =>
    (type === 'envelope' || type === 'drawer') &&
    `
      max-height: ${fadeout === 'true' ? '0' : '500px'}; /* Adjust to your typical max height */
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
      max-height: ${fadeout === 'true' ? '0' : '500px'}; /* Adjust to your icon size */
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
    border: 1px solid #ddd; /* Subtle border */
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* Subtle shadow */
    cursor: pointer;
    z-index: 9999; /* Ensure it appears above other elements */
    transition: transform 0.2s ease, background-color 0.2s ease;

    background-color: #ffffff;
    color: #000;
    
    &:hover {
      background-color: #f0f0f0; /* Slightly darker on hover */
      transform: scale(1.1); /* Slight zoom effect */
    }
  `
);

const Toast: React.FC<ToastProps & { onClose: () => void }> = React.memo(({
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
  isPausedOnHover = true, // Default is true to pause on hover
  direction = 'ltr'
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const toastRef = useRef<HTMLDivElement>(null);
  const expandedContentRef = useRef<HTMLDivElement>(null);
  const [fadeOutMessage, setFadeOutMessage] = useState(false);

  useEffect(() => {
    const toastContainerClassName = `toast-container-default-${id}`;
    const closeButtonClassName = `close-button-${id}`;

    // create default class for toastContainer
    createDynamicWhereClass(toastContainerClassName, `
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
      padding: 0.55rem 0.85rem;
      border-radius: 0.5rem;
      background-color: ${backgroundColors[type] || backgroundColors.custom};
      color : black;
      max-width: 50vw;
      `)

  }, [type]);

  const handleClick = (e: any) => {
    if (e.target.closest("button") || e.target.closest("[data-action]")) return;
    if (expandedContent) {
      if (type === 'envelope') {
        if (!isExpanded) {
          setFadeOutMessage(true);
          setTimeout(() => {
            setIsExpanded(true);
            onExpand(true);
          }, 150);

          onExpandToast(id) // Trigger onExpandToast Function
        }
      } else if (type === 'drawer') {
        if (!isExpanded) {
          setFadeOutMessage((prev) => !prev);
          setTimeout(() => {
            setIsExpanded((prev) => !prev);
            onExpand(!isExpanded);
          }, 150);
        } else {
          setIsExpanded((prev) => !prev);
          onExpand(!isExpanded);
          setFadeOutMessage(!isExpanded);
        }
        onExpandToast(id) // Trigger onExpandToast Function
      } else {
        if(!isExpanded) onExpandToast(id)
        setIsExpanded((prev) => !prev);
        onExpand(!isExpanded);
      }
    }
  };

  const handleMouseEnter = () => {
    if (isPausedOnHover) {
      pauseToastTimer(id); // Pause if isPausedOnHover is true
    }
  };

  const handleMouseLeave = () => {
    if (isPausedOnHover) {
      resumeToastTimer(id); // Resume if isPausedOnHover is true
    }
  };

  const backgroundColors: Record<string, string> = {
    success: '#D1FAE5',
    error: '#FEE2E2',
    info: '#DBEAFE',
    custom: '#ffffff',
    warning: '#fff4b7',
    tip: '#ffffff',
  };

  const toastFunctions = {
    update: (updates: Partial<any>) => updateToast(id, updates),
    remove: () => removeToast(id),
    removeAll: () => removeAllToast(),
  };

  const expandedHeight = expandedContentRef.current?.scrollHeight + 'px';

  // Global Theme styles and class from Toast Container
  const typeThemeStyle = toastTypeTheming[type]?.style || {};
  const typeThemeClass = `${toastTypeTheming[type]?.className || ''}`

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

    >
      {typeof message === 'function' ? (
        <>{message(toastFunctions)}</>
      ) : (
        <FlexContainer>
          <FlexItems>
            <IconContainer type={type} fadeout={fadeOutMessage.toString()} style={{ flexShrink: 0, ...iconStyle }}>
              {icon || defaultIcons[type]}
            </IconContainer>
            <MessageContainer
            type={type}
            fadeout={fadeOutMessage.toString()}
            >
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
});

export default Toast;

