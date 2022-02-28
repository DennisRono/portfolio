import React from 'react'
import Landing from './components/Landing'
import useLocalStorage from 'use-local-storage'
import CookieConsent from "react-cookie-consent"

function App() {
    const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const [theme, setTheme] = useLocalStorage('theme', defaultDark ? 'dark' : 'white');

    const switchTheme = (theme) => {
        setTheme(theme)
      }
    return ( 
        <div className = "App" data-theme={theme} >
            <div className="themeControls">
                <img src={} onClick={()=>{switchTheme('white'); window.scrollTo(0, 0);}} className="lightMode" />
                <button onClick={()=>{switchTheme('whiteblue'); window.scrollTo(0, 0);}}></button>
                <img src={} onClick={()=>{switchTheme('dark'); window.scrollTo(0, 0);}} className="darkMode" />
            </div>
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