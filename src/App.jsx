import React from 'react'
import Landing from './components/Landing'
import useLocalStorage from 'use-local-storage'
import CookieConsent from "react-cookie-consent"
import { ReactComponent as Sun } from './images/sun.svg'
import { ReactComponent as Moon } from './images/moon.svg'

function App() {
    const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const [theme, setTheme] = useLocalStorage('theme', defaultDark ? 'dark' : 'light');

    const switchTheme = (theme) => {
        setTheme(theme)
      }
    return ( 
        <div className = "App" data-theme={theme}>
            <div className="themeControls">
                <Sun onClick={()=>{switchTheme('light'); window.scrollTo(0, 0);}} className="lightMode" />
                <Moon onClick={()=>{switchTheme('dark'); window.scrollTo(0, 0);}} className="darkMode" />
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