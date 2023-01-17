import React, { Fragment, useState } from 'react'
import '../styles/css/login.css'

const Login = () => {
    const [logbtntxt, setLogBtntxt] = useState({text:'login', state:false})
    const [login, setLogin] = useState({
        email: '',
        password: ''
    })
    const [response, setResponse] = useState({message: '', type: ''})

    const loginSubmit = async (e) => {
        e.preventDefault()
        setLogBtntxt({text:'loging in', state:true})

        setLogBtntxt({text:'login', state:false})
    }
  return (
    <Fragment>
        <div className="login">
        <div className="authentification">
          <section className="contact">
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