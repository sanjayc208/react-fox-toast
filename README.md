<a href="https://react-fox-toast.vercel.app/">
<p align="center">
  <img src="./assets/RFT_v1.1.0.gif" alt="Description of GIF">
</p>
</a>

<div align="center">
  <img src="https://badgen.net/npm/v/react-fox-toast" alt="NPM Version">
  <img src="https://packagephobia.com/badge?p=react-fox-toast" alt="NPM Package Size"> 
  <img src="https://badgen.net/static/license/MIT/yellow" alt="NPM Package Size">   
     
</div>
<div align="center">
<img src="https://badgen.net/bundlephobia/min/react-fox-toast" alt="Min Size">  
</div>
<br />

<div align="center">
<h2><strong><a href="https://react-fox-toast.vercel.app/">Website</a> 
<span> | </span>
<a href="https://react-fox-toast.vercel.app//documentation/getting-started">Documentation</a> 
</div>
<br />

# React Fox Toast - Flexible Toast Notifications for React and Next.js

`react-fox-toast` is a lightweight and customizable toast/notification component for React and Next.js. It supports various customization options and integrates seamlessly with libraries like TailwindCSS.

> **_NOTE:_** Works only on the client side. For SSR frameworks like Next.js, include `'use client';` at the top of your component.

## Features
- **Customizable**: Adjust position, duration, content, icons, and more.
- **Promise Support**: Display success/error messages based on promise results.
- **Custom Content**: Render components inside toasts.
- **Global Toast Container**: Manage toasts globally.
- **TailwindCSS Support**: Easy styling with TailwindCSS.
- **Pause on Hover**: Auto-dismiss timer pauses on hover.
- **Expandable Toasts**: Click to reveal more content.
- **Global Theme Support**: Apply consistent styling across toasts.
- **Lightweight**: Minimal performance impact.
- **Smooth Transitions**: Includes expand, slide-in, and slide-out animations.

## Installation

```bash
npm install react-fox-toast
# or
yarn add react-fox-toast
# or
pnpm add react-fox-toast
```

## Usage

### 1. Add `ToastContainer`
Wrap your root component with `ToastContainer` to enable toasts.

```typescript
'use client'; // Add if using Next.js
import { ToastContainer } from "react-fox-toast";

function App() {
  return (
    <div>
      <ToastContainer />
    </div>
  );
}

export default App;
```

### 2. Use the `toast` Hook
Call `toast` functions like `toast.success()` in your components.

```typescript
'use client'; // Add if using Next.js
import { toast } from "react-fox-toast";

function MyComponent() {
  const showToast = () => {
    toast.success("Success! The action was completed.");
  };

  return <button onClick={showToast}>Show Success Toast</button>;
}
```

## Learn More
- Detailed usage and examples are available in the [Documentation](https://react-fox-toast.vercel.app/documentation/getting-started).

## License
MIT License

For questions or feedback, open an issue or contribute on GitHub!