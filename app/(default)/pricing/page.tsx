"use client"

import React from "react"
import PricingContent from "@/app/(default)/pricing/_components/pricing-content";
import PricingResponsive from "@/app/(default)/pricing/_components/pricing-responsive";
import { useIsMobile } from "@/hooks/use-mobile";

const Pricing = () => {
  const isMobile = useIsMobile();

  return (
    <section className="scroll-py-16 py-16 md:scroll-py-32 md:py-32 mt-5">
      {isMobile ? <PricingResponsive /> : <PricingContent />}
    </section>
  );
}

export default Pricing