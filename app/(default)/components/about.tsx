
import { User2Icon } from "lucide-react";
import CardAbout from "./card-about";
import { Button } from "@/components/ui/button";
import { ShimmerButton } from "@/components/magicui/shimmer-button";

const aboutItem = [
  {
    icon: User2Icon,
    title: "Gemini",
    description: "Description"
  },
  {
    icon: User2Icon,
    title: "Gemini",
    description: "Description"
  },
  {
    icon: User2Icon,
    title: "Gemini",
    description: "Description"
  },
  {
    icon: User2Icon,
    title: "Gemini",
    description: "Description"
  },
  {
    icon: User2Icon,
    title: "Gemini",
    description: "Description"
  },
  {
    icon: User2Icon,
    title: "Gemini",
    description: "Description"
  },
]

const About = () => {
  return (
    <div className="py-24 md:py-32">
      <div className="mx-auto flex flex-col px-6 md:grid md:max-w-5xl md:grid-cols-2 md:gap-12">
        <div className="order-last mt-6 flex flex-col gap-12 md:order-first">
          <div className="space-y-6">
            <h2 className="text-balance text-3xl font-semibold md:text-4xl lg:text-5xl">
              Integrate with your favorite LLMs
            </h2>
            <p className="text-muted-foreground">
              Connect seamlessly with popular platforms and services to enhance
              your workflow.
            </p>
            <ShimmerButton className="shadow-2xl" borderRadius="8px">
              <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10">
                Começa a Utilizar
              </span>
            </ShimmerButton>
          </div>

          <div className="mt-auto grid grid-cols-[auto_1fr] gap-3">
            <div className="bg-background flex aspect-square items-center justify-center border">
              <User2Icon className="size-9" />
            </div>
            <blockquote>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
                quos.
              </p>
              <div className="mt-2 flex gap-2 text-sm">
                <cite>David Vieira</cite>
                <p className="text-muted-foreground">Developer</p>
              </div>
            </blockquote>
          </div>
        </div>

        <div className="-mx-6 px-6 [mask-image:radial-gradient(ellipse_100%_100%_at_50%_0%,#000_70%,transparent_100%)] sm:mx-auto sm:max-w-md md:-mx-6 md:ml-auto md:mr-0">
          <div className="bg-background dark:bg-muted/50 rounded-2xl border p-3 shadow-lg md:pb-12">
            <div className="grid grid-cols-2 gap-2">
              {aboutItem.map((item, index) => (
                <CardAbout
                  key={index}
                  icon={item.icon}
                  title={item.title}
                  description={item.description}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About