import React from "react"
import { CalendarIcon, TagIcon } from "lucide-react"
import { Separator } from "@/components/ui/separator"
import { Button } from "@/components/ui/button"

interface ChangelogItem {
  id: string
  title: string
  version: string
  date: string
  isActive?: boolean
}

interface Props {
  items: ChangelogItem[]
  activeId: string
  onItemClick: (id: string) => void
}

const ChangelogAside: React.FC<Props> = ({ items, activeId, onItemClick }) => {
  return (
    <aside className="w-80 shrink-0 hidden lg:block">
      <div className="sticky top-6">
        <div className="mb-8 space-y-5">
          <div className="space-y-2">
            <h1 className="text-2xl font-semibold">Atualizações</h1>
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
                <div className="space-y-2">
                  <h3 className="font-medium text-sm leading-tight">{item.title}</h3>
                  <div className="flex items-center gap-3 text-xs text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <TagIcon className="h-3 w-3" />
                      <span>Version {item.version}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <CalendarIcon className="h-3 w-3" />
                      <span>{item.date}</span>
                    </div>
                  </div>
                </div>
              </Button>
            ))}
          </div>
        </div>
      </div>
    </aside>
  )
}

export default ChangelogAside