import React from "react";
import Link from "next/link";

import { Path } from "@/lib/paths";
import { Button } from "@/components/ui/button";
import MaxWidthWrapper from "@/components/layout/max-width-wrapper";

const menuItems = [
  { menu: "Funcionalidades",  href: Path.root },
  { menu: "Soluções",         href: Path.root },
  { menu: "Preços",           href: Path.root },
  { menu: "Sobre",            href: Path.root },
];

const Navbar = () => {
  return (
    <header className="sticky top-0 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 z-50">
      <MaxWidthWrapper className="flex flex-row justify-between items-center mx-auto max-w-screen-4xl py-5">
        <Link href={Path.root}>
          <h3 className="scroll-m-20 text-xl font-semibold tracking-tight">
            Business Hub
          </h3>
        </Link>

        <div className="hidden flex-row gap-10 md:flex">
          {menuItems.map((item, index) => (
            <Link href={item.href} key={index}>
              <p className="text-muted-foreground text-sm transition-all hover:text-foreground">{item.menu}</p>
            </Link>
          ))}
        </div>

        <div className="space-x-3">
          <Link href={Path.login}>
            <Button variant="outline">
              Iniciar Sessão
            </Button>
          </Link>
          <Link href={Path.register}>
            <Button>
              Registar
            </Button>
          </Link>
        </div>

      </MaxWidthWrapper>
    </header>
  );
};
export default Navbar;