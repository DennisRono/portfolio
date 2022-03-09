import React from 'react'
import '../styles/css/downloadbtn.css'
import DownloadIcon from '@mui/icons-material/Download'
import DownloadDoneIcon from '@mui/icons-material/DownloadDone';
import { saveAs } from "file-saver";

const Downloadb = () => {
    const initiateDownload = () => {
        saveAs(
            "https://denniskibet.com/docs/resume.pdf",
            "dennis resume.pdf"
        );
    };
  return (
    <div className="thedownloadbutton">
        <div className='dbutton'>
        <input id='dbutton' type='checkbox' />
        <label  for='dbutton' style={{ position: "relative" }}>
            <div  onClick={()=>{initiateDownload()}} className='dbutton_inner q'>
            <DownloadIcon className="l pIcons" />
            <span className='t'>Resume</span>
            <span>
                <DownloadDoneIcon className='tick ion-checkmark-round' />
            </span>
            <div className='b_l_quad'>
                <div className='dbutton_spots'></div>
                <div className='dbutton_spots'></div>
                <div className='dbutton_spots'></div>
                <div className='dbutton_spots'></div>
                <div className='dbutton_spots'></div>
                <div className='dbutton_spots'></div>
                <div className='dbutton_spots'></div>
                <div className='dbutton_spots'></div>
                <div className='dbutton_spots'></div>
                <div className='dbutton_spots'></div>
                <div className='dbutton_spots'></div>
                <div className='dbutton_spots'></div>
                <div className='dbutton_spots'></div>
                <div className='dbutton_spots'></div>
                <div className='dbutton_spots'></div>
                <div className='dbutton_spots'></div>
                <div className='dbutton_spots'></div>
                <div className='dbutton_spots'></div>
                <div className='dbutton_spots'></div>
                <div className='dbutton_spots'></div>
                <div className='dbutton_spots'></div>
                <div className='dbutton_spots'></div>
                <div className='dbutton_spots'></div>
                <div className='dbutton_spots'></div>
                <div className='dbutton_spots'></div>
                <div className='dbutton_spots'></div>
                <div className='dbutton_spots'></div>
                <div className='dbutton_spots'></div>
                <div className='dbutton_spots'></div>
                <div className='dbutton_spots'></div>
                <div className='dbutton_spots'></div>
                <div className='dbutton_spots'></div>
                <div className='dbutton_spots'></div>
                <div className='dbutton_spots'></div>
                <div className='dbutton_spots'></div>
                <div className='dbutton_spots'></div>
                <div className='dbutton_spots'></div>
                <div className='dbutton_spots'></div>
                <div className='dbutton_spots'></div>
                <div className='dbutton_spots'></div>
                <div className='dbutton_spots'></div>
                <div className='dbutton_spots'></div>
                <div className='dbutton_spots'></div>
                <div className='dbutton_spots'></div>
                <div className='dbutton_spots'></div>
                <div className='dbutton_spots'></div>
                <div className='dbutton_spots'></div>
                <div className='dbutton_spots'></div>
                <div className='dbutton_spots'></div>
                <div className='dbutton_spots'></div>
                <div className='dbutton_spots'></div>
                <div className='dbutton_spots'></div>
            </div>
            </div>
        </label>
        </div>
    </div>
  )
}

export default Downloadb