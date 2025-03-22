import { createElement } from 'react';
import { setup } from 'goober';
import { ToastPosition } from './components/types';
setup(createElement);

export * from './components/toast-container';
export * from './components/toast';
export { ToastPosition };
