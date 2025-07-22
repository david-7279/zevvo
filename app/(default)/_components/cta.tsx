"use client"

import type React from "react"
import Link from "next/link"
import { FileText, Layers, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

const HoverSection = ({
  icon: Icon,
  title,
  description,
  href = "#",
}: {
  icon: React.ElementType
  title: string
  description: string
  href?: string
}) => {
  return (
    <Link href={href} className="block h-full">
      <div className="h-full p-6 transition-colors duration-200 hover:bg-gray-50 dark:hover:bg-gray-800/50 cursor-pointer group">
        <div className="flex items-start gap-4">
          <div className="flex-shrink-0">
            <Icon className="w-6 h-6 text-gray-600 dark:text-gray-400" />
          </div>
          <div className="space-y-2">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{title}</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{description}</p>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default function Component() {
  return (
    <div className="w-full py-20 lg:py-40">
      <div className="container mx-auto px-4">
        <Card className="overflow-hidden p-0">
          <CardContent className="p-0">
            {/* Desktop Layout */}
            <div className="hidden md:flex">
              {/* Left Side */}
              <div className="flex-1 p-8 lg:p-12 border-r border-gray-200 dark:border-gray-700">
                <div className="space-y-6">
                  <Button variant="outline" size="sm" className="rounded-full bg-transparent">
                    <Sparkles className="w-8 h-8 mr-2" />
                    Conecta-te
                  </Button>

                  <div className="space-y-4">
                    <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white leading-tight">
                      Transforma o teu fluxo de trabalho com a nossa solução empresarial
                    </h1>
                    <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed max-w-lg">
                      A nossa plataforma simplifica operações complexas em escala, fornecendo informações abrangentes e
                      capacidades de automatização inteligente.
                    </p>
                  </div>

                  <div className="flex gap-4 pt-4">
                    <Button className="bg-black hover:bg-gray-800 text-white dark:bg-white dark:text-black dark:hover:bg-gray-200">
                      Começar Agora
                    </Button>
                    <Button variant="outline">Saber Mais</Button>
                  </div>
                </div>
              </div>

              {/* Right Side */}
              <div className="flex-1 flex flex-col">
                {/* Top Right Section */}
                <div className="flex-1 border-b border-gray-200 dark:border-gray-700">
                  <HoverSection
                    icon={FileText}
                    title="Documentação"
                    description="Sabe mais sobre as funcionalidades e capacidades da nossa plataforma."
                    href="#"
                  />
                </div>

                {/* Bottom Right Section */}
                <div className="flex-1">
                  <HoverSection
                    icon={Layers}
                    title="Demonstração Interativa"
                    description="Experimenta a nossa plataforma em primeira mão com uma demonstração interativa das principais funcionalidades."
                    href="#"
                  />
                </div>
              </div>
            </div>

            {/* Mobile Layout */}
            <div className="md:hidden">
              <div className="p-6 space-y-6">
                <Button variant="outline" size="sm" className="rounded-full bg-transparent">
                  <Sparkles className="w-4 h-4 mr-2" />
                  Conecta-te
                </Button>

                <div className="space-y-4">
                  <h1 className="text-2xl font-bold text-gray-900 dark:text-white leading-tight">
                    Transforma o teu fluxo de trabalho com a nossa solução empresarial
                  </h1>
                  <p className="text-base text-gray-600 dark:text-gray-400 leading-relaxed">
                    A nossa plataforma simplifica operações complexas em escala, fornecendo informações abrangentes e
                    capacidades de automatização inteligente.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-3">
                  <Button className="bg-black hover:bg-gray-800 text-white dark:bg-white dark:text-black dark:hover:bg-gray-200">
                    Começar Agora
                  </Button>
                  <Button variant="outline">Saber Mais</Button>
                </div>

                <div className="space-y-4 pt-4">
                  <HoverSection
                    icon={FileText}
                    title="Documentação"
                    description="Sabe mais sobre as funcionalidades e capacidades da nossa plataforma."
                    href="#"
                  />

                  <HoverSection
                    icon={Layers}
                    title="Demonstração Interativa"
                    description="Experimenta a nossa plataforma em primeira mão com uma demonstração interativa das principais funcionalidades."
                    href="#"
                  />
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
