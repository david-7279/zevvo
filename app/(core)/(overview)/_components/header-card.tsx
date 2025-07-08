import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { TrendingUpIcon } from "lucide-react"

interface HeaderCardData {
    title: string
    value: string
    description: string
    percentage: string
    trend: "up" | "down"
    icon: React.ComponentType<{ className?: string }>
}

export const OverviewHeaderCard: HeaderCardData[] = []
interface OverviewHeaderCardComponentProps {
    data?: HeaderCardData[]
}

const OverviewHeaderCardComponent = ({ data = OverviewHeaderCard }: OverviewHeaderCardComponentProps) => {
    return (
        <>
            {data.map((data, index) => {
                const Icon = data.icon
                return (
                    <Card key={index} className="w-full md:w-full lg:w-[480px] gap-4.5">
                        <CardHeader className="flex flex-row items-center justify-between">
                            <Badge className="text-card-foreground rounded-xl py-1 bg-card border-border">
                                <div className="flex items-center space-x-2">
                                    <Icon className="h-4 w-4 text-muted-foreground" />
                                    <small className="text-sm text-muted-foreground leading-none font-medium">{data.title}</small>
                                </div>
                            </Badge>

                            <Badge
                                className={`text-xs inline-flex items-center border-0 
                  ${data.trend === "up"
                                        ? "text-green-600 bg-green-50 border-green-200 dark:text-green-400 dark:bg-green-950"
                                        : "text-red-600 bg-red-50 border-red-200 dark:text-red-400 dark:bg-red-950"}`}
                            >
                                <TrendingUpIcon className="h-3 w-3 mr-1" />
                                {data.percentage}
                            </Badge>
                        </CardHeader>
                        <CardContent>
                            <div className="text-lg font-semibold">{data.value}</div>
                            <p className="text-muted-foreground text-sm">{data.description}</p>
                        </CardContent>
                    </Card>
                )
            })}
        </>
    )
}

export default OverviewHeaderCardComponent