"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  AreaChart,
  ArrowUpRightIcon,
  Globe,
  Heart,
  Lightbulb,
  ShieldCheck,
  Users,
} from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

// Types
type SolutionValue = {
  id: string;
  name: string;
  description: string;
  icon: React.ElementType;
  color: string;
  principles: string[];
  testimonial?: {
    quote: string;
    author: string;
    role: string;
    image: string;
  };
  image?: string;
};

const solutionValue: SolutionValue[] = [
  {
    id: "dashboard",
    name: "Dasboard",
    description:
      "We constantly push boundaries and challenge the status quo, fostering a culture where creative thinking and experimentation are encouraged at all levels of the organization.",
    icon: Lightbulb,
    color: "text-amber-500",
    principles: [
      "Embrace experimentation and calculated risk-taking",
      "Challenge assumptions and existing processes",
      "Dedicate time and resources to exploring new ideas",
      "Learn from failures and iterate quickly",
    ],
    image: "",
  },
  {
    id: "reports",
    name: "Relatórios",
    description:
      "We are committed to creating a positive environmental and social impact. Our business decisions consider long-term sustainability and our responsibility to future generations.",
    icon: Globe,
    color: "text-green-500",
    principles: [
      "Minimize environmental impact in operations and products",
      "Support community initiatives and social causes",
      "Consider long-term sustainability in all business decisions",
      "Measure and report on environmental and social performance",
    ],
    image: "",
  },
  {
    id: "products",
    name: "Produtos",
    description:
      "We believe in transparency, honesty, and ethical conduct in everything we do. Trust is the foundation of our relationships with customers, partners, and each other.",
    icon: ShieldCheck,
    color: "text-blue-500",
    principles: [
      "Be honest and transparent in all communications",
      "Do what&apos;s right, even when it&apos;s difficult",
      "Keep commitments and take accountability for mistakes",
      "Protect private data and confidential information",
    ],
    image: "",
  },
  {
    id: "clients",
    name: "Clientes",
    description:
      "We achieve more together than alone. By combining diverse perspectives and skills, we create solutions that are stronger, more innovative, and more effective than any individual could produce.",
    icon: Users,
    color: "text-indigo-500",
    principles: [
      "Value and seek diverse perspectives",
      "Share knowledge openly across teams",
      "Give credit and celebrate team achievements",
      "Support colleagues and prioritize team success",
    ],
    image: "",
  },
  {
    id: "invoice",
    name: "Faturas",
    description:
      "Our customers are at the center of everything we do. We&apos;re committed to understanding their needs, exceeding their expectations, and building lasting relationships based on mutual success.",
    icon: Heart,
    color: "text-red-500",
    principles: [
      "Deeply understand customer needs and pain points",
      "Prioritize features that deliver true customer value",
      "Proactively gather and implement customer feedback",
      "Measure success through customer outcomes",
    ],
    image: "",
  },
  {
    id: "payments",
    name: "Pagamentos",
    description:
      "We strive for excellence in everything we do, from the quality of our products to our customer service. We set high standards and continuously work to exceed them through learning and improvement.",
    icon: AreaChart,
    color: "text-emerald-500",
    principles: [
      "Set ambitious goals and high standards",
      "Pursue continuous improvement through feedback",
      "Pay attention to details without losing sight of the big picture",
      "Take pride in delivering exceptional quality",
    ],
    image: "",
  },
];

const Solutions = () => {
  const [activeValue, setActiveValue] = useState<string>(solutionValue[0].id);

  // Get active value object
  const currentValue = solutionValue.find((value) => value.id === activeValue) || solutionValue[0];
  return (
    <section className="py-24">
      <div className="container mx-auto px-4 md:px-6 2xl:max-w-[1400px]">
        <div className="mx-auto mb-16 max-w-3xl space-y-4 text-center">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
            What Guides Our Decisions
          </h2>
          <p className="text-muted-foreground">
            Our values aren&apos;t just words on a wall—they&apos;re the
            principles that guide our daily actions and long-term vision,
            shaping our culture and driving our success.
          </p>
        </div>

        <Tabs
          value={activeValue}
          onValueChange={setActiveValue}
          className="space-y-8"
        >
          {/* Value selection - Tabs for md+ screens, Dropdown for smaller screens */}
          <div className="mb-8 flex justify-center">
            {/* Dropdown for small screens */}
            <div className="w-full md:hidden">
              <Select value={activeValue} onValueChange={setActiveValue}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select a value" />
                </SelectTrigger>
                <SelectContent>
                  {solutionValue.map((value) => (
                    <SelectItem key={value.id} value={value.id}>
                      <div className="flex items-center gap-2">
                        <value.icon className={cn("h-4 w-4", value.color)} />
                        <span>{value.name}</span>
                      </div>
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Tabs for medium screens and above */}
            <TabsList className="hidden h-auto bg-transparent p-1 md:flex">
              {solutionValue.map((value) => (
                <TabsTrigger
                  key={value.id}
                  value={value.id}
                  className={cn(
                    "data-[state=active]:bg-muted gap-2",
                    "data-[state=active]:border-border border border-transparent",
                  )}
                >
                  <value.icon className={cn("h-4 w-4", value.color)} />
                  <span>{value.name}</span>
                </TabsTrigger>
              ))}
            </TabsList>
          </div>

          {/* Value content */}
          <div className="grid items-center gap-8 md:grid-cols-12">
            {/* Left column: Value details */}
            <div className="space-y-6 md:col-span-6">
              <div className="mb-4 flex items-center gap-4">
                <div className={cn("rounded-xl p-2.5", "bg-muted")}>
                  <currentValue.icon
                    className={cn("h-7 w-7", currentValue.color)}
                  />
                </div>
                <h3 className="text-2xl font-bold">{currentValue.name}</h3>
              </div>

              <p className="text-muted-foreground text-lg">
                {currentValue.description}
              </p>

              <div className="space-y-3 pt-2">
                <h4 className="font-medium">Key Principles:</h4>
                <ul className="space-y-2">
                  {currentValue.principles.map((principle, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <ArrowUpRightIcon
                        className={cn("mt-0.5 h-5 w-5", currentValue.color)}
                      />
                      <span>{principle}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right column: Value image */}
            <div className="md:col-span-6">
              {currentValue.image ? (
                <div className="relative aspect-[4/3] overflow-hidden rounded-xl shadow-lg">
                  <Image
                    src={currentValue.image}
                    alt={`Illustration of our ${currentValue.name} value`}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className="absolute right-0 bottom-0 left-0 p-6">
                    <div
                      className={cn(
                        "inline-block rounded-lg px-3 py-1 text-sm text-white",
                        "bg-black/30 backdrop-blur-sm",
                      )}
                    >
                      {currentValue.name}
                    </div>
                  </div>
                </div>
              ) : (
                <div className="bg-muted flex aspect-[4/3] items-center justify-center rounded-xl">
                  <currentValue.icon
                    className={cn(
                      "h-24 w-24",
                      currentValue.color,
                      "opacity-25",
                    )}
                  />
                </div>
              )}
            </div>
          </div>
        </Tabs>
      </div>
    </section>
  )
}

export default Solutions