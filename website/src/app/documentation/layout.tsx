'use client';
import { Sidebar, SidebarContent, SidebarProvider, SidebarInset } from "@/components/ui/sidebar";
import { Header } from "./components/sections/header";
import { DocSidebar } from "./components/sections/doc-sidebar";
import { SidebarRight } from "@/app/documentation/components/sections/right-sidebar";
import { useSidebarStore } from "@/store/useSideBarStore"; // Import Zustand store

export default function DocumentationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const content = useSidebarStore(state => state.content);
  const isVisible = useSidebarStore(state => state.isVisible);

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
          <div className="flex flex-row">
          <main className="flex-1 overflow-auto lg:p-6 xs:p-2 sm:p-2">
            {children}
          </main>

          {/* Right Sidebar, pushed below the header */}
          {isVisible && (
            <aside className="mt-2">
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
