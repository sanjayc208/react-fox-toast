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
        <TabsList>
          <TabsTrigger value="usage">Usage</TabsTrigger>
          <TabsTrigger value="types">Toast Types</TabsTrigger>
          <TabsTrigger value="customization">Customization</TabsTrigger>
          <TabsTrigger value="management">Toast Management</TabsTrigger>
        </TabsList>
        <TabsContent value="usage">
          <Card>
            <CardHeader>
              <CardTitle>Basic Usage</CardTitle>
              <CardDescription>How to use the toast() API in your components</CardDescription>
            </CardHeader>
            <CardContent>
            <CustomSyntaxHighlighter className="w-full border rounded-lg overflow-x-auto shadow-lg"
              codeSyntax={`import { toast } from "react-fox-toast";

function MyComponent() {
  const showToast = () => {
    toast.success("Success! The action was completed.");
  };

  return <Button onClick={showToast}>Show Success Toast</Button>;
}`}
              language='JSX'  />
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
              codeSyntax={`toast.success("Operation Successful!");`}
              language='JSX'  />
                {/* <pre className="bg-muted p-4 rounded-md">
                  <code>{`toast.success("Operation Successful!");`}</code>
                </pre> */}
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
              codeSyntax={`toast.error("Something went wrong!");`}
              language='JSX'  />
                {/* <pre className="bg-muted p-4 rounded-md">
                  <code>{`toast.error("Something went wrong!");`}</code>
                </pre> */}
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
              codeSyntax={`toast.info("This is some information.");`}
              language='JSX'  />
                {/* <pre className="bg-muted p-4 rounded-md">
                  <code>{`toast.info("This is some information.");`}</code>
                </pre> */}
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
              codeSyntax={`toast.promise(
  fetchData(), // Your promise function
  {
    loading: 'Loading data...',
    success: 'Data loaded successfully!',
    error: 'Failed to load data!',
  }
);`}
              language='JSX'  />
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
              codeSyntax={`toast.custom(
  ({ update, remove, dismiss }) => (
    <div>
      <span>This is a toast with custom content!</span>
      <Button onClick={() => update({ message: 'Updated!' })}>
        Update
      </Button>
      <Button onClick={() => remove()}>Close</Button>
      <Button onClick={() => dismiss()}>Dismiss All</Button>
    </div>
  ),
  { position: 'top-right', duration: Infinity }
);`}
              language='JSX'  />
                {/* <pre className="bg-muted p-4 rounded-md">
                  <code>{`toast.custom(
  ({ update, remove, dismiss }) => (
    <div>
      <span>This is a toast with custom content!</span>
      <Button onClick={() => update({ message: 'Updated!' })}>
        Update
      </Button>
      <Button onClick={() => remove()}>Close</Button>
      <Button onClick={() => dismiss()}>Dismiss All</Button>
    </div>
  ),
  { position: 'top-right', duration: Infinity }
);`}</code>
                </pre> */}
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        {/* <TabsContent value="customization">
          <Card>
            <CardHeader>
              <CardTitle>Customization Options</CardTitle>
              <CardDescription>Available options for customizing toasts</CardDescription>
            </CardHeader>
            <CardContent>
              <pre className="bg-muted p-4 rounded-md">
                <code>{`toast.success("Message", {
  position: 'top-right',
  duration: 5000,
  isCloseBtn: true,
  expandedContent: <div>Additional details</div>,
  className: 'custom-class',
  icon: <CustomIcon />,
});`}</code>
              </pre>
              <ul className="list-disc list-inside mt-4 space-y-2">
                <li><strong>position:</strong> 'top-left', 'top-right', 'top-center', 'bottom-left', 'bottom-right', 'bottom-center'</li>
                <li><strong>duration:</strong> Time in milliseconds (use Infinity for persistent toasts)</li>
                <li><strong>isCloseBtn:</strong> Boolean to show/hide close button</li>
                <li><strong>expandedContent:</strong> Additional content shown when toast is expanded</li>
                <li><strong>className:</strong> Custom CSS classes</li>
                <li><strong>icon:</strong> Custom icon component</li>
              </ul>
            </CardContent>
          </Card>
        </TabsContent> */}
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
                    <TableCell className="font-medium">isPause</TableCell>
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
              codeSyntax={`toast.success("Operation Successful!", {
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
  isPause: false
});`}
              language='JSX'  />
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="management">
          <Card>
            <CardHeader>
              <CardTitle>Toast Management</CardTitle>
              <CardDescription>How to update and remove toasts</CardDescription>
            </CardHeader>
            <CardContent>
              <h3 className="text-lg font-semibold mb-2">Updating Toasts</h3>
              <p className="mb-2">
                You can update an existing toast using the <code>toast.update()</code> method. This is useful when you want to change the content or options of a toast that's already been displayed.
              </p>
              <CustomSyntaxHighlighter className="w-full border rounded-lg overflow-x-auto shadow-lg mb-4"
              codeSyntax={`const toastId = toast.success("Initial message");

// Later in your code
toast.update(toastId, {
  message: "Updated message",
  icon: <NewIcon />,
  duration: 3000,
  // ... any other options you want to update
});`}
              language='JSX'  />
              <p className="mb-2">
                The <code>update()</code> method takes two parameters:
              </p>
              <ul className="list-disc list-inside mb-6">
                <li><code>id</code>: The ID of the toast you want to update (returned when creating a toast)</li>
                <li><code>updates</code>: An object containing the properties you want to update, including the new message</li>
              </ul>

              <h3 className="text-lg font-semibold mb-2">Removing Toasts</h3>
              <p className="mb-2">
                To remove a specific toast, you can use the <code>toast.remove()</code> method. This is often used for manual dismissal or when you want to remove a toast programmatically.
              </p>
              <CustomSyntaxHighlighter className="w-full border rounded-lg overflow-x-auto shadow-lg mb-4"
              codeSyntax={`const toastId = toast.info("This is an info message");

// Later in your code
toast.remove(toastId);`}
              language='JSX'  />
              <p className="mb-2">
                The <code>remove()</code> method takes one parameter:
              </p>
              <ul className="list-disc list-inside mb-4">
                <li><code>id</code>: The ID of the toast you want to remove</li>
              </ul>

              <h3 className="text-lg font-semibold mb-2">Example: Update and Remove</h3>
              <CustomSyntaxHighlighter className="w-full border rounded-lg overflow-x-auto shadow-lg"
              codeSyntax={`import { toast } from 'react-fox-toast';

function MyComponent() {
  const handleOperation = async () => {
    const toastId = toast.info("Operation in progress...");

    try {
      // Perform some async operation
      await someAsyncOperation();

      // Update the toast on success
      toast.update(toastId, {
        message: "Operation completed successfully!",
        type: "success",
        icon: <CheckCircle />,
        duration: 3000,
      });

      // Remove the toast after 3 seconds
      setTimeout(() => {
        toast.remove(toastId);
      }, 3000);
    } catch (error) {
      // Update the toast on error
      toast.update(toastId, {
        message: "Operation failed. Please try again.",
        type: "error",
        icon: <AlertCircle />,
        duration: 5000,
      });
    }
  };

  return <Button onClick={handleOperation}>Start Operation</Button>;
}`}
              language='JSX'  />
              <p className="mt-4">
                This example demonstrates how to create an initial toast, update its content based on the operation result, and then remove it after a specified duration.
              </p>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

