import React, { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './routes/Home'
import Stats from './routes/Stats'
import Contact from './routes/Contact'
import NotFound from './routes/NotFound'
import Preloader from './components/Preloader'
import useLocalStorage from 'use-local-storage'
import CookieConsent from "react-cookie-consent"
import { ReactComponent as Sun } from './images/sun.svg'
import { ReactComponent as Moon } from './images/moon.svg'


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
    //is First Load
    const [isFirst, setIsfirst] = useLocalStorage('isFirst', 'yes');
    const [preloader, setPreloader] = useState(false)

    //page pre loader
    document.onreadystatechange = function() {
        if (window.location.pathname === "/" && isFirst === 'yes'){
            setIsfirst('no')
            if (document.readyState !== "complete") {
                setPreloader(true)
            } else {
                setPreloader(true)
                setTimeout(() => {
                    setPreloader(false)
                }, 6000);
            }
        } else {
            setPreloader(false)
        }
    };
    return ( 
        <div className = "App" data-theme={theme}>
            {/* preloader */}
            <div className={(preloader)?"preloader":"hidepreloader"}>
                <Preloader />
            </div>
            {/* contents */}
            <div className={(preloader)?"hidecontents":"contents"}>
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
                <Router>
                    <Routes>
                    <Route path="/" element={<Home />}></Route>
                    <Route path="/stats" element={<Stats />}></Route>
                    <Route path="/contact" element={<Contact />}></Route>
                    <Route path="*" element={<NotFound />}></Route>
                    </Routes>
                </Router>
            </div>
        </div>
    );
}

export default App;