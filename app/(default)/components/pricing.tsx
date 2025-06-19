import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check, CircleDollarSignIcon, MoveRight, PhoneCall } from "lucide-react";

import Heading from "@/app/(default)/components/heading";
import PricingCard from "./pricing-card";

const pricingInformation = [
  {
    index: 0,
    title: "Startup",
    description: "",
    price: 10,
    features: [
      { title: "Feature A", description: "Descrição A" },
      { title: "Feature B", description: "Descrição B" }
    ]
  },
  {
    index: 1,
    title: "Standard",
    description: "",
    price: 20,
    features: [
      { title: "Feature C", description: "Descrição C" },
      { title: "Feature D", description: "Descrição D" }
    ]
  },
  {
    index: 2,
    title: "Premium",
    description: "",
    price: 30,
    features: [
      { title: "Feature E", description: "Descrição E" },
      { title: "Feature F", description: "Descrição F" }
    ]
  },
]

const Pricing = () => {
  return (
    <div className="w-full py-20 lg:py-40">
      <div className="container mx-auto">
        <div className="flex text-center justify-center items-center gap-4 flex-col">
          <Heading
            icon={CircleDollarSignIcon}
            title="Preços"
            heading="Preços que fazem sentido!"
            paragraph="Atualmente, gerir um pequeno negócio já é difícil"
          />

          <div className="grid pt-20 text-left grid-cols-1 lg:grid-cols-3 w-full gap-8">
            {pricingInformation.map((item, index) => (
              <PricingCard
                key={index}
                index={item.index}
                title={item.title}
                description={item.description}
                price={item.price}
                features={item.features}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Pricing