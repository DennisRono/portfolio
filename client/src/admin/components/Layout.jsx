import React, { Fragment } from 'react'
import '../styles/css/layout.css'
import Header from './Header'
import Sidebar from './Sidebar'

const Layout = () => {
  return (
    <Fragment>
        <div className="layout">
            <div className="adsidebar">
                <Sidebar/>
            </div>
            <div className="adminmain">
                <div className="adminheader">
                    <Header/>
                </div>
                <div className="adminplayarea"></div>
            </div>
        </div>
    </Fragment>
  )
}

export default Layout