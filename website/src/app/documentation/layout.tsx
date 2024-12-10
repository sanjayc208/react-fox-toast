import { Sidebar, SidebarContent, SidebarHeader, SidebarProvider } from "@/components/ui/sidebar"
import { Header } from "./components/header"
import { DocSidebar } from "./components/doc-sidebar"

export default function DocumentationLayout({
  children,
}: {
  children: React.ReactNode
}) {

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
      </SidebarProvider>
    </div>
  )
}

