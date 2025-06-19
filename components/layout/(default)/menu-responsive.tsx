"use client"

import { Path } from '@/lib/paths'
import Link from 'next/link'
import React, { useState } from 'react'

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import Logo from '@/components/layout/(default)/logo'
import { XIcon } from 'lucide-react'

const menuItems = [
  { link: Path.root, label: "Home" },
  { link: Path.root, label: "Funcionalidades" },
  { link: Path.root, label: "Preços" },
  { link: Path.root, label: "FAQ" },
  { link: Path.root, label: "Começar" },
]

const authItems = [
  { link: Path.login, label: "Iniciar" },
  { link: Path.register, label: "Registar" },
]

const ResponsiveMenu = () => {
  const [open, setIsOpen] = useState(false);

  return (
    <Sheet open={open} onOpenChange={setIsOpen}>
      <SheetTrigger className="text-sm">Menu</SheetTrigger>

      <SheetContent className="w-full">
        <SheetHeader>
          <SheetTitle asChild>
            <div className="flex flex-row justify-between px-2">
              <Logo />
              <SheetClose>
                Fechar
              </SheetClose>
            </div>
          </SheetTitle>
        </SheetHeader>

        <div className="flex flex-col gap-15 justify-center h-full px-4">
          {menuItems.map((item, index) => (
            <Link key={index} href={item.link} className="group" onClick={() => { setIsOpen(false) }}>
              <div className="flex flex-row gap-0 text-pretty justify-end w-full">
                <p className="relative text-4xl text-muted-foreground text-center transition-all duration-500
          after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-foreground after:transition-all after:duration-500
          group-hover:after:w-full">
                  {item.label}
                </p>
              </div>
            </Link>
          ))}
        </div>

        <SheetFooter className="flex flex-row gap-7 justify-end items-end">
          {authItems.map((item, index) => (
            <Link key={index} href={item.link} className="group">
              <div className="flex flex-row gap-0 text-pretty">
                <p className="relative text-sm uppercase text-foreground transition-all duration-500
                      after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-foreground after:transition-all after:duration-500
                      group-hover:after:w-full">{item.label}</p>
              </div>
            </Link>
          ))}
        </SheetFooter>
      </SheetContent>
    </Sheet>
  )
}

export default ResponsiveMenu;