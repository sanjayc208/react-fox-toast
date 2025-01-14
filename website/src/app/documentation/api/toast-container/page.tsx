import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import CustomSyntaxHighlighter from '@/components/modules/custom-syntax-highlighter';
import { Table, TableBody, TableCell, TableHeader, TableRow } from "@/components/ui/table";

export default function ToastContainerPage() {
  return (
    <div className="xs:max-w-[95vw] md:max-w-full">
      <h1 className="text-3xl font-bold">ToastContainer Component Documentation</h1>
      <p className="text-lg text-muted-foreground">
        The ToastContainer component is used to create a global container for toasts in your React application.
      </p>

      <Tabs defaultValue="usage">
        <TabsList>
          <TabsTrigger value="usage">Usage</TabsTrigger>
          {/* <TabsTrigger value="theming">Global Theming</TabsTrigger> */}
        </TabsList>

        <TabsContent value="usage">
          <Card>
            <CardHeader>
              <CardTitle>Basic Usage</CardTitle>
              <CardDescription>How to use the ToastContainer component in your app</CardDescription>
            </CardHeader>
            <CardContent>
              <CustomSyntaxHighlighter
                className="w-full border rounded-lg overflow-x-auto shadow-lg"
                tabs={{
                  'jsx': {
                    syntax: `import { ToastContainer } from "react-fox-toast";

function App() {
  return (
    <div>
      <ToastContainer 
        toastTypeTheming={} // Go through Theming Page for more details on this
        gap={} // Gap need between each toast
        position={} // default global position example 'top-center'
        direction="" // Add this to change text direction (optional)
        isPausedOnHover={true} // Add this to pause the toast on hover (optional)
      />
      {/* Your app content */}
    </div>
  );
}`,
                    language: 'jsx'
                  }
                }}
              />
              <p className="mt-4">
                Add the ToastContainer component to your root component or layout to enable toast notifications throughout your application.
              </p>
            </CardContent>
          </Card>

          <Card className="mt-4">
            <CardHeader>
              <CardTitle>Props</CardTitle>
              <CardDescription>Available Props for the ToastContainer</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableCell className="text-black font-bold">Prop</TableCell>
                    <TableCell className="text-black font-bold">Description</TableCell>
                    <TableCell className="text-black font-bold">Type</TableCell>
                    <TableCell className="text-black font-bold">Default</TableCell>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell>toastTypeTheming</TableCell>
                    <TableCell>
                      A configuration object to define custom styles and classes for different toast types (e.g., success, error, etc.).
                    </TableCell>
                    <TableCell>
                      <code>{`{ success: object, error: object, info: object, custom: object }`}</code>
                    </TableCell>
                    <TableCell>None</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>gap</TableCell>
                    <TableCell>
                      Defines the gap between toast notifications in the container.
                    </TableCell>
                    <TableCell>
                      <code>{`number`}</code>
                    </TableCell>
                    <TableCell>10</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>position</TableCell>
                    <TableCell>
                      Defines the default position of the toast container (e.g., 'top-left', 'bottom-right').
                    </TableCell>
                    <TableCell>
                      <code>{`'top-right' | 'top-left' | 'bottom-left' | 'bottom-right'`}</code>
                    </TableCell>
                    <TableCell>'top-right'</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>direction</TableCell>
                    <TableCell>
                      Defines the text direction inside the ToastContainer. You can set it to either 'ltr' (left-to-right) or 'rtl' (right-to-left).
                    </TableCell>
                    <TableCell>
                      <code>{`'ltr' | 'rtl'`}</code>
                    </TableCell>
                    <TableCell>'ltr'</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>isPausedOnHover</TableCell>
                    <TableCell>
                      Defines the pause of the toast container when a user hovers over a toast notification.
                    </TableCell>
                    <TableCell>
                      <code>{`boolean`}</code>
                    </TableCell>
                    <TableCell>true</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
