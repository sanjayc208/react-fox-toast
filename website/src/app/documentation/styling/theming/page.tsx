import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import CustomSyntaxHighlighter from '@/components/modules/custom-syntax-highlighter'

export default function ThemingPage() {
  return (
    <div className="space-y-6 xs:max-w-[95vw] md:max-w-full">
      <h1 className="mb-4 text-3xl font-bold">Theming</h1>
      <p className="text-lg text-muted-foreground">
        Learn how to customize the look and feel of your application using our theming system.
      </p>

      <Card>
        <CardHeader>
          <CardTitle>Global Theming</CardTitle>
          <CardDescription>How to apply global themes to your toasts</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-md">
            Global theming allows you to customize the default appearance of each toast type.
            Here's an example of how you can pass the <code>`toastTypeTheming`</code> prop to customize your toasts.
          </p>
          <CustomSyntaxHighlighter
            className="w-full border rounded-lg overflow-x-auto shadow-lg"
            tabs={{
              'jsx': {
                syntax: `<ToastContainer 
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
/>`,
                language: 'jsx'
              }
            }}
          />
          <p className="mt-4">
            Use the `toastTypeTheming` prop to apply global styles and classes to different types of toasts. This allows for consistent styling across your application while still allowing for customization of individual toasts.
          </p>
        </CardContent>
      </Card>
    </div>
  )
}  