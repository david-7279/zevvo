import React from 'react'
import {
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
  TabsContents,
} from '@/components/animate-ui/components/tabs';
import { PlusIcon, SearchIcon } from 'lucide-react';
import { Button } from '@/button';
import Link from 'next/link';

const PaymentsContent = () => {
  return (
    <div>

      <div className="space-y-5">
        <div className="flex flex-col gap-3 w-full lg:flex-row lg:w-auto lg:items-center">
          <Link href={`/payment/new`}>
            <Button
              variant="default"
              size="default"
              className="w-full lg:w-auto"
            >
              <PlusIcon className="size-4" />
              Adicionar pagamento
            </Button>
          </Link>
        </div>

        <Tabs defaultValue="all">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="all">Todos (5)</TabsTrigger>
            <TabsTrigger value="received">Recebidos (2)</TabsTrigger>
            <TabsTrigger value="pending">Pendentes (2)</TabsTrigger>
            <TabsTrigger value="failed">Falhados (1)</TabsTrigger>
          </TabsList>

          <TabsContents>
            <TabsContent value="all">Content 1</TabsContent>
            <TabsContent value="received">Content 2</TabsContent>
            <TabsContent value="pending">Content 2</TabsContent>
            <TabsContent value="failed">Content 2</TabsContent>
          </TabsContents>
        </Tabs>
      </div>
    </div>
  )
}

export default PaymentsContent