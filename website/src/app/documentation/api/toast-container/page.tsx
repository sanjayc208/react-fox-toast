import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import CustomSyntaxHighlighter from '@/components/custom-syntax-highlighter'
import { Table, TableBody, TableCell, TableHeader, TableRow } from "@/components/ui/table"

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
                tabs={[{
                  codeSyntax: `import { ToastContainer } from "react-fox-toast";

function App() {
  return (
    <div>
      <ToastContainer 
        toastTypeTheming={} // Go through Theming Page for more details on this
        gap={} // Gap need between each toast
        position={} // default global position example 'top-center'
      />
      {/* Your app content */}
    </div>
  );
}`
                }]}
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
                    <TableCell>Prop</TableCell>
                    <TableCell>Description</TableCell>
                    <TableCell>Type</TableCell>
                    <TableCell>Default</TableCell>
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
                </TableBody>
              </Table>
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
              <p className="text-lg text-muted-foreground">
                Global theming allows you to customize the default appearance of each toast type.
                Here's an example of how you can pass the `toastTypeTheming` prop to customize your toasts.
              </p>
              <CustomSyntaxHighlighter
                className="w-full border rounded-lg overflow-x-auto shadow-lg"
                tabs={[{
                  codeSyntax:`<ToastContainer 
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
                  />`
                }]}
              />
              <p className="mt-4">
                Use the `toastTypeTheming` prop to apply global styles and classes to different types of toasts. This allows for consistent styling across your application while still allowing for customization of individual toasts.
              </p>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
