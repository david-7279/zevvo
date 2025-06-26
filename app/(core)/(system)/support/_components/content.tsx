import React from "react"
// import HelpContent from "@/app/(core)/(system)/support/_components/content-help"
// import ChatContent from "@/app/(core)/(system)/support/_components/content-chat"

interface Props {
  activeId: string
}

const SupportContent: React.FC<Props> = ({ activeId }) => {
  const renderContent = () => {
    switch (activeId) {
      case "system":
        return "<HelpContent />"
      case "account":
        return "<ChatContent />"
      default:
        return "<HelpContent />"
    }
  }

  return (
    <div className="w-full">
      {renderContent()}
    </div>
  )
}

export default SupportContent