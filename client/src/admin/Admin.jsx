import React, { Fragment, useEffect, useState } from 'react'
import '../styles/css/admin.css'
import { useNavigate } from "react-router-dom"
import { getJwtToken, getRefreshToken } from '../includes/session'
import { api } from '../api/axios'


const Admin = () => {
    let navigate = useNavigate()
    let [LoggedIn, setLoggedIn] = useState(false)

    //verify jwt
    const checkLoggedIn = async (t, r) => {
      let data = JSON.stringify({
        "token": t,
        "refresh": r
      });      
      let res = await api('POST', 'verify', data)
      console.log(res.data)
    }
    checkLoggedIn(getJwtToken(), getRefreshToken())

    useEffect(() => {
        if (!LoggedIn){
           return navigate("/login")
        }
     },[LoggedIn, navigate])
  return (
    <Fragment>
        <div className="admin">
            <h3>admin</h3>
        </div>
    </Fragment>
  )
}

export default Admin