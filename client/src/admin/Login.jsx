import React, { Fragment, useState } from 'react'
import '../styles/css/login.css'
import { api } from '../api/axios'
import { setJwtToken, setRefreshToken } from '../includes/session'
import { useNavigate } from "react-router-dom"
const axios = require('axios')

const Login = () => {

    let navigate = useNavigate()

    const [logbtntxt, setLogBtntxt] = useState({text:'login', state:false})
    const [login, setLogin] = useState({
        email: '',
        password: ''
    })
    const [response, setResponse] = useState({message: '', type: ''})

    const loginSubmit = async (e) => {
        e.preventDefault()
        setLogBtntxt({text:'loging in', state:true})
        let res = await api('POST', 'login', login)
        setResponse(res.data)

        // Handle user session & JWT & Redirection
        if(res.data.type === 'success'){
            setJwtToken(res.headers.authtoken)
            setRefreshToken(res.headers.refreshtoken)
            setLogBtntxt({text:'redirecting...', state:true})
            setTimeout(() => {
                return navigate("/admin")
            }, 1000)
        }
        setLogin({
            email: '',
            password: ''
        })
    }
  return (
    <Fragment>
        <div className="login">
        <div className="authentification">
          <section className="logincontact">
            <div className="contact-wrapper">
                <div className="contFormSec">
                    <h2 className="contact-header">Dennis Kibet</h2>
                    {(response.message!=='')?<p className={(response.type==='success')?"formNotifySucc":"formNotify"}>{response.message}</p>:null}
                    <form action="contact.php" method="POST" className="login-form"  onSubmit={(e)=>loginSubmit(e)}>
                        <h3>Login</h3>
                        <div className="cont-group">
                            <div className="user-input-wrp">
                                <br/>
                                <input id="id-input" type="text" className="inputText" name="email" value={login.email} onChange={(e)=>{setLogin({ ...login, [e.target.name]: e.target.value })}}/>
                                <span className="floating-label">Email Address <span style={{color: "red"}}>*</span></span>
                            </div>
                            <span id="id-err"></span>
                            <div className="user-input-wrp">
                                <br/>
                                <input id="id-input" type="password" className="inputText" name="password" value={login.password} onChange={(e)=>{setLogin({ ...login, [e.target.name]: e.target.value })}}/>
                                <span className="floating-label">Password <span style={{color: "red"}}>*</span></span>
                            </div>
                            <span id="id-err"></span>
                        </div>
                        <div className="resetting-pass">
                            <button type="submit" className={(logbtntxt.state)?"contact-btn rainbow":"contact-btn"}>{logbtntxt.text}</button>
                        </div>
                    </form>
                </div>
            </div>
          </section>
        </div>
        </div>
    </Fragment>
  )
}

export default Login