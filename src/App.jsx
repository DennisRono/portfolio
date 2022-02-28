import React from 'react'
import Landing from './components/Landing'
import useLocalStorage from 'use-local-storage'
import CookieConsent from "react-cookie-consent"
// import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
// import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';

function App() {
    const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const [theme, setTheme] = useLocalStorage('theme', defaultDark ? 'dark' : 'white');

    const switchTheme = (theme) => {
        setTheme(theme)
      }
    return ( 
        <div className = "App" data-theme={theme} >
            {/* <div className="themeControls">
                <LightModeOutlinedIcon onClick={()=>{switchTheme('white'); window.scrollTo(0, 0);}} className="LightModeOutlinedIcon" />
                <button onClick={()=>{switchTheme('whiteblue'); window.scrollTo(0, 0);}}></button>
                <DarkModeOutlinedIcon onClick={()=>{switchTheme('dark'); window.scrollTo(0, 0);}} className="DarkModeOutlinedIcon" />
            </div> */}
            <CookieConsent
            disableStyles={true}
            location="bottom"
            buttonText="Okay"
            cookieName="denniskibet"
            buttonClasses="button"
            containerClasses="cookieConsent"
            expires={150}
            >
                <p className="cookieText">We use cookies to improve your browsing experience.</p>
            </CookieConsent>
            <Landing />
        </div>
    );
}

export default App;