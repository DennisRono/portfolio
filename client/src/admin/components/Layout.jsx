import React, { Fragment } from 'react'
import '../styles/css/layout.css'

const Layout = () => {
  return (
    <Fragment>
        <div className="layout">
            <div className="adsidebar"></div>
            <div className="admain">
                <div className="adheader">header</div>
                <div className="adplayarea"></div>
            </div>
        </div>
    </Fragment>
  )
}

export default Layout