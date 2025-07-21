import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

import { Path } from '@/lib/paths'
import { Button } from '@/components/ui/button'
import Error404 from "@/public/404.gif"

const NotFound = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <div>
        <Image
          src={Error404.src}
          alt='Error 404'
          width={400}
          height={400}
        />
      </div>

      <div className="space-y-5 mt-15 items-center text-center text-pretty">
        <h3 className="text-4xl font-semibold">Página não encontrada</h3>
        <div className="flex flex-col gap-1">
          <p className="text-foreground text-base">A página que procura não existe ou foi movida.</p>
          <p className="text-foreground text-base">Mas de certeza que vai gostar do nosso trabalho.</p>
        </div>
      </div>

      <div className="mt-10">
        <Link href={Path.root}>
          <Button variant="default">
            Ir para a página inicial
          </Button>
        </Link>
      </div>
    </div>
  )
}

export default NotFound