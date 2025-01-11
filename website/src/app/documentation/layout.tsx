'use client';
import { Sidebar, SidebarContent, SidebarHeader, SidebarProvider } from "@/components/ui/sidebar"
import { Header } from "./components/sections/header"
import { DocSidebar } from "./components/sections/doc-sidebar"
import { SidebarRight } from "@/app/documentation/components/sections/right-sidebar"
import { useSidebarStore } from "@/store/useSideBarStore"; // Import Zustand store

export default function DocumentationLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const content = useSidebarStore(state => state.content);
  const isVisible = useSidebarStore(state => state.isVisible);

  return (
    <div className="flex h-screen overflow-hidden">
      <SidebarProvider defaultOpen={true}>
        <Sidebar className="w-64 border-r">
          <SidebarHeader className="h-16 border-b px-6">
            <div className="flex h-full items-center text-lg font-semibold">
              Documentation
            </div>
          </SidebarHeader>
          <SidebarContent>
            <DocSidebar />
          </SidebarContent>
        </Sidebar>
        <div className="flex flex-1 flex-col overflow-hidden">
          <Header />
          <main className="flex-1 overflow-y-auto lg:p-6 xs:p-2  sm:p-2">{children}</main>
        </div>

       {/* Sidebar */}
       {isVisible && <SidebarRight content={content}/>}
      </SidebarProvider>
    </div>
  )
}

