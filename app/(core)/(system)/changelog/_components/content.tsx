import React from 'react'
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { CalendarIcon, TagIcon, CheckCircleIcon, BugIcon, ServerCogIcon } from "lucide-react"

interface Props {
  title: string
  version: string
  date: string
  description: string
  features: string[]
  improvements?: string[]
  fixes?: string[]
}

const ChangelogContent: React.FC<Props> = ({ title, version, date, description, features, improvements = [], fixes = [] }) => {
  return (
    <div className="space-y-5">
      {/* Header */}
      <div className="space-y-4">
        <div className="flex items-center gap-3 text-sm text-muted-foreground">
          <Badge variant="secondary" className="flex items-center gap-1">
            <TagIcon className="h-3 w-3" />
            Versão {version}
          </Badge>
          <div className="flex items-center gap-1">
            <CalendarIcon className="h-3 w-3" />
            <span>{date}</span>
          </div>
        </div>
        <h1 className="text-2xl font-semibold">{title}</h1>
        <p className="text-base text-muted-foreground leading-relaxed">{description}</p>
      </div>

      {/* Features */}
      {features.length > 0 && (
        <Card>
          <CardContent>
            <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
              <CheckCircleIcon className="h-5 w-5 text-green-600" />
              <span>Novas Funcionalidades</span>
            </h2>
            <ul className="space-y-1.5 items-center justify-center">
              {features.map((feature, index) => (
                <li key={index} className="flex items-start gap-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-foreground/70 mt-2 shrink-0" />
                  <span className="text-sm text-foreground/70">{feature}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      )}

      {/* Improvements */}
      {improvements.length > 0 && (
        <Card>
          <CardContent>
            <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
              <ServerCogIcon className="h-5 w-5 text-orange-400" />
              <span>Novas Melhorias</span>
            </h2>
            <ul className="space-y-1.5 items-center justify-center">
              {improvements.map((improvement, index) => (
                <li key={index} className="flex items-start gap-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-foreground/70 mt-2 shrink-0" />
                  <span className="text-sm text-foreground/70">{improvement}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      )}

      {/* Bug Fixes */}
      {fixes.length > 0 && (
        <Card>
          <CardContent>
            <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
              <BugIcon className="h-5 w-5 text-red-500" />
              <span>Erros Corrigidos</span>
            </h2>
            <ul className="space-y-1.5 items-center justify-center">
              {fixes.map((fix, index) => (
                <li key={index} className="flex items-start gap-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-foreground/70 mt-2 shrink-0" />
                  <span className="text-sm text-foreground/70">{fix}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      )
      }
    </div >
  )
}

export default ChangelogContent