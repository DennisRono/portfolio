import React, { Fragment } from 'react'
import '../styles/css/sidebar.css'
import {ReactComponent as Home} from '../../assets/svg/home.svg'

const Sidebar = () => {
  return (
    <Fragment>
        <div className="adminSidebar">
          <div className="brand">
            <h1>Dennis Kibet</h1>
          </div>
          <div className="adminnavigation">
            <div><span>pages</span></div>
            <ul>
              <li>
                  <Home className="navIcs" />
                  <span>Dashboard</span>
              </li>
              <li>
                  <Home className="navIcs" />
                  <span>Blogs</span>
              </li>
            </ul>
          </div>
          <div className="adminnavigation">
            <div><span>sections</span></div>
            <ul>
              <li>
                  <Home className="navIcs" />
                  <span>Dashboard</span>
              </li>
              <li>
                  <Home className="navIcs" />
                  <span>Blogs</span>
              </li>
            </ul>
          </div>
        </div>
    </Fragment>
  )
}

export default Sidebar