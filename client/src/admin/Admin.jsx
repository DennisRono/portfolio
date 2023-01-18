import React, { Fragment, useEffect, useState } from 'react'
import '../styles/css/admin.css'
import { useNavigate } from "react-router-dom";
import { backend, getJwtToken, getRefreshToken } from '../includes/session'
import axios from "axios"


const Admin = () => {
    let navigate = useNavigate();
    let [LoggedIn, setLoggedIn] = useState(false)

    //verify jwt
    const checkLoggedIn = async (t, r) => {
      let data = JSON.stringify({
        "token": t,
        "refresh": r
      });      
      let config = {
        method: 'POST',
        url: backend()+'verify',
        headers: { 
          'Content-Type': 'application/json'
        },
        data : data
      };
      
      axios(config)
      .then((response) => {
        console.log(JSON.stringify(response.data))
        console.log(getJwtToken(), getRefreshToken())
      })
      .catch((error) => {
        console.log(error);
      });
    }
    checkLoggedIn(getJwtToken(), getRefreshToken())

    useEffect(() => {
        if (!LoggedIn){
           return navigate("/login");
        }
     },[LoggedIn, navigate]);
  return (
    <Fragment>
        <div className="admin">
            <h3>admin</h3>
        </div>
    </Fragment>
  )
}

export default Admin