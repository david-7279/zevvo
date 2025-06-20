"use client";
import { useEffect } from "react";
import Link from "next/link";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { PackageIcon } from "lucide-react";

import { Path } from "@/lib/paths";
import { ShimmerButton } from "@/components/magicui/shimmer-button";

const Hero = () => {
  useEffect(() => {
    const all = document.querySelectorAll(".spotlight-card");

    const handleMouseMove = (ev: MouseEvent) => {
      all.forEach((e) => {
        const blob = e.querySelector(".blob") as HTMLElement;
        const fblob = e.querySelector(".fake-blob") as HTMLElement;

        if (!blob || !fblob) return;

        const rec = fblob.getBoundingClientRect();
        blob.style.opacity = "1";
        blob.animate(
          [
            {
              transform: `translate(${ev.clientX - rec.left - rec.width / 2
                }px, ${ev.clientY - rec.top - rec.height / 2}px)`,
            },
          ],
          {
            duration: 300,
            fill: "forwards",
          }
        );
      });
    };
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="w-full">
      <div className="spotlight-card group bg-border relative overflow-hidden rounded-xl p-px transition-all duration-300 ease-in-out">
        <Card className="text-center min-h-[60vh] sm:h-auto md:h-[50vh] lg:h-[60vh] justify-evenly group-hover:bg-card/90 border-none transition-all duration-300 ease-in-out group-hover:backdrop-blur-[20px]">
          <CardHeader>
            <CardTitle>
              <Button variant="outline" size="sm" className="rounded-2xl">
                <PackageIcon />
                <p className="text-sm text-foreground">Solução para Negócios Locais</p>
              </Button>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-16 sm:space-y-8 md:space-y-12">
            <div className="text-center space-y-3">
              <h1 className="scroll-m-20 text-center text-4xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-balance">
                Simplifique a Gestão do Seu Negócio Local
              </h1>
              <p className="leading-7 [&:not(:first-child)]:mt-6 text-muted-foreground sm:text-sm md:text-base">
                Gerencie clientes, faturas e relatórios com uma plataforma fácil
                de usar. <br className="hidden md:block" />Comece com um teste
                gratuito de 7 dias e leve seu negócio ao próximo nível!
              </p>
            </div>
          </CardContent>
          <div className="flex items-center justify-center text-center space-x-5 px-4 py-4 sm:px-2">
            <Link href={Path.login}>
              <ShimmerButton className="bg-foreground rounded-3xl w-full sm:w-auto max-w-xs mx-auto">
                <span className="whitespace-pre-wrap text-white text-center text-sm font-medium leading-none">
                  Começar Agora
                </span>
              </ShimmerButton>
            </Link>
          </div>
        </Card>
        <div className="blob absolute start-0 top-0 h-20 w-20 sm:h-16 sm:w-16 md:h-20 md:w-20 rounded-full bg-gray-600/60 opacity-0 blur-2xl transition-all duration-300 ease-in-out dark:bg-gray-400/60 pointer-events-none" />
        <div className="fake-blob absolute start-0 top-0 h-20 w-20 sm:h-16 sm:w-16 md:h-20 md:w-20 rounded-full pointer-events-none" />
      </div>
    </div>
  );
};

export default Hero;