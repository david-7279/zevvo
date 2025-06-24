
import React from "react"
import { Separator } from "@/components/ui/separator"
import { SidebarTrigger } from "@/components/ui/sidebar"
import ModeToggle from "@/components/layout/(core)/sider/mode-toggle"
import AppSiderBreadcrumb from "@/components/layout/(core)/sider/app-sider-breadcrumb"

const AppSiderHeader = () => {

  return (
    <header className="flex h-16 justify-between shrink-0 items-center gap-2">
      <div className="flex items-center gap-2 px-4">
        <SidebarTrigger className="-ml-1" />
        <Separator
          orientation="vertical"
          className="mr-2 data-[orientation=vertical]:h-4"
        />
        <AppSiderBreadcrumb />
      </div>
      <div className="px-5">
        <ModeToggle />
      </div>
    </header>
  )
}

export default AppSiderHeader