import React, { Fragment, useState } from 'react'
import '../styles/css/cont.css'
import axios from "axios"
import Header from '../components/Header'

const Contact = () => {
    const[data, setData] = useState({
        name: '',
        email: '',
        phone: '',
        website: '',
        brief: '',
        assets: null
    })
    const [response, setResponse] = useState({message: '', type: ''})
    const handleSubmit =  async (e) => {
        e.preventDefault()
        const formData = new FormData()
        if(data.assets){
            Object.values(data.assets).forEach(file=>{
                formData.append("assets", file)
            })
        }
        for (const key in data) {
            if (data.hasOwnProperty(key)) {
                formData.append(key, data[key])
            }
        }
        let config = {
            method: 'post',
            url: 'http://localhost:5000/den/contact',
            headers: { 
              'auth-token': 'eyJhbGciOiJIUzI1NiJ9.a3l5NXhocnQ4OTQ3d205N25ucA.jZUx505N8EqxuaYZNeqrIGDfJVLd0vCEFfhXknrn3M8', 
            },
            data : formData
        };
        const res = await axios(config)
        setResponse(res.data)
        setData({
            name: '',
            email: '',
            phone: '',
            website: '',
            brief: '',
            assets: null
        })
        setTimeout(() => {
            setResponse({message: '', type: ''})
        }, 5000)
    }
    const [btntxt, setBtntxt] = useState('submit')
    const handleBtn = () => {
        setBtntxt('sending...')
        const btninterval = setInterval(() => {
            setBtntxt('submit')
        }, 1000)
        if(response.message!==''){
            clearInterval(btninterval)
        }
    }
  return (
    <Fragment>
        <section className="contact-page">
            <Header />
            {/* <Link to="/">
                <HomeIc className="homeIcon"/>
            </Link> */}
            <div className="contact-page-wrapper">
                <div className="contFormSec">
                    <h2 className="contact-page-header">Contact</h2>
                    {(response.message!=='')?<p className={(response.type==='success')?"formNotifySucc":"formNotify"}>{response.message}</p>:null}
                    <form onSubmit={handleSubmit}  encType="multipart/form-data">
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
                                    <label htmlFor="project_brief" className="project_brief">
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
                                    {/* accept="application/pdf, application/msword, application/vnd.ms-excel, application/vnd.ms-powerpoint" */}
                                    <input className="file-field" type="file" name="assets" onChange={e=>{setData({ ...data, [e.target.name]: e.target.files })}} multiple="multiple" />
                                </div>
                                <span id="id-err fileErr"></span>
                            </div>
                        </div>
                        <input type="submit" value={btntxt} onClick={()=>{handleBtn()}} name="contact-page" className="contact-page-btn"/>
                    </form>
                </div>
            </div>
        </section>
    </Fragment>
  )
}

export default Contact