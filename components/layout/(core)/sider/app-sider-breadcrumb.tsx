"use client"

import React from 'react'
import { usePathname } from "next/navigation"

import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb"
import { Path } from "@/lib/paths"

const pathNameMap: Record<string, string> = {
  overview: "Visão Geral",
  dashboard: "Painel de Controlo",
  reports: "Relatórios",

  features: "Funcionalidades",
  products: "Produtos",
  clients: "Clientes",
  payments: "Pagamentos",
  invoices: "Faturas",
  suppliers: "Fornecedores",
  new: "Novo",
  edit: "Editar",

  system: "Sistema",
  changelog: "Atualizações",
  settings: "Definições",
  support: "Suporte",

};

function getBreadcrumbSegments(pathname: string) {
  if (pathname === "/") return [];
  const segments = pathname.split("/").filter(Boolean);

  if (["dashboard", "reports"].includes(segments[0])) {
    return [
      { name: "Visão Geral", href: "#" },
      ...segments.map((seg, idx) => ({
        name: pathNameMap[seg] || seg,
        href: "/" + segments.slice(0, idx + 1).join("/"),
      })),
    ];
  }

  if (["products", "clients", "payments", "invoices", "suppliers"].includes(segments[0])) {
    return [
      { name: "Funcionalidades", href: "#" },
      ...segments.map((seg, idx) => ({
        name: pathNameMap[seg] || seg,
        href: "/" + segments.slice(0, idx + 1).join("/"),
      })),
    ];
  }

  if (["changelog", "settings", "support"].includes(segments[0])) {
    return [
      { name: "Sistema", href: "#" },
      ...segments.map((seg, idx) => ({
        name: pathNameMap[seg] || seg,
        href: "/" + segments.slice(0, idx + 1).join("/"),
      })),
    ];
  }



  // Otherwise, just map normally
  return segments.map((seg, idx) => ({
    name: pathNameMap[seg] || seg,
    href: "/" + segments.slice(0, idx + 1).join("/"),
  }));
}

const AppSiderBreadcrumb = () => {
  const pathname = usePathname();
  const segments = getBreadcrumbSegments(pathname);

  return (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem className="hidden md:block">
          <BreadcrumbLink href={Path.dashboard}>
            Zevvo
          </BreadcrumbLink>
        </BreadcrumbItem>
        {segments.length > 0 && <BreadcrumbSeparator className="hidden md:block" />}
        {segments.map((seg, idx) => (
          <React.Fragment key={seg.href}>
            <BreadcrumbItem>
              {idx === segments.length - 1 ? (
                <BreadcrumbPage>{seg.name}</BreadcrumbPage>
              ) : (
                <BreadcrumbLink href={seg.href}>{seg.name}</BreadcrumbLink>
              )}
            </BreadcrumbItem>
            {idx < segments.length - 1 && <BreadcrumbSeparator />}
          </React.Fragment>
        ))}
      </BreadcrumbList>
    </Breadcrumb>
  );
};

export default AppSiderBreadcrumb;
