import { Card, CardContent } from '@/components/ui/card';
import React from 'react'

interface Props {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
}

const CardAbout: React.FC<Props> = ({ icon: Icon, title, description }) => {
  return (
    <Card className="hover:bg-muted dark:hover:bg-muted/50 space-y-4 rounded-lg border p-4 transition-colors">
      <CardContent className="p-0">
        <div className="flex size-fit items-center justify-center">
          <Icon />
        </div>
        <div className="space-y-1">
          <h3 className="text-sm font-medium">{title}</h3>
          <p className="text-muted-foreground line-clamp-1 text-sm md:line-clamp-2">
            {description}
          </p>
        </div>
      </CardContent>
    </Card>
  )
}

export default CardAbout