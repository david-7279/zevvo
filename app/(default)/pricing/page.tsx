import React from 'react'
import CoreWrapper from '@/app/(core)/_components/core-wrapper'
import Heading from '../_components/heading'
import { EuroIcon } from 'lucide-react'

const Pricing = () => {
  return (
    <section className="scroll-py-16 py-16 md:scroll-py-32 md:py-32 mt-5">
      <div className="mx-auto max-w-5xl px-6">

        <div className="space-y-5 flex justify-center items-center text-center">
          <div className="flex gap-2 flex-col">
            <h2 className="text-3xl md:text-5xl tracking-tighter max-w-xl text-center font-regular">
              Escolha o plano certo para si
            </h2>
            <p className="text-lg leading-relaxed tracking-tight text-muted-foreground max-w-xl">
              Compare os nossos planos para encontrar a solução perfeita para as suas necessidades.
            </p>
          </div>
        </div>

        <div className="grid gap-y-12 px-4 lg:[grid-template-columns:1fr_auto]">


        </div>
      </div>
    </section>
  )
}

export default Pricing