import React, { useState } from 'react'
import "./Dashboard.scss"
import PieChart from './PieChart'
import StrategyTable from './StrategyTable'
import { PieChartData } from "../data/data"
import { Chart as ChartJS } from "chart.js/auto"

function Dashboard() {
  const [pieData, setPieData] = useState({
    labels: PieChartData.map(data => data.name),
    datasets: [{
      label: "Allocations",
      data: PieChartData.map(data => data.allocation),
      backgroundColor: [
        "#855CF8",
        "#E289F2",
        "#7879F1",
        "#B085FF"
      ]
    }],
  })

  return (
    <section id="dashboard">
      <PieChart chartData={pieData} />
      <StrategyTable />
    </section>
  )
}

export default Dashboard