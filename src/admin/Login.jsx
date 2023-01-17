import React, { Fragment } from 'react'
import '../styles/css/login.css'

const Login = () => {
  return (
    <Fragment>
        <div className="login">
        <div className="authentification">
          <section className="contact">
            <div className="contact-wrapper">
                <div className="contFormSec">
                    <h2 className="contact-header">wenotify kenya</h2>
                    {(response.message!=='')?<p className={(response.type==='success')?"formNotifySucc":"formNotify"}>{response.message}</p>:null}
                    <form action="contact.php" method="POST" className={(active==='login')?"login-form":"hide-activity"}  onSubmit={(e)=>loginSubmit(e)}>
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
                        <p>don't have an account? <span onClick={()=>{
                            setActive('register')
                            setResponse({message: '', type: ''})
                        }}>Register here</span></p>
                        <div className="resetting-pass">
                            <button type="submit" className={(logbtntxt.state)?"contact-btn rainbow":"contact-btn"}>{logbtntxt.text}</button>
                            <p><Link to="/reset">forgot password?</Link></p>
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