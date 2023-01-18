import React, { Fragment, useEffect, useState } from 'react'
import '../styles/css/admin.css'
import { useNavigate } from "react-router-dom";
import { getJwtToken, getRefreshToken } from '../includes/session'


const Admin = () => {
    let navigate = useNavigate();
    let [LoggedIn, setLoggedIn] = useState(false)

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