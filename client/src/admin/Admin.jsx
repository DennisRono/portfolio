import React, { Fragment, useEffect, useState } from 'react'
import '../styles/css/admin.css'
import { useNavigate } from "react-router-dom"
import { setJwtToken, getJwtToken, getRefreshToken } from '../includes/session'
import { api } from '../api/axios'
import Layout from './components/Layout'


const Admin = () => {
    let navigate = useNavigate()
    //verify jwt
    const checkLoggedIn = async (t, r) => {
      let data = JSON.stringify({
        "token": t,
        "refresh": r
      });      
      let res = await api('POST', 'verify', data, {'Content-Type': 'application/json', authToken:t, refreshToken:r})
      console.log(res.data);
      setJwtToken(res.headers.authtoken)
      if(!(res.data.type==='success')){
        return navigate("/login")
      }
    }
    checkLoggedIn(getJwtToken(), getRefreshToken())
  return (
    <Fragment>
        <div className="admin">
            <Layout/>
        </div>
    </Fragment>
  )
}

export default Admin