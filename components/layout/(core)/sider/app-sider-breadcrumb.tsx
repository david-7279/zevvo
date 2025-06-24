"use client"

import React from 'react'
import { usePathname } from "next/navigation"

import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb"
import { Path } from "@/lib/paths"


function getCurrentPageName(pathname: string) {
  if (pathname === "/") return "Home"
  const segments = pathname.split("/").filter(Boolean)

  return segments[segments.length - 1]
    .replace(/-/g, " ")
    .replace(/\b\w/g, (c) => c.toUpperCase())
}

const AppSiderBreadcrumb = () => {
  const pathname = usePathname()
  const currentPage = getCurrentPageName(pathname)

  return (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem className="hidden md:block">
          <BreadcrumbLink href={Path.root}>
            Zevvo
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator className="hidden md:block" />
        <BreadcrumbItem>
          <BreadcrumbPage>{currentPage}</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  )
}

export default AppSiderBreadcrumb
