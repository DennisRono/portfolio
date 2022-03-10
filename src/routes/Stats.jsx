import React from 'react'
import '../styles/css/stats.css'
import axios from 'axios'

const Stats = () => {
  return (
    <div>
      <div className="stats">
        <div className="statsWrapper">
          <div className="statsContainer">
            <div className="statsFlex">
              <div className="dennisGraph">
              <a align ="center" href="https://denniskibet.com">
                  <img alt="Finn Neron's Activity Graph" src="https://activity-graph.herokuapp.com/graph?username=DennisRono&bg_color=0D1117&color=5BCDEC&line=5BCDEC&point=FFFFFF&hide_border=true" />
              </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Stats