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
              <p className="lcachy">Hi, <img src={Wave} alt="👋"/> I am</p>
              <p>
                <div className="ocean">
                      <div className="wave"></div>
                </div>
              </p>
            </div>
            <div className="limages"></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Landing