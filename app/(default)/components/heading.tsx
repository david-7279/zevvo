import { Button } from '@/components/ui/button'
import React from 'react'

interface Props {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  heading: string;
  paragraph: string;
}

const Heading:React.FC<Props> = ({ icon: Icon, title, heading, paragraph }) => {
  return (
    <div>
      <Button variant="outline" size="sm" className="rounded-2xl">
        <Icon />
        <p className="text-sm text-foreground">{title}</p>
      </Button>
      <div className="flex gap-2 flex-col">
        <h2 className="text-3xl md:text-5xl tracking-tighter max-w-xl text-center font-regular">{heading}</h2>
        <p className="text-lg leading-relaxed tracking-tight text-muted-foreground max-w-xl text-center">{paragraph}</p>
      </div>
    </div>
  )
}

export default Heading