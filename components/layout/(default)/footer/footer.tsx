import React from "react"
import Link from "next/link"
import { Path } from "@/lib/paths"

import MapLinks from "@/components/layout/(default)/footer/map-links"

const footerLinks = [
  { label: "Funcionalidades", link: `${Path.root}#features` },
  { label: "Preços", link: `${Path.root}#pricing` },
  { label: "FAQ", link: `${Path.root}#faq` },
]

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <div className="mx-auto mt-2 max-w-6xl px-6 lg:px-12 space-y-5 mb-5">
      <div className="flex flex-wrap items-center justify-between gap-6 py-3 lg:gap-0 lg:py-4 border-muted-foreground/20 border-b">
        <Link href={Path.root} className="flex flex-row gap-2 items-center">
          <p className="text-base text-foreground/70">Business Hub</p>
        </Link>

        <div className="flex flex-row gap-4">
          {footerLinks.map((item) => (
            <MapLinks
              key={item.link}
              link={item.link}
              label={item.label}
            />
          ))}
        </div>
      </div>

      <div className="flex justify-between items-center gap-1">
        <p className="text-sm text-muted-foreground">@{year}, Todos os direitos reservados</p>

        <Link href={Path.terms} className="group flex flex-row gap-1 items-center">
          <p className="relative text-sm text-muted-foreground transition-all duration-500
            after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-foreground after:transition-all after:duration-500
            group-hover:after:w-full"
          >
            Termos e Condições
          </p>
        </Link>
      </div>
    </div >
  )
}

export default Footer