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
  SidebarHeader,
  SidebarFooter
} from "@/components/ui/sidebar"

 import Link from "next/link";

export function SidebarRight({
  ...props
}: React.ComponentProps<any>) {
   
  return (
    <Sidebar
      collapsible="none"
      className="sticky hidden lg:flex top-0 h-svh border-l bg-color-[#efefea]"
      {...props}
    >
      <SidebarHeader className="h-16 border-b border-sidebar-border">
      </SidebarHeader>
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
                            asChild
                            // isActive={item.isActive}
                          >
                            <Link href={`#${item.id}`} className="text-blue-600 hover:text-blue-800">
                              {item.title}
                            </Link>
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
