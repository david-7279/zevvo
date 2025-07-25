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
  TruckIcon,
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
      url: Path.dashboard,
      icon: ChartLineIcon,
    },
    {
      label: "Relatórios",
      url: Path.reports,
      icon: BookTextIcon,
    },
  ],

  features: [
    {
      label: "Produtos",
      url: Path.products,
      icon: BoxesIcon,
    },
    {
      label: "Clientes",
      url: Path.clients,
      icon: UsersIcon,
    },
    {
      label: "Pagamentos",
      url: Path.payments,
      icon: CircleDollarSignIcon,
    },
    {
      label: "Faturas",
      url: Path.invoices,
      icon: ScrollTextIcon,
    },
    {
      label: "Fornecedores",
      url: Path.suppliers,
      icon: TruckIcon,
    },
  ],

  system: [
    {
      label: "Atualizações",
      url: Path.changelog,
      icon: FileSymlinkIcon,
    },
    {
      label: "Definições",
      url: Path.settings,
      icon: CogIcon,
    },
  ],
  navFooter: [
    {
      label: "Suporte",
      url: Path.support,
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
              <Link href={Path.dashboard}>
                <div className="flex items-center gap-2">
                  <div className="flex aspect-square size-7 items-center justify-center rounded-lg">
                    <PackageIcon size={16} />
                  </div>
                  <div className="grid flex-1 text-left text-sm leading-tight">
                    <span className="truncate font-semibold">Zevvo</span>
                    <span className="truncate text-xs">Gestão de Negócio</span>
                  </div>
                </div>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>

      <SidebarContent>
        <NavMain title="Visão Geral" items={siderData.overview} />
        <NavMain title="Funcionalidades" items={siderData.features} />
        <NavMain title="Sistema" items={siderData.system} />
        <NavMain items={siderData.navFooter} className="mt-auto" />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={siderData.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
