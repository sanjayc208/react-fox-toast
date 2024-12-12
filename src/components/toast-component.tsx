// src/components/toast-component.tsx
'use client';

import React, { useState, useEffect, useRef } from 'react';
import { ToastProps } from './types';
import { defaultIcons } from './default-icons';
import { removeToast, updateToast, removeAllToast, pauseToastTimer, resumeToastTimer } from './toast-store';
import { styled , keyframes} from 'goober';

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
      const { isvisible, isclosing, position, type, style } = props; // Extract non-DOM props

      return `
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        will-change: transform;
        animation: ${isclosing === "false" ? fadeIn(position) : fadeOut(position)} 0.35s ease-in-out;
        max-width: 400px;
        ${style}
      `;
    }
  );


// Function to create a CSS class dynamically with :where() for low specificity
function createDynamicClass(className: any, styles: any) {
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

const CloseButton = styled('button')(
  () => `
  padding-left: 0.5rem;
  border-radius: 50%;
  outline: none;
  background: none;
  border: none;
  cursor: pointer;
`
);

const ExpandedContent = styled('div')(
  (props: any) => `
    color: black;
    overflow: hidden;
    transition: all 0.3s ease-in-out;
    max-height: ${props.isexpanded  === "true" ? props.expandedheight : '0px'};
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
  toastTypeTheming ={},
  isPausedOnHover = true, // Default is true to pause on hover
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const toastRef = useRef<HTMLDivElement>(null);
  const expandedContentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
      // requestAnimationFrame(() => setIsVisible(true));
    // create default class for toastContainer
    createDynamicClass(`toast-container-default-${id}` , `
      padding: 0.55rem 0.85rem;
      border-radius: 0.5rem;
      background-color: ${backgroundColors[type] || backgroundColors.custom};
      color : black;
      `)
  }, [type]);

  const handleClick = (e: any) => {
    if (e.target.closest("button") || e.target.closest("[data-action]")) return;
    if (expandedContent) {
      setIsExpanded((prev) => !prev);
      onExpand(!isExpanded);
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
    custom: '#F3F4F6',
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
      isvisible={isVisible.toString()}
      isclosing={isClosing.toString()}
      style={{...style,...typeThemeStyle}}

    >
      {typeof message === 'function' ? (
        <>{message(toastFunctions)}</>
      ) : (
        <FlexContainer>
          <FlexItems>
            <div style={{ flexShrink: 0, ...iconStyle }}>
              {icon || defaultIcons[type]}
            </div>
            <div>{message}</div>
          </FlexItems>
            {isCloseBtn && <CloseButton onClick={onClose}>
            &#x2715;
          </CloseButton>}
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

