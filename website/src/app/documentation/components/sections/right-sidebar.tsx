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

export function SidebarRight({
  ...props
}: React.ComponentProps<any>) {
   // State to track the current hash in the URL
  const [activeHash, setActiveHash] = React.useState<string>("")


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


  // Handle click to update the active state and hash
  const handleItemClick = (id: string) => {
    setActiveHash(`#${id}`)
    window.location.hash = `#${id}`  // Update the URL hash
  }
  return (
    <Sidebar
      collapsible="none"
      className={"sticky hidden lg:flex top-0 h-svh border-l bg-color-[#efefea]"}
      {...props}
    >
      <SidebarContent>
      <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
                <SidebarMenuItem >
                  <SidebarMenuButton className={`font-bold`}>
                      {`Quick Reference`}
                  </SidebarMenuButton>
                  {props.content?.length ? (
                    <SidebarMenuSub>
                      {props.content.map((item: any) => (
                        <SidebarMenuSubItem key={item.title}>
                          <SidebarMenuSubButton
                          className={`h-auto my-1`}
                          isActive={activeHash === `#${item.id}`}
                            asChild
                            // isActive={item.isActive}
                          >
                            {/* OnClick to handle active state and hash update */}
                          <button
                            onClick={() => handleItemClick(item.id)}
                            className="text-blue-600 hover:text-blue-800 w-full text-left"
                          >
                            {item.title}
                          </button>

                          </SidebarMenuSubButton>
                        </SidebarMenuSubItem>
                      ))}
                    </SidebarMenuSub>
                  ) : null}
                </SidebarMenuItem>
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
