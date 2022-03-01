import React from 'react'
import '../styles/css/landing.css'
import Wave from '../images/wave.png'
import { ReactComponent as Scroll } from '../images/scroll.svg'

const Landing = () => {
  return (
    <div class="landing">
      <div className="lcontainer">
        <div className="lwrapper">
          <div className="lflex">
            <div className="ltexts">
              <p className="lcachy">Hi, <img className="wave" src={Wave} alt="👋"/> I am</p>
              <h1 className="myname">Dennis Kibet</h1>
            </div>
            <div className="limages"></div>
          </div>
          <span className="callToActionScroll hidecallToActionScroll" style={{ bottom: "50px" }}>
            <Scroll />
          </span>
        </div>
      </div>
    </div>
  )
}

export default Landing