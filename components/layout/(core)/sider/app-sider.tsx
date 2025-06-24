"use client"

import * as React from "react"
import { NavMain } from "@/components/layout/(core)/sider/nav-main"
import { NavUser } from "@/components/layout/(core)/sider/nav-user"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarRail,
} from "@/components/ui/sidebar"

import {
  BookTextIcon,
  BoxesIcon,
  ChartLineIcon,
  CircleDollarSignIcon,
  CogIcon,
  FileSymlinkIcon,
  LifeBuoyIcon,
  ScrollTextIcon,
  UsersIcon,
} from "lucide-react"

const siderData = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  navMain: [
    {
      title: "Dashboard",
      url: "#",
      icon: ChartLineIcon,
    },
    {
      title: "Relatórios",
      url: "#",
      icon: BookTextIcon,
    },
    {
      title: "Produtos",
      url: "#",
      icon: BoxesIcon,
    },
    {
      title: "Clientes",
      url: "#",
      icon: UsersIcon,
    },
    {
      title: "Pagamentos",
      url: "#",
      icon: CircleDollarSignIcon,
    },
    {
      title: "Faturas",
      url: "#",
      icon: ScrollTextIcon,
    },
  ],
  
  features: [
    {
      title: "Atualizações",
      url: "#",
      icon: FileSymlinkIcon,
    },
    {
      title: "Definições",
      url: "#",
      icon: CogIcon,
    },
    {
      title: "Suporte",
      url: "#",
      icon: LifeBuoyIcon,
    },
  ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarContent>
        <NavMain items={siderData.navMain} />
        <NavMain items={siderData.features} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={siderData.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
