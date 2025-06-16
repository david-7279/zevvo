import { CardContent, CardHeader } from '@/components/ui/card'
import React from 'react'

interface Props {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
}

const CardDecorator: React.FC<Props> = ({ icon: Icon, title, description }) => {
  return (
    <div className="group shadow-zinc-950/5">
      <CardHeader className="pb-3">
        <div
          className="relative mx-auto size-36 duration-500 ease-in transition-all [--color-border:color-mix(in_oklab,var(--color-zinc-950)10%,transparent)] group-hover:[--color-border:color-mix(in_oklab,var(--color-zinc-950)20%,transparent)] dark:[--color-border:color-mix(in_oklab,var(--color-white)15%,transparent)] dark:group-hover:bg-white/5 dark:group-hover:[--color-border:color-mix(in_oklab,var(--color-white)20%,transparent)]"
        >
          <div className="absolute inset-0 bg-[linear-gradient(to_right,var(--color-border)_1px,transparent_1px),linear-gradient(to_bottom,var(--color-border)_1px,transparent_1px)] bg-[size:24px_24px]" />
          <div className="bg-radial to-background absolute inset-0 from-transparent to-75%" />
          <div className="bg-background absolute inset-0 m-auto flex size-12 items-center justify-center border-l border-t">
            <Icon />
          </div>
        </div>
        <h3 className="mt-6 font-medium">{title}</h3>
      </CardHeader>

      <CardContent>
        <p className="text-sm">{description}</p>
      </CardContent>
    </div>
  )
}

export default CardDecorator