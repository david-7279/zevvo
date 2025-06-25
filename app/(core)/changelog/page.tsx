import React from 'react'

import CoreWrapper from "@/app/(core)/_components/core-wrapper"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';

const changelogTabs = [
  {
    id: "2",
    name: "Melhoramento da Dashboard",
    version: "1.3.0",
    date: "15 Junho 2025"
  },
  {
    id: "1",
    name: "Melhoramento da Tabela dos Produtos",
    version: "1.3.0",
    date: "15 Junho 2025"
  },
  {
    id: "0",
    name: "Melhoramento do Stock",
    version: "1.3.0",
    date: "15 Junho 2025"
  },
];

const Changelog = () => {
  return (
    <CoreWrapper>
      {/* Changelog Title */}
      <div className="mb-16">
        <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">Atualizações</h3>
        <p className="text-muted-foreground text-sm">Receba as últimas actualizações e melhorias da nossa plataforma</p>
        <Separator />
      </div>


      <Tabs orientation="vertical" defaultValue={changelogTabs[0].id} className="w-full flex flex-row items-start gap-4 justify-start">
        <TabsList className="flex flex-col shrink-0">
          {changelogTabs.map((tab) => (
            <TabsTrigger
              key={tab.id}
              value={tab.id}
              className="border-l-2 border-transparent justify-start rounded-none data-[state=active]:shadow-none data-[state=active]:border-primary data-[state=active]:bg-primary/5 py-1.5"
            >
              <Card className="gap-1 py-4 data-[state=active]:border-primary data-[state=active]:border data-[state=active]:bg-accent-foreground">
                <CardHeader><p className="text-sm text-foreground font-semibold">{tab.name}</p></CardHeader>
                <CardContent>
                  <div className="inline-flex gap-2 items-center">
                    <small className="text-sm text-muted-foreground">Version {tab.version}</small>
                    <li className="text-muted-foreground" />
                    <small className="text-sm text-muted-foreground">{tab.date}</small>
                  </div>
                </CardContent>
              </Card>
            </TabsTrigger>
          ))}
        </TabsList>

        <div className="flex items-start justify-start w-full border rounded-md font-medium text-muted-foreground">
          {changelogTabs.map((tab) => (
            <TabsContent key={tab.id} value={tab.id}>
              {tab.name} Content
            </TabsContent>))}
        </div>
      </Tabs>
    </CoreWrapper>
  )
}

export default Changelog