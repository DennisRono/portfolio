import React, { useEffect } from 'react'
import '../styles/css/landing.css'
import Wave from '../images/wave.png'
import Kibet from '../images/jumb_kibet.png'
import { ReactComponent as Scroll } from '../images/scroll.svg'
import { FiGithub } from 'react-icons/fi'
import DownloadIcon from '@mui/icons-material/Download'

const Landing = () => {
  useEffect(() => {
      console.log("running");
      window.addEventListener('scroll', hidecallToActionScroll);
      return () => {
          window.removeEventListener('scroll', hidecallToActionScroll);
      };
  });

  const hidecallToActionScroll = (e) => {
      const act = document.querySelector('.callToActionScroll');
      const scrollTop = window.scrollY;
      console.log(scrollTop);
      scrollTop >= 70 ? act.classList.add('hidecallToActionScroll') : act.classList.remove('hidecallToActionScroll');
  };
  return (
    <div className="landing">
      <div className="lcontainer">
        <div className="lwrapper">
          <div className="lflex">
            <div className="ltexts">
              <p className="lcachy">Hi, <img className="wave" src={Wave} alt="👋"/> I am</p>
              <h1 className="myname">Dennis Kibet</h1>
              <h2 className="lintrotxts">
                a graphics designer and software engineer focused on creating impressive interfaces & experiences 
              </h2>
              <div className="pouterLinks">
                  <div className="git">
                      <a className="draw" target="blank" href="https://github.com/DennisRono/"><FiGithub className="pIcons" /><span className="talign">&nbsp;&nbsp;Github</span></a>
                  </div>
                  <div className="dresume">
                      <a className="dresumeLink" href="https://denniskibet.com/docs/resume.pdf" download><DownloadIcon className="pIcons"  /><span className="talign">&nbsp;&nbsp;Resume</span></a>
                  </div>
              </div>
            </div>
            <div className="limages">
              <div className="limageWrapper">
                <img draggable="false" className="denoo" src={Kibet} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <span className="callToActionScroll" style={{ paddingBottom: "15px"}}>
        <Scroll className="thescroll" />
      </span>
    </div>
  )
}

export default Landing