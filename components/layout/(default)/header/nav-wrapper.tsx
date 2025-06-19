"use client"
import React, { useState, useEffect, ReactNode } from "react"
import { cn } from "@/lib/utils";

interface Props {
  classname?: string;
  children: ReactNode
}

const NavWrapper: React.FC<Props> = ({ classname, children }) => {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav className={`fixed w-full top-5 px-2 ${classname}`}>
      <div className={cn("mx-auto mt-2 max-w-6xl px-6 transition-all duration-300 lg:px-12", isScrolled && "bg-background/50 max-w-4xl rounded-2xl border backdrop-blur-lg lg:px-5")}>
        <div className="relative flex  items-center justify-between gap-6 py-3 lg:gap-0 lg:py-4">
          {children}
        </div>
      </div>
    </nav>
  )
}

export default NavWrapper