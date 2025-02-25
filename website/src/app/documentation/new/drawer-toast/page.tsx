'use client';
import React from 'react';

import { Suspense } from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import CustomSyntaxHighlighter from '@/components/modules/custom-syntax-highlighter';
import { useSidebarStore } from '@/store/useSideBarStore'; // Import Zustand store

export default function DrawerToastPage() {
  const { setContent, setVisibility } = useSidebarStore();

  React.useEffect(() => {
    setVisibility(true);
    // Set sidebar content and visibility
    setContent([
      {
        title: 'Drawer Toast',
        url: '/documentation/new/drawer-toast',
        items: [
          {
            url: '/documentation/new/drawer-toast#what-is-drawer',
            title: 'What is Drawer',
          },
          {
            url: '/documentation/new/drawer-toast#example-drawer',
            title: 'Example of Drawer',
          },
        ],
      },
    ]);

    // Cleanup on unmount
    return () => {
      setContent(null); // Reset the content when leaving the page
      setVisibility(false); // Optionally hide the sidebar
    };
  }, []);

  return (
    <div className="space-y-6 xs:max-w-[95vw] md:max-w-full">
      <h1 className="mb-4 text-3xl font-bold text-gray-800">
        What's New: Toast Drawer
      </h1>
      <p className="text-lg text-muted-foreground mb-6">
        The **Toast Drawer** introduces an expandable/collapsible container
        perfect for showing detailed content while maintaining a clean
        interface. Users can click to expand and view additional information,
        forms, or messages without leaving the context.
      </p>

      {/* Video Section with Loader */}
      <Card className="p-4">
        <div className="sm:w-[70%] xs:w-full justify-self-center aspect-w-16 aspect-h-9 relative">
          <Suspense
            fallback={<p className="justify-self-center">Loading video...</p>}
          >
            <video
              className="rounded-lg"
              autoPlay
              loop
              muted
              playsInline
              style={{ pointerEvents: 'none' }}
            >
              <source
                src="/instructions/toast-drawer/video.mp4"
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
          </Suspense>
        </div>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle id="what-is-drawer">What is Toast Drawer?</CardTitle>
          <CardDescription>
            A collapsible container that expands on click, ideal for progressive
            disclosure of content while maintaining a minimal initial footprint.
            Perfect for detailed messages, forms, or supplementary information.
          </CardDescription>
        </CardHeader>
        <CardContent id="example-drawer" className="space-y-4">
          <p className="text-gray-700">
            The Drawer Toast maintains all regular toast behaviors while adding
            toggleable content sections. Its collapsible nature makes it
            excellent for scenarios where you want to provide optional
            additional information without cluttering the UI.
          </p>

          <h3 className="font-semibold text-lg text-gray-800">
            Example of Toast Drawer
          </h3>
          <p className="text-gray-700">
            Implementation example with expandable content section:
          </p>

          <CustomSyntaxHighlighter
            tabs={{
              jsx: {
                syntax: `toast.drawer(
  <div className="flex flex-col pl-4">
    <p className="font-semibold">New Message!</p>
    <p className="text-sm text-gray-600">From: React Fox Team</p>
  </div>,
  {
    position: 'bottom-center',
    expandedContent: (
      <div className="p-4 bg-white lg max-w-md">
        <h3 className="font-bold mb-4">React Fox Team</h3>
        <div className="space-y-4 border-t pt-4">
          <p className="text-gray-700"
            >Hey there! 👋 Thanks for using React Fox Toast!
          </p>
          <p className="text-gray-600">
            This expanded drawer is perfect for showing detailed content...
          </p>
        </div>
      </div>
    )
  }
)`,
                language: 'jsx',
              },
            }}
          />

          <h3 className="font-semibold text-lg text-gray-800">
            Why Use Toast Drawer?
          </h3>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>
              <strong>Progressive Disclosure:</strong> Show essential info
              first, reveal details on demand
            </li>
            <li>
              <strong>Interactive Content:</strong> Supports forms, media, and
              complex components in expanded state
            </li>
            <li>
              <strong>Space Efficient:</strong> Maintains clean UI while
              offering access to detailed content
            </li>
            <li>
              <strong>Context Preservation:</strong> Keeps users in flow by
              showing additional content in-place
            </li>
            <li>
              <strong>Use Cases:</strong> Message threads, detailed
              notifications, quick forms, multi-step actions
            </li>
          </ul>
        </CardContent>
      </Card>
    </div>
  );
}
