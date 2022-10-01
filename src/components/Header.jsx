import React, { Fragment } from 'react'
import '../styles/css/header.css'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <Fragment>
        <div className="header">
            <div className="header-wrapper">
              <div className="navigation">
                <ul>
                  <li className="nav-link">
                    <Link to="/">Home</Link>
                  </li>
                  <li className="nav-link">
                    <Link to="/stats">Stats</Link>
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