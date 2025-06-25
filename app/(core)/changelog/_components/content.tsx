import React from 'react'
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Calendar, Tag, CheckCircle } from "lucide-react"

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
    <div className="space-y-8">
      {/* Header */}
      <div className="space-y-4">
        <div className="flex items-center gap-3 text-sm text-muted-foreground">
          <Badge variant="secondary" className="flex items-center gap-1">
            <Tag className="h-3 w-3" />
            Version {version}
          </Badge>
          <div className="flex items-center gap-1">
            <Calendar className="h-3 w-3" />
            <span>{date}</span>
          </div>
        </div>
        <h1 className="text-3xl font-bold">{title}</h1>
        <p className="text-lg text-muted-foreground leading-relaxed">{description}</p>
      </div>

      {/* Features */}
      {features.length > 0 && (
        <Card>
          <CardContent className="p-6">
            <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-green-600" />
              {"What's included:"}
            </h2>
            <ul className="space-y-3">
              {features.map((feature, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="h-1.5 w-1.5 rounded-full bg-primary mt-2 shrink-0" />
                  <span className="text-muted-foreground">{feature}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      )}

      {/* Improvements */}
      {improvements.length > 0 && (
        <Card>
          <CardContent className="p-6">
            <h2 className="text-lg font-semibold mb-4">Improvements</h2>
            <ul className="space-y-3">
              {improvements.map((improvement, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="h-1.5 w-1.5 rounded-full bg-blue-500 mt-2 shrink-0" />
                  <span className="text-muted-foreground">{improvement}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      )}

      {/* Bug Fixes */}
      {fixes.length > 0 && (
        <Card>
          <CardContent className="p-6">
            <h2 className="text-lg font-semibold mb-4">Bug Fixes</h2>
            <ul className="space-y-3">
              {fixes.map((fix, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="h-1.5 w-1.5 rounded-full bg-red-500 mt-2 shrink-0" />
                  <span className="text-muted-foreground">{fix}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      )}
    </div>
  )
}

export default ChangelogContent