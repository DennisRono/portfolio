import React from 'react'
import '../styles/css/stats.css'
import axios from 'axios'
import BackImage from '../images/Linkedin.png'
import Chart from 'chart.js/auto';
import { getRelativePosition } from 'chart.js/helpers';
import {actions, config} from '../includes/chart'



const Stats = () => {
  const ctx = document.getElementById('contrGraph');
  const myChart = new Chart(ctx, {
      type: 'line',
      data: {
          labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
          datasets: [{
              label: '# of Votes',
              data: [12, 19, 3, 5, 2, 3],
              backgroundColor: [
                  'rgba(255, 99, 132, 0.2)',
                  'rgba(54, 162, 235, 0.2)',
                  'rgba(255, 206, 86, 0.2)',
                  'rgba(75, 192, 192, 0.2)',
                  'rgba(153, 102, 255, 0.2)',
                  'rgba(255, 159, 64, 0.2)'
              ],
              borderColor: [
                  'rgba(255, 99, 132, 1)',
                  'rgba(54, 162, 235, 1)',
                  'rgba(255, 206, 86, 1)',
                  'rgba(75, 192, 192, 1)',
                  'rgba(153, 102, 255, 1)',
                  'rgba(255, 159, 64, 1)'
              ],
              borderWidth: 1
          }]
      },
      options: {
          scales: {
              y: {
                  beginAtZero: true
              }
          }
      }
  });
  return (
    <div>
      <div className="stats">
        <div className="statsWrapper">
          <div className="statsContainer">
            <div className="statsFlex">
              <div className="sprofile">
                <div className="sImage">
                  <img src={BackImage} alt="" />
                </div>
                <div className="snameTexts">
                  <h2 className="suserTitle">Finn Neron</h2>
                  <h3 className="suserName">@DennisRono</h3>
                  <div className="suinfo">
                    <h2 className="infotxts">nullexpo</h2>
                    <h2 className="infotxts">Kenya</h2>
                    <h2 className="infotxts">Joined September 30, 2020</h2>
                  </div>
                  <div className="saccInfo">
                    <div className="sintx">
                      <h2>47</h2>
                      <span>repositories</span>
                    </div>
                    <div className="sintx">
                      <h2>42</h2>
                      <span>followers</span>
                    </div>
                    <div className="sintx">
                      <h2>258</h2>
                      <span>following</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="contributionGraph">
                <div id="contrGraph"></div>
              </div>
              <div className="dennisGraph">
              <a align ="center" href="https://denniskibet.com">
                  <img alt="Finn Neron's Activity Graph" src="https://activity-graph.herokuapp.com/graph?username=DennisRono&bg_color=0D1117&color=5BCDEC&line=5BCDEC&point=FFFFFF&hide_border=true" />
              </a>
              </div>
              <div className="sactivity">
                <a href="https://denniskibet.com/">
                <img height="137px" alt="" src="https://github-readme-stats.vercel.app/api?username=DennisRono&hide_title=true&hide_border=true&show_icons=true&include_all_commits=true&count_private=true&line_height=21&theme=dark" />&nbsp;
                <img height="137px" alt="" src="https://github-readme-stats.vercel.app/api/top-langs/?username=DennisRono&hide=html&hide_title=true&hide_border=true&layout=compact&langs_count=6&exclude_repo=comp426,Redventures-Movie-Quotes&theme=dark" />
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