import React, { Fragment, useState } from 'react'
import '../styles/css/cont.css'
import { api } from '../api/axios'

const Contact = () => {
    const[data, setData] = useState({
        name: '',
        email: '',
        phone: '',
        website: '',
        brief: ''
    })

    const [response, setResponse] = useState({message: '', type: ''})
    const handleSubmit =  async (e) => {
        e.preventDefault()
        let res = await api('POST', 'contact', data)
        setResponse(res)
        setData({
            name: '',
            email: '',
            phone: '',
            website: '',
            brief: ''
        })
    }
  return (
    <Fragment>
        <section className="contact-page">
            <div className="contact-page-wrapper">
                <div className="contFormSec">
                    <h2 className="contact-page-header">Contact</h2>
                    <form onSubmit={handleSubmit}>
                        <h3>1. Tell me more about yourself</h3>
                        <div className="cont-group">
                            <div className="user-input-wrp">
                                <br/>
                                <input id="id-input" type="text" className="inputText" name="name" value={data.name} onChange={e=>{setData({ ...data, [e.target.name]: e.target.value })}}/>
                                <span className="floating-label">Your Name <span style={{color: "red"}}>*</span></span>
                            </div>
                            <span id="id-err"></span>
                            <div className="cont-gr-flex">
                                <div className="contPut">
                                    <div className="user-input-wrp">
                                        <br/>
                                        <input id="id-input" type="text" className="inputText" name="email" value={data.email} onChange={e=>{setData({ ...data, [e.target.name]: e.target.value })}}/>
                                        <span className="floating-label">Your Email <span style={{color: "red"}}>*</span></span>
                                    </div>
                                    <span id="id-err"></span>
                                </div>
                                <div className="contPut">
                                    <div className="user-input-wrp">
                                        <br/>
                                        <input id="id-input" type="text" className="inputText" name="phone" value={data.phone} onChange={e=>{setData({ ...data, [e.target.name]: e.target.value })}} />
                                        <span className="floating-label">Your Phone Number</span>
                                    </div>
                                    <span id="id-err"></span>
                                </div>
                            </div>
                            <div className="user-input-wrp">
                                <br/>
                                <input id="id-input" type="text" className="inputText" name="website" value={data.website} onChange={e=>{setData({ ...data, [e.target.name]: e.target.value })}}/>
                                <span className="floating-label">Company Website</span>
                            </div>
                            <span id="id-err"></span>
                        </div>
                        
                        <h3>2. What are you looking to work on?</h3>
                        <div className="cont-group">
                            <div className="user-input-wrp">
                                <br/>
                                <textarea id="id-input" type="text" className="inputText" name="brief" value={data.brief} onChange={e=>{setData({ ...data, [e.target.name]: e.target.value })}} style={{minHeight: "100px"}}></textarea>
                                <span className="floating-label">Describe your project briefly <span style={{color: "red"}}>*</span></span>
                            </div>
                            <span id="id-err"></span>
                            <div className="input-field-row">
                                <div className="input-file-row">
                                    <label for="project_brief" className="project_brief">
                                        <div className="file-content">
                                            <div className="icon">
                                                <img src="./assets/svg/icon-download.svg" alt=""/>
                                            </div>
                                            <div className="content-label">
                                                Drag or browse files to upload
                                            </div>
                                        </div>
                                        <div className="row-wrap">
                                            <div id="filePush" className="button">upload</div>
                                        </div>
                                    </label>
                                    <input className="file-field" type="file" accept="application/pdf, application/msword, application/vnd.ms-excel, application/vnd.ms-powerpoint" name="upload[]" multiple="multiple" onChange='getFile()'/>
                                </div>
                                <span id="id-err fileErr"></span>
                            </div>
                        </div>
                        <input type="submit" value="submit" name="contact-page" className="contact-page-btn"/>
                    </form>
                </div>
            </div>
        </section>
    </Fragment>
  )
}

export default Contact