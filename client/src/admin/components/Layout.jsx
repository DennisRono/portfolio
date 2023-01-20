import React, { Fragment } from 'react'
import '../styles/css/layout.css'

const Layout = () => {
  return (
    <Fragment>
        <div className="layout">
            <div className="header"></div>
            <div className="admain">
                <div className="sidebar"></div>
                <div className="playarea"></div>
            </div>
        </div>
    </Fragment>
  )
}

export default Layout