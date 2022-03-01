import React from 'react'
import '../styles/css/landing.css'
import Wave from '../images/wave.png'

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
          <span class="callToActionScroll hidecallToActionScroll" style="bottom: 50px;">
            <svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="KeyboardArrowDownIcon">
              <path d="M7.41 8.59 12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"></path>
            </svg>
          </span>
        </div>
      </div>
    </div>
  )
}

export default Landing