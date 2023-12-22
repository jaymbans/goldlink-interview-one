import React from 'react'
import { Pie } from 'react-chartjs-2';

function PieChart({ chartData }) {
  return (
    <div className="palette">
      Lending
      <Pie
        data={chartData}
      />
    </div>
  )
}

export default PieChart