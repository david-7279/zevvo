import React from 'react'
import SystemContent from './system-content'
import AccountContent from './account-content'
import BillingContent from './billing-content'

interface Props {
  activeId: string
}

const SettingsContent: React.FC<Props> = ({ activeId }) => {
  const renderContent = () => {
    switch (activeId) {
      case 'system':
        return <SystemContent />
      case 'account':
        return <AccountContent />
      case 'biling': // Note: keeping the typo as it matches the data
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