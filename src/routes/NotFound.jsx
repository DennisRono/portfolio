import React, { useEffect, useState } from 'react'
import '../styles/css/notfound.css'
import { Link } from "react-router-dom"

const NotFound = () => {
    const [seconds, setSeconds ] =  useState(10);
    useEffect(()=>{
        let myInterval = setInterval(() => {
            if (seconds > 0) {
                setSeconds(seconds - 1);
            } else {
                // window.location.href = "/"
            }
        }, 1000)
        return ()=> {
            clearInterval(myInterval);
        };
    });
  return (
    <div>
        <div className="notfoundWrapper">
            <p>404</p>
            <br/>
            <p className="notFoundTexts">We can't seem to find the page you are looking for.<br /> We will try to redirect you automatically in { seconds } seconds.</p>
            <Link className="notFoundLink" to="/">back home</Link>             
        </div>
    </div>
  )
}

export default NotFound