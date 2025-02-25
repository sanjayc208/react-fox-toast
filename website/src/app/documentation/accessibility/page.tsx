'use client';
import React from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import CustomSyntaxHighlighter from '@/components/modules/custom-syntax-highlighter';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

export default function AccessibilityDocumentation() {
  return (
    <Card id="accessibility" className="xs:max-w-[95vw] md:max-w-full">
      <CardHeader>
        <CardTitle>Accessibility Features</CardTitle>
        <CardDescription>
          Ensuring inclusive experiences for all users
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          <section>
            <h2 className="text-xl font-semibold mb-3">
              Why Accessibility Matters
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Our toast system implements WAI-ARIA standards to ensure proper
              screen reader support. Accessible notifications are crucial for:
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>Users with visual impairments relying on screen readers</li>
              <li>Keyboard-only navigation support</li>
              <li>Compliance with web accessibility standards (WCAG 2.1)</li>
              <li>
                Better user experience for people with cognitive disabilities
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">
              Default Accessibility Features
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              By default, all toasts include these accessibility attributes:
            </p>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Attribute</TableHead>
                  <TableHead>Value</TableHead>
                  <TableHead>Purpose</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell>role</TableCell>
                  <TableCell>"status"</TableCell>
                  <TableCell>
                    Indicates a live region with non-urgent updates
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>aria-label</TableCell>
                  <TableCell>"Notification"</TableCell>
                  <TableCell>
                    Provides a descriptive label for screen readers
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>aria-live</TableCell>
                  <TableCell>"polite"</TableCell>
                  <TableCell>
                    Ensures updates don't interrupt current screen reader tasks
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">
              Understanding ARIA Roles & Labels
            </h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-medium mb-2">Role Attribute</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  The <code>role</code> attribute defines the type of element
                  for assistive technologies:
                </p>
                <ul className="list-disc pl-6 mt-2 space-y-2">
                  <li>
                    <code>"status"</code>: For non-critical updates (default)
                  </li>
                  <li>
                    <code>"alert"</code>: For urgent/error notifications
                  </li>
                  <li>
                    <code>"log"</code>: For historical message streams
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="font-medium mb-2">ARIA Labels</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  The <code>aria-label</code> provides context for screen reader
                  users:
                </p>
                <ul className="list-disc pl-6 mt-2 space-y-2">
                  <li>Should briefly describe the notification type</li>
                  <li>Helps distinguish between multiple toasts</li>
                  <li>Improves navigation for users with screen readers</li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">
              Customization Options
            </h2>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Prop</TableHead>
                  <TableHead>Type</TableHead>
                  <TableHead>Description</TableHead>
                  <TableHead>Default</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell className="font-medium">aria</TableCell>
                  <TableCell>object</TableCell>
                  <TableCell>ARIA attributes configuration</TableCell>
                  <TableCell>
                    <code>{'{ role: "status", label: "Notification" }'}</code>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>

            <div className="mt-6">
              <h3 className="text-lg font-semibold mb-3">
                Customization Examples
              </h3>
              <CustomSyntaxHighlighter
                className="mb-4"
                tabs={{
                  jsx: {
                    syntax: `// Urgent error toast
toast.error("Database connection failed!", {
    aria: {
        role: "alert",
        label: "Critical system alert"
    }
});

// Notification stream
toast.info("New message received", {
    aria: {
        role: "log",
        label: "Chat message notification"
    }
});

// Custom label only
toast.success("Payment processed", {
    aria: {
        label: "Successful payment notification"
    }
});`,
                    language: 'jsx',
                  },
                }}
              />
              <p className="text-gray-600 dark:text-gray-300 mt-2">
                Note: Omitting <code>role</code> will keep the default "status"
                value while maintaining other accessibility features.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">Best Practices</h2>
            <ul className="list-disc pl-6 space-y-3">
              <li>
                <strong>Use "alert" sparingly:</strong> Reserve for critical
                notifications that require immediate attention
              </li>
              <li>
                <strong>Be descriptive:</strong> Make labels specific to the
                notification type (e.g., "Security warning" instead of "Alert")
              </li>
              <li>
                <strong>Maintain consistency:</strong> Use similar labeling
                patterns across similar notification types
              </li>
              <li>
                <strong>Test with screen readers:</strong> Verify announcements
                with tools like NVDA, VoiceOver, or JAWS
              </li>
            </ul>
          </section>
        </div>
      </CardContent>
    </Card>
  );
}
