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
    const toggleTheme = () => {
        if(theme === 'dark'){
            setTheme('white')
            document.querySelector('.toggleButton').style.left="unset";
            document.querySelector('.toggleButton').style.right="0";
        } else {
            setTheme('dark')
            document.querySelector('.toggleButton').style.left="0";
            document.querySelector('.toggleButton').style.right="unset";
        }
    }
    return ( 
        <div className = "App" data-theme={theme}>
            <div className="themeControls">
                <Sun onClick={()=>{switchTheme('light'); window.scrollTo(0, 0);}} className="lightMode" />
                <div onClick={()=>{toggleTheme('light'); window.scrollTo(0, 0);}} className="themeToggle"><span className="toggleButton"></span></div>
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