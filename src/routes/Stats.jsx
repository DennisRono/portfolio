import React, { useState, useEffect } from 'react'
import '../styles/css/stats.css'
import axios from 'axios'
import dateFormat from 'dateformat'
import { Link } from 'react-router-dom'
import { ReactComponent as HomeIc } from '../assets/svg/home.svg'
import BackImage from '../images/Linkedin.png'
import Footer from '../components/Footer'


const Stats = () => {
  const [userdata, setUserdata] = useState({})
  const getUser = async () => {
    try {
      const response = await axios.get('https://api.github.com/users/DennisRono');
      setUserdata(response.data)
    } catch (error) {
      console.error(error);
    }
  }
  useEffect(()=>{
    getUser()
  },[])
  
  console.log(userdata);
  return (
    <div>
      <div className="stats">
        <Link to="/">
          <HomeIc className="homeIcon"/>
        </Link>
        <div className="statsWrapper">
          <div className="statsContainer">
            <div className="statsFlex">
              <div className="sprofile">
                <div className="sImage">
                  <img src={userdata.avatar_url} alt="" />
                </div>
                <div className="snameTexts">
                  <h2 className="suserTitle">{userdata.name}</h2>
                  <h3 className="suserName">@{userdata.login}</h3>
                  <div className="suinfo">
                    <h2 className="infotxts">{userdata.company}</h2>
                    <h2 className="infotxts">{userdata.location}</h2>
                    <h2 className="infotxts">Joined on {dateFormat(userdata.created_at, "mmmm dS, yyyy")}</h2>
                  </div>
                  <div className="saccInfo">
                    <div className="sintx">
                      <h2>{userdata.public_repos}</h2>
                      <span>repositories</span>
                    </div>
                    <div className="sintx">
                      <h2>{userdata.followers}</h2>
                      <span>followers</span>
                    </div>
                    <div className="sintx">
                      <h2>{userdata.following}</h2>
                      <span>following</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="dennisGraph">
                <a align ="center" href="https://denniskibet.com">
                    <img alt="Finn Neron's Activity Graph" src="https://activity-graph.herokuapp.com/graph?username=DennisRono&bg_color=0D1117&color=5BCDEC&line=5BCDEC&point=FFFFFF&hide_border=true" />
                </a>
              </div>
              <div className="sactivity" style={{margin:"0 auto"}}>
                <img height="137px" alt="" src="https://github-readme-stats.vercel.app/api?username=DennisRono&hide_title=true&hide_border=true&show_icons=true&include_all_commits=true&count_private=true&line_height=21&theme=dark" />&nbsp;
                <img height="137px" alt="" src="https://github-readme-stats.vercel.app/api/top-langs/?username=DennisRono&hide=html&hide_title=true&hide_border=true&layout=compact&langs_count=6&exclude_repo=comp426,Redventures-Movie-Quotes&theme=dark" />
              </div>
              <div className="contributionGraph">
                <div id="contrGraph"></div>
              </div>
            </div>
          </div>
        </div>
      <Footer />
      </div>
    </div>
  )
}

export default Stats