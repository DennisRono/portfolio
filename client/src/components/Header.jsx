import React, { Fragment, useState } from 'react'
import '../styles/css/header.css'
import { Link } from 'react-router-dom'
import { ReactComponent as Bars } from '../assets/svg/bars.svg'
import { ReactComponent as Times } from '../assets/svg/times.svg'

const Header = () => {
  const [nav, setNav] = useState(false)
  const tNav = (t) => {
    setNav(t)
  }
  return (
    <Fragment>
        <div className="header">
            <div className="header-wrapper">
              <Bars className="bars" onClick={()=>{tNav(true)}}/>
              <div className={(nav)?"navigation opennav":"navigation closenav"}>
                <Times className="timezclose" onClick={()=>{tNav(false)}}/>
                <ul>
                  <li className="nav-link">
                    <Link to="/">Home</Link>
                  </li>
                  <li className="nav-link">
                    <Link to="/stats">Stats</Link>
                  </li>
                  <li className="nav-link">
                    <Link to="/blog">Blog</Link>
                  </li>
                  <li className="nav-link">
                    <Link to="/#projects">Projects</Link>
                  </li>
                  <li className="nav-link">
                    <Link to="/contact">Contact</Link>
                  </li>
                </ul>
              </div>
            </div>
        </div>
    </Fragment>
  )
}

export default Header