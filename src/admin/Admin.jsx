import React, { Fragment, useEffect } from 'react'
import '../styles/css/admin.css'
import { useNavigate } from "react-router-dom";


const Admin = () => {
    let navigate = useNavigate();
    let LoggedIn = false

    useEffect(() => {
        if (LoggedIn){
           return navigate("/");
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