import React from "react"
import { CalendarIcon, TagIcon } from "lucide-react"

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
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Changelog</h1>
          <p className="text-muted-foreground">Get the latest updates and improvements to our platform.</p>
        </div>

        <div className="mb-6">
          <h2 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-4">ON THIS PAGE</h2>
          <div className="space-y-2">
            {items.map((item) => (
              <button
                key={item.id}
                onClick={() => onItemClick(item.id)}
                className={`w-full text-left p-3 rounded-lg border transition-all hover:bg-accent ${activeId === item.id ? "bg-accent border-primary shadow-sm" : "border-border hover:border-primary/50"
                  }`}
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
              </button>
            ))}
          </div>
        </div>
      </div>
    </aside>
  )
}

export default ChangelogAside