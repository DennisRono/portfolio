import React from 'react'
import '../styles/css/footer.css'
import { FiGithub } from 'react-icons/fi'

const Footer = () => {
  return (
    <div className="footer">
        <div className="fwrapper">
            <div className="fcontainer">
                <div className="fflex">
                    <div className="fcopy">
                        <p>
                            &copy; denniskibet {(new Date().getFullYear())} | <span><a href="https://github.com/DennisRono/portfolio"><FiGithub title="Github"/></a></span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer