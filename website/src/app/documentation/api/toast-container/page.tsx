import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function ToastContainerPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">ToastContainer Component Documentation</h1>
      <p className="text-lg text-muted-foreground">
        The ToastContainer component is used to create a global container for toasts in your React application.
      </p>

      <Tabs defaultValue="usage">
        <TabsList>
          <TabsTrigger value="usage">Usage</TabsTrigger>
          <TabsTrigger value="theming">Global Theming</TabsTrigger>
        </TabsList>
        <TabsContent value="usage">
          <Card>
            <CardHeader>
              <CardTitle>Basic Usage</CardTitle>
              <CardDescription>How to use the ToastContainer component in your app</CardDescription>
            </CardHeader>
            <CardContent>
              <pre className="bg-muted p-4 rounded-md">
                <code>{`import { ToastContainer } from "react-fox-toast";

function App() {
  return (
    <div>
      <ToastContainer />
      {/* Your app content */}
    </div>
  );
}`}</code>
              </pre>
              <p className="mt-4">
                Add the ToastContainer component to your root component or layout to enable toast notifications throughout your application.
              </p>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="theming">
          <Card>
            <CardHeader>
              <CardTitle>Global Theming</CardTitle>
              <CardDescription>How to apply global themes to your toasts</CardDescription>
            </CardHeader>
            <CardContent>
              <pre className="bg-muted p-4 rounded-md">
                <code>{`<ToastContainer 
  toastTypeTheming={{
    success: {
      style: {
        backgroundColor: 'blue',
        color: '#155E00',
      },
      className: 'bg-blue-10'
    },
    error: {
      style: {
        backgroundColor: 'green',
        color: '#B91C1C',
      },
      className: 'error-toast-class',
    },
    info: {
      style: {
        backgroundColor: '#white',
        color: '#1D4ED8',
      },
      className: 'info-toast-class',
    },
    custom: {
      style: {
        backgroundColor: 'yellow',
        color: '#6B7280',
      },
      className: 'custom-toast-class',
    },
  }}
/>`}</code>
              </pre>
              <p className="mt-4">
                Use the toastTypeTheming prop to apply global styles and classes to different types of toasts. This allows for consistent styling across your application while still allowing for customization of individual toasts.
              </p>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

