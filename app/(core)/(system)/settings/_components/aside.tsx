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
            <small className="text-muted-foreground text-sm">
              Personalize as suas preferências, atualize informações da conta nesta página.
            </small>
          </div>
          <Separator />
        </div>
        <div className="mb-6">
          <h2 className="text-sm font-semibold text-muted-foreground tracking-wide mb-4 uppercase">Opções de Definições</h2>

          {/* RESPONSIVE */}
          <div className="flex flex-row flex-wrap gap-5 mb-4 lg:hidden">
            {items.slice(0, 3).map((item) => (
              <Button
                key={item.id}
                variant="ghost"
                onClick={() => onItemClick(item.id)}
                className={`
                flex-1 h-16 text-left items-center justify-start rounded-lg border transition-all hover:bg-accent
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

          {/* DESKTOP */}
          <div className="space-y-2 hidden lg:block">
            {items.map((item) => (
              <Button
                key={item.id}
                variant="ghost"
                onClick={() => onItemClick(item.id)}
                className={`
          w-full h-16 text-left items-center justify-start rounded-lg border transition-all hover:bg-accent
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