import Link from "next/link"
import { Path } from "@/lib/paths"

import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRightIcon, BoxesIcon, UserIcon } from "lucide-react"

export const dashboardFooterCardsData = [
  {
    title: "Gestão de clientes",
    description: "Organize as informações dos clientes e acompanhe o histórico de compromissos num único local",
    link: Path.clients,
    icon: UserIcon,
  },
  {
    title: "Gestão de Produtos",
    description: "Organize as informações dos produtos e acompanhe o histórico de compromissos num único local",
    link: Path.products,
    icon: BoxesIcon,
  },
]

const DashboardFooterCard = () => {
  return (
    <>
      {dashboardFooterCardsData.map((data, index) => {
        const Icon = data.icon
        return (
          <Link href={data.link} key={index} className="group">
            <Card className="w-full md:w-full lg:max-w-xl gap-7 hover:border-foreground transition-colors duration-300">
              <CardHeader className="flex flex-row items-center justify-between">
                <Button variant="ghost" className="w-13 h-13 rounded-xl bg-accent border-0">
                  <Icon className="size-6 text-muted-foreground" />
                </Button>
              </CardHeader>
              <CardContent>
                <div className="text-lg font-semibold">{data.title}</div>
                <p className="text-muted-foreground text-sm">{data.description}</p>
              </CardContent>
              <CardFooter className="inline-flex items-center gap-2">
                <p className="relative text-sm text-muted-foreground text-center transition-all duration-500
          after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-foreground after:transition-all after:duration-500
          group-hover:after:w-full">
                  Descobre Mais
                </p>
                <ArrowRightIcon className="mt-0.5 text-muted-foreground size-3.5 transition-all duration-500 group-hover:translate-x-1 group-hover:text-foreground" />
              </CardFooter>
            </Card>
          </Link>
        )
      })}
    </>
  )
}

export default DashboardFooterCard