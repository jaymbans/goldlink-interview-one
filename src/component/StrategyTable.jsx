import React from 'react'
import { StrategyData } from '../data/data'

function StrategyTable({ header = [
  "Strategy",
  "TVL",
  "Volatility",
  "Collateral",
  "PNL"
] }) {
  return (
    <div id='strategy-container' className="palette">
      <h1 className="title">
        Strategy Performance
      </h1>
      <div className="flex-table-container">
        <div className="col">
          <h5>{header[0]}</h5>
          {
            StrategyData.map(strategy => {
              return (
                <div className="cell">
                  {strategy.name}
                </div>
              )
            })
          }
        </div>
        <div className="col">
          <h5>{header[1]}</h5>
          {
            StrategyData.map(strategy => {
              return (
                <div className="cell">
                  {`$${strategy.tvl}`}
                </div>
              )
            })
          }
        </div>
        <div className="col">
          <h5>{header[2]}</h5>
          {
            StrategyData.map(strategy => {
              return (
                <div className="cell">
                  <p className={`pill ${strategy.volatility}`}>
                    {
                      strategy.volatility[0].toUpperCase() +
                      strategy.volatility.slice(1)
                    }
                  </p>
                </div>
              )
            })
          }
        </div>
        <div className="col">
          <h5>{header[3]}</h5>
          {
            StrategyData.map(strategy => {
              return (
                <div className="cell">
                  {`$${strategy.collateral}`}
                </div>
              )
            })
          }
        </div>
        <div className="col">
          <h5>{header[4]}</h5>
          {
            StrategyData.map(strategy => {
              return (
                <div className={`cell ${strategy.pnl > 0 ? "positive" : "negative"}`}>

                  {`${strategy.pnl > 0 ? "+" : "-"} $${Math.abs(strategy.pnl)}`}
                </div>
              )
            })
          }
        </div>
      </div>
    </div>
  )
}

export default StrategyTable