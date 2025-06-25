import React from "react"
import SystemContent from "@/app/(core)/(system)/settings/_components/content-system"
import AccountContent from "@/app/(core)/(system)/settings/_components/content-account"
import BillingContent from "@/app/(core)/(system)/settings/_components/content-billing"

interface Props {
  activeId: string
}

const SettingsContent: React.FC<Props> = ({ activeId }) => {
  const renderContent = () => {
    switch (activeId) {
      case "system":
        return <SystemContent />
      case "account":
        return <AccountContent />
      case "biling":
        return <BillingContent />
      default:
        return <SystemContent />
    }
  }

  return (
    <div className="w-full">
      {renderContent()}
    </div>
  )
}

export default SettingsContent