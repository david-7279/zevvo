"use client"

import React, { useEffect, useState } from "react"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { ArrowUpRightIcon } from "lucide-react"
import { cn } from "@/lib/utils"

const Account = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])


  return (
    <div className="bg-background in-data-[state=active]:block lg:in-data-[state=active]:flex mb-6 hidden w-full flex-wrap items-center justify-end space-y-8 rounded-3xl border p-6 shadow-2xl shadow-zinc-300/20 md:flex-nowrap lg:m-0 lg:flex lg:w-fit lg:gap-6 lg:space-y-0 lg:border-transparent lg:bg-transparent lg:p-0 lg:shadow-none dark:shadow-none dark:lg:bg-transparent">
      <div className="flex w-full flex-col space-y-3 sm:flex-row sm:gap-3 sm:space-y-0 md:w-fit">
        <Button
          asChild
          variant="outline"
          size="sm"
          className={cn(isScrolled && "lg:hidden")}>
          <Link href="#">
            <span>Iniciar Sessão</span>
          </Link>
        </Button>
        <Button
          asChild
          size="sm"
          className={cn(isScrolled && "lg:hidden")}>
          <Link href="#">
            <span>Registar</span>
          </Link>
        </Button>
        <Button
          asChild
          size="sm"
          className={cn(isScrolled ? "lg:inline-flex" : "hidden")}>
          <Link href="#">
            <span>Começar</span>
            <ArrowUpRightIcon />
          </Link>
        </Button>
      </div>
    </div>
  )
}

export default Account