"use client"
import { useEffect } from "react"
import Link from "next/link"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowUpRightIcon, PackageIcon } from "lucide-react"

import { Path } from "@/lib/paths"

const Hero = () => {
  useEffect(() => {
    const all = document.querySelectorAll(".spotlight-card")

    const handleMouseMove = (ev: MouseEvent) => {
      all.forEach(e => {
        const blob = e.querySelector(".blob") as HTMLElement
        const fblob = e.querySelector(".fake-blob") as HTMLElement

        if (!blob || !fblob) return

        const rec = fblob.getBoundingClientRect()

        blob.style.opacity = "1"

        blob.animate(
          [
            {
              transform: `translate(${ev.clientX - rec.left - rec.width / 2
                }px, ${ev.clientY - rec.top - rec.height / 2}px)`
            }
          ],
          {
            duration: 300,
            fill: "forwards"
          }
        )
      })
    }

    window.addEventListener("mousemove", handleMouseMove)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])

  return (
    <div className="w-full">
      <div className="spotlight-card group bg-border relative overflow-hidden rounded-xl p-px transition-all duration-300 ease-in-out">
        <Card className="text-center h-[60vh] justify-evenly group-hover:bg-card/90 border-none transition-all duration-300 ease-in-out group-hover:backdrop-blur-[20px]">
          <CardHeader>
            <CardTitle>
              <Button variant="outline" size="sm" className="rounded-2xl">
                <PackageIcon />
                <p className="text-sm text-foreground">Hero Section</p>
              </Button>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-16">
            <div className="text-center space-y-3">
              <h1 className="scroll-m-20 text-center text-4xl font-extrabold tracking-tight text-balance">
                Modern Solutions for Customer Engagement
              </h1>
              <p className="leading-7 [&:not(:first-child)]:mt-6 text-muted-foreground">
                Highly customizable components for building modern websites and applications that look and feel the way you mean it
              </p>
            </div>

          </CardContent>
            <div className="space-x-5">
              <Link href={Path.root}>
                <Button variant="secondary" size="lg" className="rounded-3xl">
                  <p>Desobrir Mais</p>
                </Button>
              </Link>

              <Link href={Path.login}>
                <Button size="lg" className="rounded-3xl">
                  <p>Começar</p>
                  <ArrowUpRightIcon />
                </Button>
              </Link>
            </div>
        </Card>
        <div className="blob absolute start-0 top-0 h-20 w-20 rounded-full bg-gray-600/60 opacity-0 blur-2xl transition-all duration-300 ease-in-out dark:bg-gray-400/60 pointer-events-none" />
        <div className="fake-blob absolute start-0 top-0 h-20 w-20 rounded-full pointer-events-none" />
      </div>
    </div>
  )
}

export default Hero
