import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { AlertCircle, CheckCircle, Info, Rocket, Clock } from 'lucide-react'
import CustomSyntaxHighlighter from '@/components/custom-syntax-highlighter'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

export default function ToastAPIPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">toast() API Documentation</h1>
      <p className="text-lg text-muted-foreground">
        The toast() API is used for creating various types of toast notifications in your React application.
      </p>

      <Tabs defaultValue="usage">
        <TabsList className="bg-white">
          <TabsTrigger className="data-[state=active]:bg-defaultBase" value="usage">Usage</TabsTrigger>
          <TabsTrigger className="data-[state=active]:bg-defaultBase" value="types">Toast Types</TabsTrigger>
          <TabsTrigger className="data-[state=active]:bg-defaultBase" value="customization">Customization</TabsTrigger>
          <TabsTrigger className="data-[state=active]:bg-defaultBase" value="management">Toast Management</TabsTrigger>
        </TabsList>
        <TabsContent value="usage">
          <Card>
            <CardHeader>
              <CardTitle>Basic Usage</CardTitle>
              <CardDescription>How to use the toast() API in your components</CardDescription>
            </CardHeader>
            <CardContent>
              <CustomSyntaxHighlighter className="w-full border rounded-lg overflow-x-auto shadow-lg"
                tabs={[{
                  codeSyntax: `import { toast } from "react-fox-toast";

function MyComponent() {
  const showToast = () => {
    toast("Toast it Yourself");
  };

  return <Button onClick={showToast}>Show Success Toast</Button>;
}`
                }]}
              />
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="types">
          <div className="space-y-3">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <CheckCircle className="mr-2 h-5 w-5 text-green-500" />
                  Success Toast
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CustomSyntaxHighlighter className="w-full border rounded-lg overflow-x-auto shadow-lg"
                  tabs={[{
                    codeSyntax: `toast.success("Operation Successful!");`
                  }]}
                />
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <AlertCircle className="mr-2 h-5 w-5 text-red-500" />
                  Error Toast
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CustomSyntaxHighlighter className="w-full border rounded-lg overflow-x-auto shadow-lg"
                  tabs={[{
                    codeSyntax: `toast.error("Something went wrong!");`
                  }]}
                />
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Info className="mr-2 h-5 w-5 text-blue-500" />
                  Info Toast
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CustomSyntaxHighlighter className="w-full border rounded-lg overflow-x-auto shadow-lg"
                  tabs={[{
                    codeSyntax: `toast.info("This is some information.");`
                  }]}
                />
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Clock className="mr-2 h-5 w-5 text-yellow-500" />
                  Promise Toast
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CustomSyntaxHighlighter className="w-full border rounded-lg overflow-x-auto shadow-lg"
                  tabs={[{
                    codeSyntax: `toast.promise(
  fetchData(), // Your promise function
  {
    loading: 'Loading data...',
    success: 'Data loaded successfully!',
    error: 'Failed to load data!',
  }
);`
                  }]}
                />
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Rocket className="mr-2 h-5 w-5 text-purple-500" />
                  Custom Toast
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CustomSyntaxHighlighter className="w-full border rounded-lg overflow-x-auto shadow-lg"
                  tabs={[{
                    codeSyntax: `toast('Customize toast here');

//or you can use toast.custom() also
toast.cusotm('Customize toast here');                   `
                  }]}
                />
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        <TabsContent value="customization">
          <Card>
            <CardHeader>
              <CardTitle>Customization Options</CardTitle>
              <CardDescription>Available options for customizing toasts</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Option</TableHead>
                    <TableHead>Type</TableHead>
                    <TableHead>Description</TableHead>
                    <TableHead>Possible Values</TableHead>
                    <TableHead>Default</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-medium">position</TableCell>
                    <TableCell>string</TableCell>
                    <TableCell>Determines where the toast appears on the screen</TableCell>
                    <TableCell>'top-left', 'top-right', 'top-center', 'bottom-left', 'bottom-right', 'bottom-center'</TableCell>
                    <TableCell>'bottom-right'</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">duration</TableCell>
                    <TableCell>number</TableCell>
                    <TableCell>How long the toast stays visible (in milliseconds)</TableCell>
                    <TableCell>Any positive number, or Infinity for persistent toasts</TableCell>
                    <TableCell>5000</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">isCloseBtn</TableCell>
                    <TableCell>boolean</TableCell>
                    <TableCell>Whether to show a close button on the toast</TableCell>
                    <TableCell>true, false</TableCell>
                    <TableCell>true</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">expandedContent</TableCell>
                    <TableCell>ReactNode</TableCell>
                    <TableCell>Additional content shown when the toast is expanded</TableCell>
                    <TableCell>Any valid React element or component</TableCell>
                    <TableCell>undefined</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">className</TableCell>
                    <TableCell>string</TableCell>
                    <TableCell>Custom CSS classes to apply to the toast</TableCell>
                    <TableCell>Any valid CSS class names</TableCell>
                    <TableCell>''</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">icon</TableCell>
                    <TableCell>ReactNode</TableCell>
                    <TableCell>Custom icon to display in the toast</TableCell>
                    <TableCell>Any valid React element or component</TableCell>
                    <TableCell>Default icon based on toast type</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">iconStyle</TableCell>
                    <TableCell>React.CSSProperties</TableCell>
                    <TableCell>Inline styles to apply to the toast icon</TableCell>
                    <TableCell>Any valid CSS properties in object format</TableCell>
                    <TableCell>{'{}'}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">iconClassName</TableCell>
                    <TableCell>string</TableCell>
                    <TableCell>Custom CSS classes to apply to the toast icon</TableCell>
                    <TableCell>Any valid CSS class names or Tailwind classes</TableCell>
                    <TableCell>''</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">expandedContentClassName</TableCell>
                    <TableCell>string</TableCell>
                    <TableCell>Custom CSS classes to apply to the expanded content</TableCell>
                    <TableCell>Any valid CSS class names or Tailwind classes</TableCell>
                    <TableCell>''</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">expandedContentStyle</TableCell>
                    <TableCell>React.CSSProperties</TableCell>
                    <TableCell>Inline styles to apply to the expanded content</TableCell>
                    <TableCell>Any valid CSS properties in object format</TableCell>
                    <TableCell>{'{}'}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">closeBtnStyle</TableCell>
                    <TableCell>React.CSSProperties</TableCell>
                    <TableCell>Inline styles to apply to the expanded content</TableCell>
                    <TableCell>Any valid CSS properties in object format</TableCell>
                    <TableCell>{'{}'}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">isPausedOnHover</TableCell>
                    <TableCell>boolean</TableCell>
                    <TableCell>Whether to pause the toast timer on hover</TableCell>
                    <TableCell>true, false</TableCell>
                    <TableCell>true</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
              <div className="mt-4">
                <h3 className="text-lg font-semibold mb-2">Usage Example:</h3>
                <CustomSyntaxHighlighter className="w-full border rounded-lg overflow-x-auto shadow-lg mb-4"
                  tabs={[{
                    codeSyntax: `toast.success("Operation Successful!", {
  position: 'top-right',
  duration: 5000,
  isCloseBtn: true,
  expandedContent: <div>Additional details about the operation</div>,
  className: 'custom-toast-class',
  icon: <CustomSuccessIcon />,
  iconStyle: { color: 'green' },
  iconClassName: 'text-2xl',
  expandedContentClassName: 'bg-gray-100 p-2',
  expandedContentStyle: { maxHeight: '100px', overflow: 'auto' },
  closeBtnStyle: { backgroundColor: 'green' },
  isPausedOnHover: false
});`
                  }]}
                />
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="management">
  <Card>
    <CardHeader>
      <CardTitle>Toast Management</CardTitle>
      <CardDescription>How to update, remove, fetch remainingTime, clear all toasts, and pause/resume toasts</CardDescription>
    </CardHeader>
    <CardContent>
      <h3 className="text-lg font-semibold mb-2">Updating Toasts</h3>
      <p className="mb-2">
        Use the <code>toast.update()</code> method to update the content or options of an existing toast.
      </p>
      <CustomSyntaxHighlighter
        className="w-full border rounded-lg overflow-x-auto shadow-lg mb-4"
        tabs={[
          {
            codeSyntax: `const toastId = toast.success("Initial message");

// Later in your code
toast.update(toastId, {
  message: "Updated message",
  icon: <NewIcon />,
  duration: 3000,
  // ... other options
});`
          }
        ]}
      />
      <p className="mb-2">
        <code>update()</code> accepts two parameters:
      </p>
      <ul className="list-disc list-inside mb-6">
        <li><code>id</code>: The ID of the toast to update</li>
        <li><code>updates</code>: An object with new properties for the toast</li>
      </ul>

      <h3 className="text-lg font-semibold mb-2">Removing Toasts</h3>
      <p className="mb-2">
        Use <code>toast.remove()</code> to manually dismiss a specific toast.
      </p>
      <CustomSyntaxHighlighter
        className="w-full border rounded-lg overflow-x-auto shadow-lg mb-4"
        tabs={[
          {
            codeSyntax: `const toastId = toast.info("This is an info message");

// Later in your code
toast.remove(toastId);`
          }
        ]}
      />
      <p className="mb-2">
        <code>remove()</code> accepts one parameter:
      </p>
      <ul className="list-disc list-inside mb-4">
        <li><code>id</code>: The ID of the toast to remove</li>
      </ul>

      <h3 className="text-lg font-semibold mb-2">Clearing All Toasts</h3>
      <p className="mb-2">
        Use <code>toast.removeAll()</code> to clear all active toasts on the page.
      </p>
      <CustomSyntaxHighlighter
        className="w-full border rounded-lg overflow-x-auto shadow-lg mb-4"
        tabs={[
          {
            codeSyntax: `// Remove all toasts
toast.removeAll();`
          }
        ]}
      />

      <h3 className="text-lg font-semibold mb-2">Getting Remaining Time for a Toast</h3>
      <p className="mb-2">
        You can use the <code>toast.remainingTime()</code> method to retrieve the remaining time before a toast auto-dismisses.
      </p>
      <CustomSyntaxHighlighter
        className="w-full border rounded-lg overflow-x-auto shadow-lg mb-4"
        tabs={[
          {
            codeSyntax: `const toastId = toast.info("This is an info message");

// Check remaining time for this toast
const remainingTime = toast.remainingTime(toastId);

console.log('Remaining time in milliseconds:',remainingTime)`
          }
        ]}
      />
      <p className="mb-2">
        <code>remainingTime()</code> accepts one parameter:
      </p>
      <ul className="list-disc list-inside mb-4">
        <li><code>id</code>: The ID of the toast whose remaining time you want to check</li>
      </ul>

      <h3 className="text-lg font-semibold mb-2">Pausing and Resuming Toasts</h3>
      <p className="mb-2">
        You can pause and resume a specific toast using the <code>toast.pause()</code> and <code>toast.resume()</code> methods. This can be useful when you want to pause the auto-dismiss countdown based on user interaction, like hovering over or clicking the toast.
      </p>

      <p className="mb-2">Example:</p>

 <CustomSyntaxHighlighter
  className="w-full border rounded-lg overflow-x-auto shadow-lg mb-4"
  tabs={[
    {
      codeSyntax: `import React, { useState, useEffect } from 'react';
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

export default ToastComponent;`
    }
  ]}
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
    </CardContent>
  </Card>
</TabsContent>



      </Tabs>
    </div>
  )
}