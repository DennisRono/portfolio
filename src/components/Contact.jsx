import React from 'react'
import '../styles/css/contact.css'
import {Link} from 'react-router-dom'

const Contact = () => {
  return (
    <div className="contact">
        <div className="conwrapper">
            <div className="concontainer">
                <div className="conflex">
                    <h2 className="conTitle"><span className="conCounter">03. </span> &nbsp;&nbsp;&nbsp;&nbsp; what are you upto?</h2>
                    <h2 className="constitle">Let's talk</h2>
                    <p className="contexts">
                        let's chat on opportunities, new technologies, ideas or even say hi
                    </p>
                    <p className="contbtnP">
                        <Link to="/contact" className="contactb">Say Hi</Link>
                    </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Contact