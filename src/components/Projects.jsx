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
                        <div className="pflex">
                            <div className="projImage">
                                <img src={LinkedIn} alt="" />
                            </div>
                            <div className="projTexts">
                                <h2 className="projTitle">LinkedIn clone</h2>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, ipsa maxime esse laudantium omnis dolores aliquam consectetur odio reiciendis ratione in. Odit reiciendis facere voluptates saepe voluptate. Autem, sed esse.
                                </p>
                                <div className="pstack">

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects