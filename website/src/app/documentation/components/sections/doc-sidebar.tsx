'use client';
import * as React from "react"
import { usePathname, useRouter } from 'next/navigation'
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarFooter,
  SidebarGroupLabel,
  useSidebar
} from "@/components/ui/sidebar"
import Image from "next/image";
import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge"

// This is sample data.
const data = {
  navMain: [
    {
      title: "Getting Started",
      url: "#",
      items: [
        {
          title: "Installation",
          url: "/documentation/getting-started",
        },
        // {
        //   title: "Project Structure",
        //   url: "#",
        // },
      ],
    },
    {
      title: "API",
      url: "#",
      items: [
        {
          title: "toast()",
          url: "/documentation/api/toast",
        },
        {
          title: "Toast Container",
          url: "/documentation/api/toast-container",
          isActive: true,
        },
      ],
    },
    {
      title: "Styling",
      url: "#",
      items: [
        {
          title: "Theming",
          url: "/documentation/styling/theming",
        }
      ],
    },
    {
      title: "What's New!",
      url: "#",
      items: [
        {
          title: "Envelope Toast",
          url: "/documentation/new/envelope-toast",
        },
        {
          title: "Drawer Toast",
          url: "/documentation/new/drawer-toast",
        }
      ],
    },
    {
      title: "Accessibility",
      url: "/documentation/accessibility",
    }
  ],
}

export function DocSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const pathname = usePathname()
  const router = useRouter()
  const { toggleSidebar, isMobile } = useSidebar()

  // Function to check if the current path matches the URL of the sidebar item
  const isActive = (url: string) => {
    // Ensure the pathname starts with the provided URL and doesn't match unwanted substrings
    // This check is more flexible and handles distinct paths like toast vs toast-container
    const regex = new RegExp(`^${url}(\/|$)`); // Matches the exact path or any sub-paths under it

    return regex.test(pathname);
  }


  // Function to handle click and navigate
  const onClickRedirect = (url: string) => {
    router.push(url)  // Programmatically navigate to the new route
    if (isMobile) toggleSidebar()
  }

  return (
    <Sidebar variant="floating" className="bg-defaultBase" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <a onClick={() => onClickRedirect('/')}>
                <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-yellow-300 text-sidebar-primary-foreground">
                  {/* <GalleryVerticalEnd className="size-4" /> */}
                  <div
                    className="flex size-8 items-center justify-center rounded-lg"
                  >
                    <Image src="/logos/fox4.png" alt={`fox_logo`} width={25} height={25} />
                  </div>
                </div>
                <div className="flex flex-col gap-0.5 leading-none">
                  <span className="font-semibold">react-fox-toast</span>
                  <span className="">v1.10.2</span>
                </div>
              </a>
            </SidebarMenuButton>
            <Separator className="my-1" />

          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarMenu className="gap-2">
            {data.navMain.map((item) => (
              <SidebarMenuItem key={item.title}>
                <SidebarMenuButton asChild>
                  <SidebarGroupLabel>
                    <button onClick={() => onClickRedirect(item.url)}>
                      {item.title}
                    {item.title === `What's New!` && <Badge
                      variant="outline"
                      className="bg-red-600 px-1.5 text-white right-5 absolute rounded-lg"
                    > New
                    </Badge>}
                    </button>
                  </SidebarGroupLabel>
                </SidebarMenuButton>
                {item.items?.length ? (
                  <SidebarMenuSub className="ml-0 border-l-0 px-1.5">
                    {item.items.map((subItem) => (
                      <SidebarMenuSubItem key={subItem.title}>
                        <SidebarMenuSubButton asChild>
                          <button
                            onClick={() => onClickRedirect(subItem.url)}  // Trigger navigation on click
                            onKeyDown={(e) => e.key === 'Enter' && onClickRedirect(subItem.url)} // Trigger navigation on Enter key press
                            className={`${isActive(subItem.url) ? 'bg-defaultBase' : ''
                              } w-full text-left px-4 py-2 rounded focus:outline-none`}
                          >
                            {subItem.title}
                          </button>
                        </SidebarMenuSubButton>
                      </SidebarMenuSubItem>
                    ))}
                  </SidebarMenuSub>
                ) : null}
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>

      {/* Sidebar Footer Content */}
      <SidebarFooter >
        <div className="self-center sm:max-w-36 xs:max-w-40">
          <button onClick={() => window.open("https://www.buymeacoffee.com/sanjayc208", "_blank")}>
            <img
              src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png"
              alt="Buy Me A Coffee"
            />
          </button>
        </div>
        <SidebarMenuButton
          size="lg"
          className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
        >
          <Avatar className="h-8 w-8 rounded-lg">
            <AvatarImage src={'/static/user-icon.svg'} alt={'User Avatar'} />
            <AvatarFallback className="rounded-lg">CN</AvatarFallback>
          </Avatar>
          <div className="grid flex-1 text-left text-sm leading-tight">
            <span className="truncate font-semibold">Creator: {'Sanjay Rajeev'}</span>
            {/* <span className="truncate text-xs">{'sanjayc208@gmail.com'}</span> */}
            <span className="truncate text-xs">© {new Date().getFullYear()}</span>
          </div>
        </SidebarMenuButton>
      </SidebarFooter>
    </Sidebar>
  )
}
