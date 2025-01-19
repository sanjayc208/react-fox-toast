'use client';
import React from "react"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Link from "next/link";
import { usePathname } from 'next/navigation';
import { useSidebarStore } from "@/store/useSideBarStore"; // Import Zustand store

export default function ToastAPILayout({
    children,
}: {
    children: React.ReactNode
}) {

    // State to keep track of the active tab
    const [activeTab, setActiveTab] = React.useState<string>('usage');
    const pathname = usePathname();
    const { setContent, setVisibility } = useSidebarStore();
    
    React.useEffect(() => {
        // Extract the active tab from the pathname or URL hash
        const pathParts = pathname.split('/');
        
        // Assuming the tab is the last part of the URL
        const tabFromUrl = pathParts[pathParts.length - 1];

        // Update active tab if the URL has a valid tab identifier
        if (['usage', 'types', 'customization', 'management'].includes(tabFromUrl)) {
            setActiveTab(tabFromUrl);
        }
    }, [pathname])

    React.useEffect(() => {
        setVisibility(true);
        // Set sidebar content and visibility
        setContent(
            [{
                title: "Usage",
                url: "/documentation/api/toast/usage",
                items:[{
                    "url": "/documentation/api/toast/usage#basic-usage",
                    "title": "Basic Usage"
                }]
            },
            {
                title: "Toast Types",
                url: "/documentation/api/toast/usage",
                items:[{
                    "url": "/documentation/api/toast/types#success-toast",
                    "title": "Success Toast"
                },
                {
                    "url": "/documentation/api/toast/types#error-toast",
                    "title": "Error Toast"
                },
                {
                    "url": "/documentation/api/toast/types#warning-toast",
                    "title": "Warning Toast"
                },
                {
                    "url": "/documentation/api/toast/types#info-toast",
                    "title": "Info Toast"
                },
                {
                    "url": "/documentation/api/toast/types#promise-toast",
                    "title": "Promise Toast"
                },
                {
                    "url": "/documentation/api/toast/types#custom-toast",
                    "title": "Custom Toast"
                },
                {
                    "url": "/documentation/api/toast/types#envelope-toast",
                    "title": "Envelope Toast"
                }]
            },
            {
                title: "Customization",
                url: "/documentation/api/toast/customization",
                items:[{
                    "url": "/documentation/api/toast/customization#customization-options",
                    "title": "Options"
                },
                {
                    "url": "/documentation/api/toast/customization#customization-example",
                    "title": "Example"
                }]
            },{
                title: "Toast Management",
                url: "/documentation/api/toast/management",
                items:[
            {
                "url": "/documentation/api/toast/management#updating-toasts",
                "title": "Updating Toasts"
            },
            {
                "url": "/documentation/api/toast/management#removing-toasts",
                "title": "Removing Toasts"
            },
            {
                "url": "/documentation/api/toast/management#clearing-toasts",
                "title": "Clearing All Toasts"
            },
            {
                "url": "/documentation/api/toast/management#remaining-time",
                "title": "Getting Remaining Time"
            },
            {
                "url": "/documentation/api/toast/management#pausing-resuming",
                "title": "Pausing and Resuming Toasts"
            },
            {
                "url": "/documentation/api/toast/management#on-dismiss-callback",
                "title": "onDismiss Callback"
            }
        ]}]);

        // Cleanup on unmount
        return () => {
            setContent(null); // Reset the content when leaving the page
            setVisibility(false); // Optionally hide the sidebar
        };


    }, []);

    return (
        <div className="space-y-6">
            <h1 className="text-3xl font-bold">toast() API Documentation</h1>
            <p className="text-lg text-muted-foreground">
                The toast() API is used for creating various types of toast notifications in your React application.
            </p>

            <Tabs defaultValue="usage" value={activeTab} onValueChange={setActiveTab}>
                <TabsList className="xs:w-[95vw] md:w-fit overflow-x-auto items-center justify-start bg-white">
                <Link href="usage">
                    <TabsTrigger
                        className="data-[state=active]:bg-defaultBase"
                        value="usage"
                    >Usage
                    </TabsTrigger>
                    </Link>
                    <Link href="types">
                    <TabsTrigger
                        className="data-[state=active]:bg-defaultBase"
                        value="types"
                    >Toast Types
                    </TabsTrigger></Link>
                    <Link href="customization">
                    <TabsTrigger
                        className="data-[state=active]:bg-defaultBase"
                        value="customization"
                    >
                       Customization
                    </TabsTrigger></Link>
                    <Link href="management">
                    <TabsTrigger
                        className="data-[state=active]:bg-defaultBase"
                        value="management"
                    >
                        Toast Management
                    </TabsTrigger></Link>
                </TabsList>
                <TabsContent value={activeTab}>{children}</TabsContent>
            </Tabs>
        </div>
    )
}