"use client"

import * as React from "react"
import { NavMain } from "@/components/layout/(core)/sider/nav-main"
import { NavUser } from "@/components/layout/(core)/sider/nav-user"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
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
  PackageIcon,
  ScrollTextIcon,
  UsersIcon,
} from "lucide-react"
import { Path } from "@/lib/paths"
import Link from "next/link"

const siderData = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  overview: [
    {
      label: "Dashboard",
      url: "#",
      icon: ChartLineIcon,
    },
    {
      label: "Relatórios",
      url: "#",
      icon: BookTextIcon,
    },
  ],

  navMain: [
    {
      label: "Produtos",
      url: "#",
      icon: BoxesIcon,
    },
    {
      label: "Clientes",
      url: "#",
      icon: UsersIcon,
    },
    {
      label: "Pagamentos",
      url: "#",
      icon: CircleDollarSignIcon,
    },
    {
      label: "Faturas",
      url: "#",
      icon: ScrollTextIcon,
    },
  ],

  features: [
    {
      label: "Atualizações",
      url: "#",
      icon: FileSymlinkIcon,
    },
    {
      label: "Definições",
      url: "#",
      icon: CogIcon,
    },
  ],
  navFooter: [
    {
      label: "Suporte",
      url: "#",
      icon: LifeBuoyIcon
    }
  ]
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar variant="inset" collapsible="icon" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" className="hover:rounded-2xl" asChild>
              <Link href={Path.root}>
                <div className="flex aspect-square size-7 items-center justify-center rounded-lg">
                  <PackageIcon size={16} />
                </div>
                <div className="grid flex-1 text-left text-sm leading-tight">
                  <span className="truncate font-semibold">Zevvo</span>
                  <span className="truncate text-xs">Gestão de Negócio</span>
                </div>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>

      <SidebarContent>
        <NavMain title="Visão Geral" items={siderData.overview} />
        <NavMain title="Funcionalidades" items={siderData.navMain} />
        <NavMain title="Sistema" items={siderData.features} />
        <NavMain items={siderData.navFooter} className="mt-auto" />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={siderData.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
