import React from 'react'
import '../styles/css/stats.css'
import axios from 'axios'
import BackImage from '../images/Linkedin.png'


const Stats = () => {
  const getUser = async () => {
    try {
      const response = await axios.get('https://api.github.com/users/DennisRono');
      console.log(response.data);
      return response.data
    } catch (error) {
      console.error(error);
    }
  }
  const userdata = getUser()
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
                  <h2 className="suserTitle">{userdata.name}</h2>
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