import React, { Fragment } from 'react'
import '../styles/css/sidebar.css'
import {ReactComponent as Home} from '../../assets/svg/home.svg'

const Sidebar = () => {
  return (
    <Fragment>
        <div className="adminSidebar">
          <div className="brand">
            <h1>Administrator</h1>
          </div>
          <div className="adminnavigation">
            <ul>
              <li>
                  <Home className="navIcs" />
                  <span>Dashboard</span>
              </li>
            </ul>
          </div>
        </div>
    </Fragment>
  )
}

export default Sidebar