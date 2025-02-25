'use client';
import { SidebarRight } from '@/app/documentation/components/sections/right-sidebar';
import {
    Sidebar,
    SidebarContent,
    SidebarInset,
    SidebarProvider,
} from '@/components/ui/sidebar';
import { useSidebarStore } from '@/store/useSideBarStore'; // Import Zustand store
import { DocSidebar } from './components/sections/doc-sidebar';
import { Header } from './components/sections/header';

export default function DocumentationLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const content = useSidebarStore((state) => state.content);
    const isVisible = useSidebarStore((state) => state.isVisible);

    return (
        <div className="flex h-screen">
            <SidebarProvider defaultOpen={true}>
                <Sidebar className="w-64 border-r">
                    <SidebarContent>
                        <DocSidebar />
                    </SidebarContent>
                </Sidebar>
                <SidebarInset className="bg-transparent">
                    {/* Main content area */}
                    <div>
                        <Header />
                        <div
                            className={`grid xl:grid xl:grid-cols-[1fr_250px]`}
                        >
                            <main className="overflow-auto lg:p-6 xs:p-2 sm:p-2">
                                {children}
                            </main>

                            {/* Right Sidebar, pushed below the header */}
                            {isVisible && (
                                <aside className="mt-2 hidden xl:flex">
                                    <SidebarRight content={content} />
                                </aside>
                            )}
                        </div>
                    </div>
                </SidebarInset>
            </SidebarProvider>
        </div>
    );
}
