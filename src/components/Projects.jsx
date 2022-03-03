import React from 'react'
import '../styles/css/projects.css'
import LinkedIn from '../images/Linkedin.png'

const Projects = () => {
    return (
        <div className="projects">
            <div className="pwrapper">
                <div className="pcontainer">
                    <h2 className="pTitle"><span className="pCounter">04. </span> &nbsp;&nbsp;&nbsp;&nbsp; Featured Projects</h2>
                    <div className="proj">
                        <h2 className="projTitle">LinkedIn clone</h2>
                        <div className="pflex">
                            <div className="projImage">
                                <img src={LinkedIn} alt="" />
                            </div>
                            <div className="projTexts"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects