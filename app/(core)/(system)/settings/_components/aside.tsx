import React from "react"
import { Separator } from "@/components/ui/separator"
import { Button } from "@/components/ui/button"
import { LucideIcon } from "lucide-react"

interface SettingsItem {
  id: string
  title: string
  icon?: LucideIcon
  isActive?: boolean
}

interface Props {
  items: SettingsItem[]
  activeId: string
  onItemClick: (id: string) => void
}

const SettingsAside: React.FC<Props> = ({ items, activeId, onItemClick }) => {
  return (
    <aside className="w-full lg:w-80 shrink-0">
      <div className="lg:sticky lg:top-6">
        <div className="mb-8 space-y-5">
          <div className="space-y-2">
            <h1 className="text-2xl font-semibold">Definições</h1>
            <small className="text-muted-foreground text-sm">Receba as últimas actualizações e melhorias da nossa plataforma</small>
          </div>
          <Separator />
        </div>

        <div className="mb-6">
          <h2 className="text-sm font-semibold text-muted-foreground tracking-wide mb-4 uppercase">Nesta página</h2>
          <div className="space-y-2">
            {items.map((item) => (
              <Button
                key={item.id}
                variant="ghost"
                onClick={() => onItemClick(item.id)}
                className=
                {`
                  w-full h-16 text-left items-start justify-start rounded-lg border transition-all hover:bg-accent 
                  ${activeId === item.id
                    ? "bg-accent border-primary shadow-sm"
                    : "border-border hover:border-primary/50"
                  }
                  `}
              >
                <div className="flex items-center gap-3">
                  {item.icon && <item.icon className="h-5 w-5" />}
                  <span className="font-medium text-sm">{item.title}</span>
                </div>
              </Button>
            ))}
          </div>
        </div>
      </div>
    </aside>
  )
}

export default SettingsAside