"use client"

import React, { useState } from 'react'
import ChangelogAside from './_components/aside';
import ChangelogContent from './_components/content';

const changelogData = [
  {
    id: "enhanced-analytics",
    title: "Enhanced Analytics Dashboard",
    version: "1.3.0",
    date: "15 November 2024",
    description:
      "We've completely redesigned our analytics dashboard to provide deeper insights and improved visualizations of your data.",
    features: [
      "Interactive data visualizations with real-time updates",
      "Customizable dashboard widgets",
      "Export analytics in multiple formats (CSV, PDF, Excel)",
      "New reporting templates for common use cases",
      "Improved data filtering and segmentation options",
    ],
    improvements: [
      "Faster loading times for large datasets",
      "Better mobile responsiveness",
      "Enhanced color schemes for better accessibility",
    ],
    fixes: [
      "Fixed issue with date range picker",
      "Resolved chart rendering problems on Safari",
      "Fixed export functionality for large reports",
    ],
  },
  {
    id: "mobile-app-launch",
    title: "Mobile App Launch",
    version: "1.2.5",
    date: "7 October 2024",
    description:
      "Our brand new mobile application is now available for iOS and Android devices, bringing the full power of our platform to your mobile device.",
    features: [
      "Native iOS and Android applications",
      "Offline mode for core functionality",
      "Push notifications for important updates",
      "Biometric authentication support",
      "Optimized mobile interface",
    ],
    improvements: ["Streamlined onboarding process", "Improved performance on older devices"],
    fixes: ["Fixed login issues on some Android devices", "Resolved notification delivery problems"],
  },
  {
    id: "api-improvements",
    title: "API Performance Improvements",
    version: "1.2.0",
    date: "15 September 2024",
    description:
      "Major improvements to our API infrastructure resulting in faster response times and better reliability.",
    features: [
      "New GraphQL endpoint for flexible data queries",
      "Webhook support for real-time integrations",
      "Enhanced API documentation with interactive examples",
      "Rate limiting improvements",
    ],
    improvements: [
      "50% faster average response times",
      "Better error handling and messaging",
      "Improved API key management",
    ],
    fixes: [
      "Fixed timeout issues with large data requests",
      "Resolved authentication edge cases",
      "Fixed pagination inconsistencies",
    ],
  },
]


const Changelog = () => {
  const [activeId, setActiveId] = useState(changelogData[0].id)
  const activeItem = changelogData.find((item) => item.id === activeId) || changelogData[0]

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="flex gap-8">
          <ChangelogAside items={changelogData} activeId={activeId} onItemClick={setActiveId} />

          <main className="flex-1 min-w-0">
            <div className="lg:hidden mb-8">
              <h1 className="text-3xl font-bold mb-2">Atualizações</h1>
              <p className="text-muted-foreground">Receba as últimas actualizações e melhorias da nossa plataforma</p>
            </div>

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
    </div>
  )
}

export default Changelog