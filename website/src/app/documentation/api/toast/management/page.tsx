
'use client';
import React from "react"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import CustomSyntaxHighlighter from '@/components/modules/custom-syntax-highlighter'

export default function Management() {

    return (
        <Card className="xs:max-w-[95vw] md:max-w-full">
            <CardHeader>
                <CardTitle>Toast Management</CardTitle>
                <CardDescription>How to update, remove, fetch remainingTime, clear all toasts, and pause/resume toasts</CardDescription>
            </CardHeader>
            <CardContent>
                <div id="updating-toasts">
                    <h3 className="text-lg font-semibold mb-2">Updating Toasts</h3>
                    <p className="mb-2">
                        Use the <code>toast.update()</code> method to update the content or options of an existing toast.
                    </p>
                    <CustomSyntaxHighlighter
                        className="w-full border rounded-lg overflow-x-auto shadow-lg mb-4"
                        tabs={{
                            'jsx': {
                                syntax: `const toastId = toast.success("Initial message");

// Later in your code
toast.update(toastId, {
  message: "Updated message",
  icon: <NewIcon />,
  duration: 3000,
  // ... other options
});`,
                                language: 'jsx'
                            }
                        }}
                    />
                    <p className="mb-2">
                        <code>update()</code> accepts two parameters:
                    </p>
                    <ul className="list-disc list-inside mb-6">
                        <li><code>id</code>: The ID of the toast to update</li>
                        <li><code>updates</code>: An object with new properties for the toast</li>
                    </ul>
                </div>
                {/* Removing Toasts */}
                <div id="removing-toasts">
                    <h3 className="text-lg font-semibold mb-2">Removing Toasts</h3>
                    <p className="mb-2">
                        Use <code>toast.remove()</code> to manually dismiss a specific toast.
                    </p>
                    <CustomSyntaxHighlighter
                        className="w-full border rounded-lg overflow-x-auto shadow-lg mb-4"
                        tabs={{
                            'jsx': {
                                syntax: `const toastId = toast.info("This is an info message");

// Later in your code
toast.remove(toastId);`,
                                language: 'jsx'
                            }
                        }}
                    />
                    <p className="mb-2">
                        <code>remove()</code> accepts one parameter:
                    </p>
                    <ul className="list-disc list-inside mb-4">
                        <li><code>id</code>: The ID of the toast to remove</li>
                    </ul>
                </div>

                {/* Clearing All Toasts */}
                <div id="clearing-toasts">
                    <h3 className="text-lg font-semibold mb-2">Clearing All Toasts</h3>
                    <p className="mb-2">
                        Use <code>toast.removeAll()</code> to clear all active toasts on the page.
                    </p>
                    <CustomSyntaxHighlighter
                        className="w-full border rounded-lg overflow-x-auto shadow-lg mb-4"
                        tabs={{
                            'jsx': {
                                syntax: `// Remove all toasts
toast.removeAll();`,
                                language: 'jsx'
                            }
                        }}
                    />
                </div>

                {/* Getting Remaining Time */}
                <div id="remaining-time">
                    <h3 className="text-lg font-semibold mb-2">Getting Remaining Time for a Toast</h3>
                    <p className="mb-2">
                        You can use the <code>toast.remainingTime()</code> method to retrieve the remaining time before a toast auto-dismisses.
                    </p>
                    <CustomSyntaxHighlighter
                        className="w-full border rounded-lg overflow-x-auto shadow-lg mb-4"
                        tabs={{
                            'jsx': {
                                syntax: `const toastId = toast.info("This is an info message");

// Check remaining time for this toast
const remainingTime = toast.remainingTime(toastId);

console.log('Remaining time in milliseconds:',remainingTime)`,
                                language: 'jsx'
                            }
                        }}
                    />
                    <p className="mb-2">
                        <code>remainingTime()</code> accepts one parameter:
                    </p>
                    <ul className="list-disc list-inside mb-4">
                        <li><code>id</code>: The ID of the toast whose remaining time you want to check</li>
                    </ul>
                </div>
                {/* Pausing and Resuming Toasts */}
                <div id="pausing-resuming">
                    <h3 className="text-lg font-semibold mb-2">Pausing and Resuming Toasts</h3>
                    <p className="mb-2">
                        You can pause and resume a specific toast using the <code>toast.pause()</code> and <code>toast.resume()</code> methods. This can be useful when you want to pause the auto-dismiss countdown based on user interaction, like hovering over or clicking the toast.
                    </p>

                    <p className="mb-2">Example:</p>

                    <CustomSyntaxHighlighter
                        className="w-full border rounded-lg overflow-x-auto shadow-lg mb-4"
                        tabs={{
                            'jsx': {
                                syntax: `import React, { useState, useEffect } from 'react';
import { toast } from 'react-fox-toast';

const ToastComponent = () => {
  const [toastId, setToastId] = useState(null);

  useEffect(() => {
    const id = toast.success("This is a success message");
    setToastId(id);
  }, []);

  const handlePause = () => {
    if (toastId) {
      toast.pause(toastId);
    }
  };

  const handleResume = () => {
    if (toastId) {
      toast.resume(toastId);
    }
  };

  return (
    <div>
      <h3>Hover over the div to pause the toast</h3>
      <div
        onMouseEnter={handlePause}  // Pauses the toast on hover
        onMouseLeave={handleResume} // Resumes the toast when the mouse leaves
      >
        Hover here to pause/resume the toast
      </div>
    </div>
  );
};

export default ToastComponent;`,
                                language: 'jsx'
                            }
                        }}
                    />

                    <p className="mb-2">
                        In the example above, the toast pauses when the user hovers over it and resumes when the mouse leaves.
                    </p>

                    <p className="mb-2">
                        <code>pause()</code> and <code>resume()</code> each accept one parameter:
                    </p>
                    <ul className="list-disc list-inside mb-4">
                        <li><code>id</code>: The ID of the toast you want to pause or resume</li>
                    </ul>
                </div>

                {/* Using the `onDismiss` Callback */}
                <div id="on-dismiss-callback">
                    <h3 className="text-lg font-semibold mb-2">Using the `onDismiss` Callback</h3>
                    <p className="mb-2">
                        You can provide an <code>onDismiss</code> callback function as an option when creating a toast. This function will be called when the toast is dismissed (either automatically or manually). This can be useful if you need to perform actions like logging or cleaning up resources after the toast disappears.
                    </p>

                    <CustomSyntaxHighlighter
                        className="w-full border rounded-lg overflow-x-auto shadow-lg mb-4"
                        tabs={{
                            'jsx': {
                                syntax: `const toastId = toast(
  <>Custom JSX component</>,
  {
    onDismiss: (id) => {
      console.log('Toast dismissed:', id);
    },
  }
);`,
                                language: 'jsx'
                            }
                        }}
                    />

                    <p className="mb-2">
                        The <code>onDismiss</code> callback accepts one parameter:
                    </p>
                    <ul className="list-disc list-inside mb-4">
                        <li><code>id</code>: The ID of the dismissed toast. This can be useful for performing specific actions or tracking which toast was dismissed.</li>
                    </ul>

                    <p className="mb-2">
                        Here's an example of using multiple toasts with individual dismiss handling:
                    </p>

                    <CustomSyntaxHighlighter
                        className="w-full border rounded-lg overflow-x-auto shadow-lg mb-4"
                        tabs={{
                            'jsx': {
                                syntax: `const toastId1 = toast.success("Success Toast", {
  onDismiss: (id) => console.log("First toast dismissed:", id),
});

const toastId2 = toast.error("Error Toast", {
  onDismiss: (id) => console.log("Second toast dismissed:", id),
});`,
                                language: 'jsx'
                            }
                        }}
                    />
                    <p className="mb-2">
                        In this example, each toast has its own `onDismiss` handler that logs the ID of the dismissed toast.
                    </p>
                </div>
            </CardContent>
        </Card>
    )
}