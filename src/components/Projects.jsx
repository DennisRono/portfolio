import React from 'react'
import '../styles/css/projects.css'
import LinkedIn from '../images/Linkedin.png'
import NullChemy from '../images/nullchemy.png'
import tenAfrik from '../images/tenafric.png'
import LeBo from '../images/lebo.png'
import { FiGithub } from 'react-icons/fi'
import { FiExternalLink } from 'react-icons/fi'

const Projects = () => {
    return (
        <div className="projects" id='projects'>
            <div className="pwrapper">
                <div className="pcontainer">
                    <h2 className="pTitle"><span className="pCounter">04. </span> &nbsp;&nbsp;&nbsp;&nbsp; Featured Projects</h2>
                    <div className="proj">
                        <div className="pflex">
                            <div className="projImage">
                                <a href="https://linkedin.denniskibet.com/" target="_blank" rel="noreferrer">
                                    <img src={LinkedIn} alt="linkedin-clone" />
                                </a>
                            </div>
                            <div className="projTexts">
                                <h2 className="projTitle">LinkedIn clone</h2>
                                <p>
                                    This is a simple LinkedIn clone project. Users are able to create posts, like posts, comment on posts and share posts. I did this project to further improve my skills in CRUD as this encompases all these aspects of development. It was fun and i hope you like it as well
                                </p>
                                <div className="pstack">
                                    <span>React</span>
                                    <span>scss</span>
                                    <span>HTML</span>
                                </div>
                                <div className="getCode">
                                    <span><a href="https://github.com/DennisRono/linkedin-clone" target="_blank" rel="noreferrer"><FiGithub title="Github"/></a></span>
                                    <span><a href="https://linkedin.denniskibet.com/" target="_blank" rel="noreferrer"><FiExternalLink title="View live site"/></a></span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="proj">
                        <div className="pflex pfreverse">
                            <div className="projImage">
                                <a href="https://nullchemy.com" target="_blank" rel="noreferrer">
                                    <img src={NullChemy} alt="nullchemy" />
                                </a>
                            </div>
                            <div className="projTexts">
                                <h2 className="projTitle">nullChemy</h2>
                                <p>
                                    a fun company site, designed for marketting a company's products and services and to also bring in customers 
                                </p>
                                <div className="pstack">
                                    <span>React</span>
                                    <span>scss</span>
                                    <span>HTML</span>
                                </div>
                                <div className="getCode">
                                    <span><a href="https://github.com/DennisRono/linkedin-clone" target="_blank" rel="noreferrer"><FiGithub title="Github"/></a></span>
                                    <span><a href="https://nullchemy.com" target="_blank" rel="noreferrer"><FiExternalLink title="View live site"/></a></span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="proj">
                        <div className="pflex">
                            <div className="projImage">
                                <a href="https://github.com/tenafric/tenafrik" target="_blank" rel="noreferrer">
                                    <img src={tenAfrik} alt="tenAfrik" />
                                </a>
                            </div>
                            <div className="projTexts">
                                <h2 className="projTitle">tenAfrik</h2>
                                <p>
                                    tenAfrik is a company website aimed at market our creatives business ideas and software as a service. It was designed using figma and built using react and express. Be sure to check it out
                                </p>
                                <div className="pstack">
                                    <span>React</span>
                                    <span>Tailwind</span>
                                    <span>scss</span>
                                    <span>javascript</span>
                                    <span>figma</span>
                                </div>
                                <div className="getCode">
                                    <span><a href="https://github.com/tenafric/tenafrik" target="_blank" rel="noreferrer"><FiGithub title="Github"/></a></span>
                                    <span><a href="https://tenafric.herokuapp.com" target="_blank" rel="noreferrer"><FiExternalLink title="View live site"/></a></span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="proj">
                        <div className="pflex pfreverse">
                            <div className="projImage">
                                <a href="https://lebodesigns.herokuapp.com" target="_blank" rel="noreferrer">
                                    <img src={LeBo} alt="nullchemy" />
                                </a>
                            </div>
                            <div className="projTexts">
                                <h2 className="projTitle">LeBo designs</h2>
                                <p>
                                    LeBo designs is an ecommerce website for showcasing clothes designs. Users of the site can do online shopping from the best brands here. 
                                </p>
                                <div className="pstack">
                                    <span>React</span>
                                    <span>scss</span>
                                    <span>HTML</span>
                                </div>
                                <div className="getCode">
                                    <span><a href="https://github.com/DennisRono/lebo" target="_blank" rel="noreferrer"><FiGithub title="Github"/></a></span>
                                    <span><a href="https://lebodesigns.herokuapp.com" target="_blank" rel="noreferrer"><FiExternalLink title="View live site"/></a></span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="otherProjects">
                        <h2 className="oTitle">Other Noteworthy Projects</h2>
                        <div className="oproj">
                            <a href="https://github.com/DennisRono/codewars" target="_blank" rel="noreferrer">
                                <h2 className="otproj">Codewars</h2>
                            </a>
                            <p className="optexts">
                                I have been practicing alot on code wars. i have managed to complete alot of the challenges presented which is major achievement to me.
                            </p>
                            <div className="ostack">
                                <span>python</span>
                                <span>javascript</span>
                                <span>go</span>
                                <span>php</span>
                                <span>dart</span>
                                <span>Kotlin</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects