"use client"
import React, { useEffect, useState } from "react";

import Logo from "@/components/layout/(default)/logo";
import Menu from "@/components/layout/(default)/menu";
import Account from "@/components/layout/(default)/account";
import { cn } from "@/lib/utils"

const Navbar = () => {
  const [isScrolled, setIsScrolled] = React.useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header>
      <nav className="fixed w-full top-5 px-2">
        <div className={cn("mx-auto mt-2 max-w-6xl px-6 transition-all duration-300 lg:px-12", isScrolled && "bg-background/50 max-w-4xl rounded-2xl border backdrop-blur-lg lg:px-5")}>
          <div className="relative flex flex-wrap items-center justify-between gap-6 py-3 lg:gap-0 lg:py-4">

            {/* LOGO */}
            <div className="flex w-full justify-between lg:w-auto">
              <Logo />
            </div>

            {/* MENU ITEM */}
            <Menu />

            {/* LOGIN */}
            <Account />
          </div>
        </div>
      </nav>
    </header>
  );
};
export default Navbar;