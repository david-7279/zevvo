"use client"

import React, { useState } from "react"

import ChangelogAside from "@/app/(core)/(system)/changelog/_components/aside";
import ChangelogContent from "@/app/(core)/(system)/changelog/_components/content";
import CoreWrapper from "@/app/(core)/_components/core-wrapper";

const changelogData = [
  {
    id: "enhanced-analytics",
    title: "Painel de Análises Melhorado",
    version: "1.3.0",
    date: "15 de agosto de 2025",
    description:
      "Redesenhámos completamente o nosso painel de análises para fornecer insights mais profundos e visualizações de dados melhoradas.",
    features: [
      "Visualizações de dados interativas com atualizações em tempo real",
      "Widgets do painel personalizáveis",
      "Exportação de análises em vários formatos (CSV, PDF, Excel)",
      "Novos modelos de relatórios para casos de uso comuns",
      "Opções melhoradas de filtragem e segmentação de dados",
    ],
    improvements: [
      "Tempos de carregamento mais rápidos para grandes volumes de dados",
      "Melhor responsividade em dispositivos móveis",
      "Esquemas de cores melhorados para melhor acessibilidade",
    ],
    fixes: [
      "Corrigido problema com o seletor de intervalo de datas",
      "Resolvidos problemas de renderização de gráficos no Safari",
      "Corrigida a funcionalidade de exportação para relatórios grandes",
    ],
  },
  {
    id: "mobile-app-launch",
    title: "Lançamento da Aplicação Móvel",
    version: "1.2.5",
    date: "7 de julho de 2025",
    description:
      "A nossa nova aplicação móvel está agora disponível para dispositivos iOS e Android, trazendo todo o poder da nossa plataforma para o seu telemóvel.",
    features: [
      "Aplicações nativas para iOS e Android",
      "Modo offline para funcionalidades principais",
      "Notificações push para atualizações importantes",
      "Suporte para autenticação biométrica",
      "Interface móvel otimizada",
    ],
    improvements: [
      "Processo de onboarding simplificado",
      "Desempenho melhorado em dispositivos mais antigos"
    ],
    fixes: [
      "Corrigidos problemas de login em alguns dispositivos Android",
      "Resolvidos problemas de entrega de notificações"
    ],
  },
  {
    id: "api-improvements",
    title: "Melhorias de Desempenho da API",
    version: "1.2.0",
    date: "15 de junho de 2025",
    description:
      "Grandes melhorias na nossa infraestrutura de API resultando em tempos de resposta mais rápidos e maior fiabilidade.",
    features: [
      "Novo endpoint GraphQL para consultas de dados flexíveis",
      "Suporte a webhooks para integrações em tempo real",
      "Documentação de API melhorada com exemplos interativos",
      "Melhorias no controlo de limites de requisições",
    ],
    improvements: [
      "Tempos de resposta médios 50% mais rápidos",
      "Melhor gestão e comunicação de erros",
      "Gestão de chaves de API melhorada",
    ],
    fixes: [
      "Corrigidos problemas de timeout com pedidos de grandes volumes de dados",
      "Resolvidos casos limite de autenticação",
      "Corrigidas inconsistências na paginação",
    ],
  },
]

const Changelog = () => {
  const [activeId, setActiveId] = useState(changelogData[0].id)
  const activeItem = changelogData.find((item) => item.id === activeId) || changelogData[0]

  return (
    <CoreWrapper>
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          <ChangelogAside items={changelogData} activeId={activeId} onItemClick={setActiveId} />

          <main className="flex-1 min-w-0">
            <ChangelogContent
              title={activeItem.title}
              version={activeItem.version}
              date={activeItem.date}
              description={activeItem.description}
              features={activeItem.features}
              improvements={activeItem.improvements}
              fixes={activeItem.fixes}
            />
          </main>
        </div>
      </div>
    </CoreWrapper>
  )
}

export default Changelog