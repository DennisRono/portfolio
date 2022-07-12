import React, { useState, Fragment } from 'react'
import '../styles/css/downloadbtn.css'
import { saveAs } from "file-saver";

const Downloadb = () => {
    const[animate, setAnimate] = useState(false)
    const initiateDownload = (e) => {
        setTimeout(function(){  
            saveAs(
                "https://denniskibet.com/docs/resume.pdf",
                "dennis-resume.pdf"
            );
        },3000);
    };
    return (
        <Fragment>
            <button
                className={(animate)?"resumedownloadbtn animate success":"resumedownloadbtn"}
                onClick={()=>{
                        setAnimate(true)
                        initiateDownload()
                    }
                }
            >Resume</button>
        </Fragment>
    )
}

export default Downloadb