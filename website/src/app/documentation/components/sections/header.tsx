import { SidebarTrigger } from "@/components/ui/sidebar"
import { SearchBar } from "@/components/modules/search-bar"
import { useIsMobile } from "@/hooks/use-mobile"
import Image from "next/image"

export function Header() {
  const isMobile = useIsMobile()
  return (
<header className="sticky top-0 flex items-center justify-between h-16 border-b px-3 bg-defaultBase/60 backdrop-blur z-20">
  <div className="flex items-center space-x-5">
    <SidebarTrigger />
    {!isMobile && <h1 className="text-lg font-semibold text-center">
      Documentation
    </h1>}
  </div>
  <div className="flex items-center space-x-5 xs:pr-0 sm:pr-12">
    <div className="flex justify-end">
      <SearchBar />
    </div>
    <Image 
      alt="GitHub"
      className="cursor-pointer" 
      onClick={() => window.open("https://github.com/sanjayc208/react-fox-toast", "_blank")} 
      width="23" 
      height="23" 
      src="/github-mark.png" 
    />
  </div>
</header>

  )
}