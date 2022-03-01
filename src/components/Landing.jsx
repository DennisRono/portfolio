import React, { useEffect } from 'react'
import '../styles/css/landing.css'
import Wave from '../images/wave.png'
import { ReactComponent as Scroll } from '../images/scroll.svg'

const Landing = () => {
  useEffect(() => {
      window.addEventListener('scroll', hidecallToActionScroll);
      return () => {
          window.removeEventListener('scroll', hidecallToActionScroll);
      };
  });

  const hidecallToActionScroll = (e) => {
      const header = document.querySelector('.callToActionScroll');
      const scrollTop = window.scrollY;
      scrollTop >= 70 ? header.classList.add('hidecallToActionScroll') : header.classList.remove('hidecallToActionScroll');
  };
  return (
    <div className="landing">
      <div className="lcontainer">
        <div className="lwrapper">
          <div className="lflex">
            <div className="ltexts">
              <p className="lcachy">Hi, <img className="wave" src={Wave} alt="👋"/> I am</p>
              <h1 className="myname">Dennis Kibet</h1>
            </div>
            <div className="limages"></div>
          </div>
        </div>
      </div>
      <span className="callToActionScroll hidecallToActionScroll" style={{ paddingBottom: "15px"}}>
        <Scroll className="thescroll" />
      </span>
    </div>
  )
}

export default Landing