import React from "react"

import Heading from "@/app/(default)/components/heading";
import { BoxesIcon, UserIcon } from "lucide-react"

const Features = () => {
  return (
    <div className="w-full py-20 lg:py-40">
      <div className="container mx-auto">
        <div className="flex flex-col gap-10 text-center justify-center items-center">
          <Heading
            icon={BoxesIcon}
            title="Funcionalidades"
            heading="Construído para satisfazer as suas necessidades!"
            paragraph="Descrição para as funcionalidades do sistema"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-muted rounded-md h-full lg:col-span-2 p-6 aspect-square lg:aspect-auto flex justify-between flex-col">
              <UserIcon className="w-8 h-8 stroke-1" />
              <div className="flex flex-col">
                <h3 className="text-xl tracking-tight">Pay supplier invoices</h3>
                <p className="text-muted-foreground max-w-xs text-base">
                  Our goal is to streamline SMB trade, making it easier and faster
                  than ever.
                </p>
              </div>
            </div>
            <div className="bg-muted rounded-md  aspect-square p-6 flex justify-between flex-col">
              <UserIcon className="w-8 h-8 stroke-1" />
              <div className="flex flex-col">
                <h3 className="text-xl tracking-tight">Pay supplier invoices</h3>
                <p className="text-muted-foreground max-w-xs text-base">
                  Our goal is to streamline SMB trade, making it easier and faster
                  than ever.
                </p>
              </div>
            </div>

            <div className="bg-muted rounded-md aspect-square p-6 flex justify-between flex-col">
              <UserIcon className="w-8 h-8 stroke-1" />
              <div className="flex flex-col">
                <h3 className="text-xl tracking-tight">Pay supplier invoices</h3>
                <p className="text-muted-foreground max-w-xs text-base">
                  Our goal is to streamline SMB trade, making it easier and faster
                  than ever.
                </p>
              </div>
            </div>
            <div className="bg-muted rounded-md h-full lg:col-span-2 p-6 aspect-square lg:aspect-auto flex justify-between flex-col">
              <UserIcon className="w-8 h-8 stroke-1" />
              <div className="flex flex-col">
                <h3 className="text-xl tracking-tight">Pay supplier invoices</h3>
                <p className="text-muted-foreground max-w-xs text-base">
                  Our goal is to streamline SMB trade, making it easier and faster
                  than ever.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Features