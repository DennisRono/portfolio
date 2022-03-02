import React from 'react'
import Landing from './components/Landing'
import Preloader from './components/Preloader'
import useLocalStorage from 'use-local-storage'
import CookieConsent from "react-cookie-consent"
import { ReactComponent as Sun } from './images/sun.svg'
import { ReactComponent as Moon } from './images/moon.svg'
import Background from './components/Background'
import Skills from './components/Skills'
import Experience from './components/Experience'

function App() {
    const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const [theme, setTheme] = useLocalStorage('theme', defaultDark ? 'dark' : 'light');
    const toggleTheme = () => {
        if(theme === 'dark'){
            setTheme('light')
        } else if(theme === 'light') {
            setTheme('dark')
        }
    }
    //page pre loader
    document.onreadystatechange = function() {
        if (document.readyState !== "complete") {
            document.querySelector(".contents").style.visibility = "hidden";
            document.querySelector(".preloader").style.visibility = "visible";
        } else {
            document.querySelector(".contents").style.display = "none";
            setTimeout(() => {
                document.querySelector(".preloader").style.display = "none";
                document.querySelector(".contents").style.visibility = "visible";
                document.querySelector(".contents").style.display = "unset";
            }, 6000);
        }
    };
    return ( 
        <div className = "App" data-theme={theme}>
            {/* preloader */}
            <div className="preloader">
                <Preloader />
            </div>
            {/* contents */}
            <div className="contents">
                <div className="themeControls">
                    <Sun className="lightMode" />
                    <div onClick={()=>{toggleTheme('light'); window.scrollTo(0, 0);}} className="themeToggle"><span className="toggleButton"></span></div>
                    <Moon className="darkMode" />
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
                <Background />
                <Skills />
                <Experience />
            </div>
        </div>
    );
}

export default App;