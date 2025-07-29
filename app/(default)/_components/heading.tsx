import React from 'react'
import { Button } from '@/components/ui/button'
import { SplittingText } from '@/components/animate-ui/text/splitting';

interface Props {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  heading: string;
  paragraph: string;
}

const Heading: React.FC<Props> = ({ icon: Icon, title, heading, paragraph }) => {
  return (
    <div className="space-y-5 text-center">
      <Button variant="outline" size="sm" className="rounded-2xl hover:bg-background">
        <SplittingText
          className="text-sm text-foreground"
          type="lines"
          inView
          inViewOnce={false}
          motionVariants={{
            initial: { y: 70, opacity: 0, x: 0 },
            animate: { y: 0, opacity: 1, x: 0 },
          }}
          text={[
            <div className='inline-flex mt-1 gap-2 items-center'>
              <Icon />
              {title}
            </div>
          ]}
        />
      </Button>
      <div className="flex gap-2 flex-col">
        <SplittingText
          className="text-3xl md:text-5xl tracking-tighter max-w-xl text-center font-regular"
          type="lines"
          inView
          inViewOnce={false}
          motionVariants={{
            initial: { y: 70, opacity: 0, x: 0 },
            animate: { y: 0, opacity: 1, x: 0 },
          }}
          text={[heading]}
        />
        <SplittingText
          className="text-lg leading-relaxed tracking-tight text-muted-foreground max-w-xl"
          type="lines"
          inView
          inViewOnce={false}
          motionVariants={{
            initial: { y: 70, opacity: 0, x: 0 },
            animate: { y: 0, opacity: 1, x: 0 },
          }}
          text={[paragraph]}
        />
      </div>
    </div>
  )
}

export default Heading