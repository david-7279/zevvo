"use client"

import React, { useState } from "react"

import CoreWrapper from "@/app/(core)/_components/core-wrapper";
import SupportAside from "@/app/(core)/(system)/support/_components//aside";
import SupportContent from "@/app/(core)/(system)/support/_components/content";
import { MessageCircleQuestionIcon, MessageCircleMoreIcon } from "lucide-react";

const supportData = [
  {
    id: "system",
    title: "Ajuda",
    icon: MessageCircleQuestionIcon,
  },
  {
    id: "account",
    title: "Conversas",
    icon: MessageCircleMoreIcon,
  },
]

const Support = () => {
  const [activeId, setActiveId] = useState(supportData[0].id)


  return (
    <CoreWrapper>
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          <SupportAside items={supportData} activeId={activeId} onItemClick={setActiveId} />

          <main className="flex-1 min-w-0">
            <SupportContent activeId={activeId} />
          </main>
        </div>
      </div>
    </CoreWrapper>
  )
}

export default Support