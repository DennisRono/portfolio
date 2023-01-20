import React, { Fragment } from 'react'
import Logo from '../../images/logo.png'

const Sidebar = () => {
  return (
    <Fragment>
        <div className="adminSidebar">
          <div className="brand">
            <img src={Logo} alt="" />
            <h1>DennisKibet</h1>
          </div>
        </div>
    </Fragment>
  )
}

export default Sidebar