'use client';
import React from "react"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Link from "next/link";
import { usePathname } from 'next/navigation';

export default function ToastAPILayout({
    children,
}: {
    children: React.ReactNode
}) {

    // State to keep track of the active tab
    const [activeTab, setActiveTab] = React.useState<string>('usage');
    const pathname = usePathname();
    
    React.useEffect(() => {
        // Scroll to the section based on the URL hash after the component mounts
        if (window.location.hash) {
            const element = document.getElementById(window.location.hash.substring(1)); // Get element by ID from the hash
            if (element) {
                element.scrollIntoView({ behavior: "smooth" }); // Scroll to the element with smooth behavior
            }
        }
        // Extract the active tab from the pathname or URL hash
        const pathParts = pathname.split('/');
        
        // Assuming the tab is the last part of the URL
        const tabFromUrl = pathParts[pathParts.length - 1];

        // Update active tab if the URL has a valid tab identifier
        if (['usage', 'types', 'customization', 'management'].includes(tabFromUrl)) {
            setActiveTab(tabFromUrl);
        }
    }, [pathname])

    return (

        <div className="space-y-6">

            <h1 className="text-3xl font-bold">toast() API Documentation</h1>
            <p className="text-lg text-muted-foreground">
                The toast() API is used for creating various types of toast notifications in your React application.
            </p>

            <Tabs defaultValue="usage" value={activeTab} onValueChange={setActiveTab}>
                <TabsList className="bg-white">
                <Link href="usage">
                    <TabsTrigger
                        className="data-[state=active]:bg-defaultBase"
                        value="usage"
                    >
                        Usage
                    </TabsTrigger>
                    </Link>
                    <Link href="types">
                    <TabsTrigger
                        className="data-[state=active]:bg-defaultBase"
                        value="types"
                    >
                        Toast Types
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