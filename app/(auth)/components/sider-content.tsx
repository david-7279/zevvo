import Image from "next/image"
import React from "react"

import siderImage from "@/public/sider-content.png" 

const SiderContent = () => {
  return (
    <div className="bg-muted hidden lg:block rounded-lg py-10 px-6">
      <div className="">
        <h3 className="scroll-m-20 text-4xl font-semibold tracking-tight">Transforme Seu Negócio Local</h3>
        <small className="text-sm text-muted-foreground leading-none font-medium">Gerencie clientes, faturas e relatórios com facilidade. Experimente grátis por 7 dias e veja a diferença!</small>
      </div>

      <div className="flex justify-center">
        <Image
          src={siderImage}
          alt="Sider Image"
          width={750}
          height={750}
        />
      </div>
    </div>
  )
}

export default SiderContent