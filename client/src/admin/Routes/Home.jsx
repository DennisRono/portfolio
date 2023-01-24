import React, { Fragment } from 'react'
import '../styles/css/home.css'

const Home = () => {
  return (
    <Fragment>
        <div className="dashHome">
          <div className="dashHomeContainer">
            <div className="dashHWidgets">
              <h2>Welcome back Dennis Kibet</h2>
            </div>
            <div className="dashHWidgets">
              <h2>Page Visits</h2>
            </div>
            <div className="dashHWidgets"></div>
            <div className="dashHWidgets"></div>
            <div className="dashHWidgets"></div>
            <div className="dashHWidgets"></div>
          </div>
        </div>
    </Fragment>
  )
}

export default Home