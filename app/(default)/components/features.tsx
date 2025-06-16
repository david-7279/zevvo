import React from "react"

import CardDecorator from "@/app/(default)/components/card-decorator"
import { Card } from "@/components/ui/card"
import { Settings2Icon, SparklesIcon, ZapIcon } from "lucide-react"

const featureItem = [
  {
    icon: Settings2Icon,
    title: "Customizable",
    description: "Extensive customization options, allowing you to tailor every aspect to meet your specific needs."
  },
  {
    icon: SparklesIcon,
    title: "Customizable",
    description: "Extensive customization options, allowing you to tailor every aspect to meet your specific needs."
  },
  {
    icon: ZapIcon,
    title: "Customizable",
    description: "Extensive customization options, allowing you to tailor every aspect to meet your specific needs."
  },
]

const Features = () => {
  return (
    <div>
      <div className="text-center">
        <h2 className="text-balance text-4xl font-semibold lg:text-5xl">
          Built to cover your needs
        </h2>
        <p className="mt-4">
          Libero sapiente aliquam quibusdam aspernatur, praesentium iusto
          repellendus.
        </p>
      </div>
      <Card
        className="@min-4xl:max-w-full @min-4xl:grid-cols-3 @min-4xl:divide-x @min-4xl:divide-y-0 mx-auto mt-8 grid max-w-sm divide-y overflow-hidden shadow-zinc-950/5 *:text-center md:mt-16"
      >
        {featureItem.map((item, index) => (
          <CardDecorator
            key={index}
            icon={item.icon}
            title={item.title}
            description={item.description}
          />
        ))}
      </Card>
    </div>
  )
}

export default Features