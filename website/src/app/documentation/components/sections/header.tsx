import { SidebarTrigger } from "@/components/ui/sidebar"

export function Header() {
  return (
    <header className="sticky grid grid-cols-5 gap-5 h-16 items-center border-b px-3">
      <div className="col-span=1 grid grid-cols-5 space-x-5">
        <SidebarTrigger className="col-span-1" />
        <h1 className="col-span-4 text-lg font-semibold text-center justify-self-start">
          Documentation
        </h1>
      </div>
      <div className="col-span-4 justify-self-end lg:mr-5">
        <img className="cursor-pointer" onClick={() => window.open("https://github.com/sanjayc208/react-fox-toast", "_blank")} width="23" height="23" src="/github-mark.png" /></div>  {/* Empty div if you want to keep space on the right */}
    </header>
  )
}