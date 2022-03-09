import React from 'react'
import Landing from '../components/Landing'
import Background from '../components/Background'
import Skills from '../components/Skills'
import Experience from '../components/Experience'
import Projects from '../components/Projects'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div>
        <Landing />
        <Background />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
        <Footer />
    </div>
  )
}

export default Home