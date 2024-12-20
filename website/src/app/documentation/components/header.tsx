import { SidebarTrigger } from "@/components/ui/sidebar"

export function Header() {
  return (
    <header className="flex h-16 items-center border-b px-6">
      <SidebarTrigger />
      <h1 className="ml-4 text-lg font-semibold">Documentation</h1>
    </header>
  )
}