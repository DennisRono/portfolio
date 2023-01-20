import React, { Fragment } from 'react'
import Home from '../Routes/Home'
import '../styles/css/layout.css'
import Header from './Header'
import Sidebar from './Sidebar'

const Layout = () => {
  return (
    <Fragment>
        <div className="layout">
            <div className="adminsidebar">
                <Sidebar/>
            </div>
            <div className="adminmain">
                <div className="adminheader">
                    <Header/>
                </div>
                <div className="adminplayarea">
                    <Home/>
                </div>
            </div>
        </div>
    </Fragment>
  )
}

export default Layout