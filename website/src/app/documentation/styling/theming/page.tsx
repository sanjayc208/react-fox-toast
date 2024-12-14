import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import CustomSyntaxHighlighter from '@/components/custom-syntax-highlighter'

export default function ThemingPage() {
  return (
    <div className="space-y-6">
      <h1 className="mb-4 text-3xl font-bold">Theming</h1>
      <p className="text-lg text-muted-foreground">
        Learn how to customize the look and feel of your application using our theming system.
      </p>

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
              codeSyntax: `<ToastContainer 
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
    </div>
  )
}  