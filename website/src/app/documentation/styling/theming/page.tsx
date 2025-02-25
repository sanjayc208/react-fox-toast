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
import { useSidebarStore } from '@/store/useSideBarStore'; // Import Zustand store

export default function ThemingPage() {
    const { setContent, setVisibility } = useSidebarStore();

    React.useEffect(() => {
        setVisibility(true);
        // Set sidebar content and visibility
        setContent([
            {
                title: 'Theming',
                url: '/documentation/styling/theming',
                items: [
                    {
                        url: '/documentation/styling/theming#global-theming',
                        title: 'Global Theming',
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
            <h1 className="mb-4 text-3xl font-bold">Theming</h1>
            <p className="text-lg text-muted-foreground">
                Learn how to customize the look and feel of your application
                using our theming system.
            </p>

            <Card id="global-theming">
                <CardHeader>
                    <CardTitle>Global Theming</CardTitle>
                    <CardDescription>
                        How to apply global themes to your toasts
                    </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                    <p className="text-md">
                        Global theming allows you to customize the default
                        appearance of each toast type. Here's an example of how
                        you can pass the <code>`toastTypeTheming`</code> prop to
                        customize your toasts.
                    </p>
                    <CustomSyntaxHighlighter
                        className="w-full border rounded-lg overflow-x-auto shadow-lg"
                        tabs={{
                            jsx: {
                                syntax: `<ToastContainer 
  toastTypeTheming={{
    success: {
      style: {
        backgroundColor: 'blue',
        color: '#155E00',
      },
      className: 'bg-blue-10',
      icon: "🦊"
    },
    error: {
      style: {
        backgroundColor: 'green',
        color: '#B91C1C',
      },
      className: 'error-toast-class',
      icon: "🦊"
    },
    info: {
      style: {
        backgroundColor: '#white',
        color: '#1D4ED8',
      },
      className: 'info-toast-class',
      icon: "🦊"
    },
    custom: {
      style: {
        backgroundColor: 'yellow',
        color: '#6B7280',
      },
      className: 'custom-toast-class',
      icon: "🦊"
    },
  }}
/>`,
                                language: 'jsx',
                            },
                        }}
                    />
                    <p className="mt-4">
                        Use the `toastTypeTheming` prop to apply global styles
                        and classes to different types of toasts. This allows
                        for consistent styling across your application while
                        still allowing for customization of individual toasts.
                    </p>
                </CardContent>
            </Card>
        </div>
    );
}
