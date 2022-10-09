import React, { Fragment, useState } from 'react'
import '../styles/css/cont.css'
import axios from "axios"
import Header from '../components/Header'
import { ReactComponent as Upload } from '../assets/svg/icon-download.svg'

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
            url: 'https://api.denniskibet.com/den/contact',
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
        getFile(true)
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
    const getFile = (c) => {
        const files = document.querySelector('.file-field').files
        let label = document.querySelector('.content-label')
        let finlabel = ""
        let filenames = []
        for (var i = 0; i < files.length; ++i) {
            var name = files.item(i).name;
            filenames.push(name)
        }
        filenames.map(i=>{
            return (
            finlabel = finlabel + "<span class='filenames-list'>"+i+"</span>"
            )
        })
        if(c){
            label.innerHTML = 'Drag or browse your project brief (you can upload multipe files)'
        } else {
            label.innerHTML = finlabel
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
                                        <span className="floating-label">Phone Number</span>
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
                                <div class="input-file-row">
                                    <label for="project_brief" class="project_brief">
                                        <div class="file-content">
                                            <div class="icon">
                                                <Upload className="image-upload-icon"/>
                                            </div>
                                            <div class="content-label">
                                                Drag or browse your project brief (you can upload multipe files)
                                            </div>
                                        </div>
                                        <div class="row-wrap">
                                            <div id="filePush" class="button">upload</div>
                                        </div>
                                    </label>
                                    <input
                                        className="file-field"
                                        type="file"
                                        name="assets"
                                        onChange={e=>{
                                            setData({ ...data, [e.target.name]: e.target.files })
                                            getFile(false)
                                        }}
                                        multiple="multiple"
                                    />
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