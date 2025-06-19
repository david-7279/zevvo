import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BorderBeam } from "@/components/magicui/border-beam";
import { Path } from "@/lib/paths";
import { CheckIcon } from "lucide-react";
import Link from "next/link";
import React from "react";

interface Feature {
  title: string;
  description: string;
}

interface Props {
  index: number;
  title: string;
  description: string;
  price: number;
  features: Feature[];
}

const PricingCard: React.FC<Props> = ({ index, title, description, price, features }) => {
  return (
    <Card key={index} className="relative overflow-hidden w-full rounded-md flex flex-col min-h-[500px]">
      <CardHeader>
        <CardTitle>
          <span className="flex flex-row gap-4 items-center font-normal">{title}</span>
        </CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col flex-grow">
        <div className="flex flex-col gap-8 justify-between h-full">
          <div>
            <p className="flex flex-row items-center gap-2 text-xl mb-4">
              <span className="text-4xl">${price}</span>
              <span className="text-sm text-muted-foreground">/ mês</span>
            </p>
            <div className="flex flex-col gap-4">
              {features.map((feature, idx) => (
                <div className="flex flex-row gap-4" key={idx}>
                  <CheckIcon className="w-4 h-4 mt-2 text-primary" />
                  <div className="flex flex-col">
                    <p>{feature.title}</p>
                    <p className="text-muted-foreground text-sm">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-auto">
            <Link href={Path.root} className="w-full">
              {index === 0 || index === 2 ? (
                <Button variant="outline" className="w-full">
                  <span className="whitespace-pre-wrap text-center text-sm leading-none tracking-tight">
                    Começar Agora
                  </span>
                </Button>
              ) : null}
              {index === 1 ? (
                <Button variant="default" className="w-full">
                  <span className="whitespace-pre-wrap text-center text-sm leading-none tracking-tight">
                    Começar Agora
                  </span>
                </Button>
              ) : null}
            </Link>
          </div>
        </div>
      </CardContent>
      {index === 1 ? <BorderBeam duration={8} size={100} /> : null}
    </Card>
  );
};

export default PricingCard;