import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function EnvelopeToastPage() {
  return (
    <div className="space-y-6 xs:max-w-[95vw] md:max-w-full">
      <h1 className="mb-4 text-3xl font-bold text-gray-800">What's New: Envelope Toast</h1>
      <p className="text-lg text-muted-foreground mb-6">
        The **Envelope Toast** introduces a new way to display expandable toasts. It's perfect for cases where you need to show 
        more content in a toast notification and want to allow the user to reveal additional details with a simple action, like opening an envelope.
      </p>

      {/* Video Section - Placed at the top */}
      <div className="w-full aspect-w-16 aspect-h-9 mb-6">
        <iframe
          width="100%"
          height="100%"
          src="https://www.youtube.com/embed/your_video_id?autoplay=1&controls=0&mute=1"
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="rounded-lg"
        ></iframe>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>What is Envelope Toast?</CardTitle>
          <CardDescription>
            Envelope Toast is a special toast type that allows users to expand the content of a toast message with a single click.
            Think of it as an envelope—once clicked, the content inside gets revealed.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-gray-700">
            The core feature of the Envelope Toast is the ability to "unwrap" a detailed message or information with an interactive action.
            This pattern is commonly used for showing extra details in toasts that may otherwise overwhelm the user if shown in full.
            The use of a click action, similar to opening an envelope, adds an element of engagement to the notification.
          </p>

          <h3 className="font-semibold text-lg text-gray-800">Example of Envelope Toast</h3>
          <p className="text-gray-700">
            Below is an example code snippet demonstrating how to use the Envelope Toast in your application:
          </p>

          <pre className="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto">
            <code className="text-sm">
              {`toast.envelope(<>A new Message from 'John Mayer' <span className="text-xs text-blue-600">...open msg</span></>, {
  expandedContent: (
    <div className="flex flex-col items-center p-2 mx-auto space-y-3">
        <p className="text-lg font-semibold text-gray-700">Message: Hello, How are you?</p>
        <input type="text" placeholder="Add Message here.." 
            className="px-4 py-2 border border-gray-300 rounded-lg shadow-sm w-full" />
        <button className="px-6 py-2 bg-black text-white rounded-lg focus:ring-opacity-50">
            Reply
        </button>
    </div>)
})`}
            </code>
          </pre>

          <h3 className="font-semibold text-lg text-gray-800">Why Use Envelope Toast?</h3>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li><strong>Organize complex messages:</strong> Use Envelope Toast to hide or reveal additional details, making your notifications cleaner and more user-friendly.</li>
            <li><strong>Actionable content:</strong> Adds an interactive component to the toast, allowing users to engage with the notification, like replying to a message or viewing more details.</li>
            <li><strong>Improved UX:</strong> By only showing essential information initially, users are less overwhelmed with data while still having the option to expand and learn more.</li>
            <li><strong>Use cases:</strong> Ideal for message notifications, alerts with expandable content, and data-driven toast alerts where the user might want to "unwrap" more information.</li>
          </ul>
        </CardContent>
      </Card>
    </div>
  );
}
