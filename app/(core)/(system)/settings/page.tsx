"use client"

import React, { useState } from "react"

const settingsData = [
  {
    id: "system",
    title: "Plataforma",
    icon: PackageIcon,
  },
  {
    id: "account",
    title: "Conta",
    icon: UserIcon,
  },
  {
    id: "biling",
    title: "Plano",
    icon: WalletIcon,
  },
]

import SettingsAside from "@/app/(core)/(system)/settings/_components/aside";
import SettingsContent from "@/app/(core)/(system)/settings/_components/content";
import CoreWrapper from "@/app/(core)/_components/core-wrapper";
import { PackageIcon, UserIcon, WalletIcon } from "lucide-react";

const Settings = () => {
  const [activeId, setActiveId] = useState(settingsData[0].id)

  return (
    <CoreWrapper>
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          <SettingsAside items={settingsData} activeId={activeId} onItemClick={setActiveId} />

          <main className="flex-1 min-w-0">
            <SettingsContent activeId={activeId} />
          </main>
        </div>
      </div>
    </CoreWrapper>
  )
}

export default Settings