import React from "react"

import CoreWrapper from "@/app/(core)/_components/core-wrapper"
import DashboardHeaderCard from "@/app/(core)/_components/dashboard-header-card"
import DashboardFooterCard from "@/app/(core)/_components/dashboard-footer-card"
import DashboardSalesChart from "@/app/(core)/_components/dashboard-sales-chart"
import DashboardStocksChart from "@/app/(core)/_components/dashboard-stocks-chart"

const Dashboard = () => {
  return (
    <CoreWrapper>
      {/* Dashboard Title */}
      <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">Dashboard</h3>

      {/* Header Cards Row */}
      <div className="flex flex-row flex-wrap justify-between gap-5">
        <DashboardHeaderCard />
      </div >

      {/* Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <DashboardSalesChart />
        <DashboardStocksChart />
      </div >

      {/* Bottom Cards Row */}
      <div className="flex flex-row flex-wrap gap-10" >
        <DashboardFooterCard />
      </div>
    </CoreWrapper>
  )
}

export default Dashboard