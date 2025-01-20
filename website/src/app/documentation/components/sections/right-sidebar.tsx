import * as React from "react"

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarFooter
} from "@/components/ui/sidebar"
import { useRouter } from 'next/navigation';
import Link from 'next/link';
export function SidebarRight({
  ...props
}: React.ComponentProps<any>) {
   // State to track the current hash in the URL
  const [activeHash, setActiveHash] = React.useState<string>("")
  const router = useRouter();


  // Set the active hash initially when the component mounts
  React.useEffect(() => {
    const currentHash = window.location.hash
    setActiveHash(currentHash)
    // Update the active hash when the hash changes in the URL
    const handleHashChange = () => {
      setActiveHash(window.location.hash)
    }

    window.addEventListener("hashchange", handleHashChange)
    
    // Cleanup the event listener on unmount
    return () => {
      window.removeEventListener("hashchange", handleHashChange)
    }
  }, [])

  const onActive = (activeHash : string, item: any) => {
    return activeHash === `${activeHash.startsWith('#') ? `#${item.url.split('#')[1]}`: item.url}`
  }


  // Handle click to update the active state and hash
  const handleItemClick = (url: string) => {
    setActiveHash(`${url}`)
    router.push(url);
  }
  return (
    <Sidebar
      collapsible="none"
      className={"sticky hidden lg:flex top-0 h-svh border-l bg-color-[#efefea]"}
      {...props}
    >
      <SidebarContent>
      <SidebarGroup>
      <h3 className="font-bold mb-2">Quick References</h3>
          <SidebarGroupContent>
            <SidebarMenu>
              {props.content?.map((data: any) => (
                <SidebarMenuItem key={data.title}>
                  <SidebarMenuButton asChild>
                    <Link href={data.url} className="font-medium">
                      {data.title}
                    </Link>
                  </SidebarMenuButton>

                  {data.items?.length ? (
                    <SidebarMenuSub>
                      {data.items.map((item: any) => (
                        <SidebarMenuSubItem key={item.title}>
                          <SidebarMenuSubButton
                          className={`h-auto my-1`}
                          isActive={onActive(activeHash, item)}
                            asChild
                            // isActive={item.isActive}
                          >
                            {/* OnClick to handle active state and hash update */}
                          <button
                            onClick={() => handleItemClick(item.url)}
                            className={`text-blue-600 hover:text-blue-800 w-full text-left ${onActive(activeHash, item) ? 'bg-blue-950 font-semibold' : ''}`}
                          >
                            {item.title}
                          </button>

                          </SidebarMenuSubButton>
                        </SidebarMenuSubItem>
                      ))}
                    </SidebarMenuSub>
                  ) : null}
                </SidebarMenuItem>
              ))} 
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

      </SidebarContent>
      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            {/* <SidebarMenuButton>
              <Plus />
              <span>New Calendar</span>
            </SidebarMenuButton> */}
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  )
}
