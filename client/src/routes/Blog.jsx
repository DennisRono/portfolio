import React, { Fragment } from 'react'
import '../styles/css/blog.css'
import agility from '../images/agility.png'
import Header from '../components/Header'
import Footer from '../components/Footer'

const Blog = () => {
  return (
    <Fragment>
      <Header/>
          <section class="blog-sec-top">
        <h1>My Blog</h1>
        <p>In a software-defined world, the Simform Blog is your place to navigate through the renaissance in technology. Our publication aims to provide you the full scoop on the groundbreaking research, thought-leadership, and perspective on tech innovation in the world of software development, with a deep context to help tech leaders make intelligent decisions.</p>
    </section>
    <section class="blog-landing">
        <div class="blog-landing-wrapper">
            <div class="spot-blog">
                <div class="spot-image">
                    <img src={agility} alt=""/>
                </div>
                <div class="spot-texts">
                    <span class="spot-category">Web Development</span> <span class="spot-date">june 22 2022</span>
                    <h2><a href="read.html">7 Frontend JavaScript Frameworks Loved by Developers in 2022</a></h2>
                    <p><a href="read.html">is undoubtedly quite popular in building interactive and multimedia content. In 2021, it completed the ninth year in a row as the most commonly used programming language. A JavaScript frontend framework is a collection of JavaScript code libraries that helps developers with standard programming features and tasks. In addition, it offers reusable code components, a universal development environment, compilers, toolsets, code libraries, APIs, etc., to facilitate the app.</a></p>
                    <div class="spot-author">
                        <img src={agility} alt=""/>
                        <div class="spot-author-name">
                            <h4>Dennis Kibet</h4>
                            <p>CEO</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section class="blogs-showcase">
        <div class="bloghighHeader">
            <div class="blogsFileters">
                <div class="filter activeFilter">
                    <p>All</p>
                </div>
                <div class="filter">
                    <p>nullAPI</p>
                </div>
                <div class="filter">
                    <p>Nodejs</p>
                </div>
                <div class="filter">
                    <p>php</p>
                </div>
                <div class="filter">
                    <p>Python</p>
                </div>
                <div class="filter">
                    <p>Ruby</p>
                </div>
            </div>
            <div class="viewIcon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" data-supported-dps="16x16" fill="currentColor" width="16" height="16" focusable="false">
                    <path d="M15 2v2H6.72a2 2 0 01-3.44 0H1V2h2.28a2 2 0 013.44 0H15zm-4 4a2 2 0 00-1.72 1H1v2h8.28a2 2 0 003.45 0H15V7h-2.28A2 2 0 0011 6zm-6 5a2 2 0 00-1.72 1H1v2h2.28a2 2 0 003.45 0H15v-2H6.72A2 2 0 005 11z"></path>
                </svg>
            </div>
        </div>
        <div class="highflex">
            <div class="highblogcard">
                <div class="bloghighImage">
                    <img src={agility} alt=""/>
                </div>
                <div class="bloghighTitle">
                    <a href="read.html">
                        <h2>Wolf3D & Rovio Talking About 3D Avatars and Virtual Identities in Games and Metaverses</h2>
                    </a>
                    <a href="read.html">
                        <p>Building your business’s web presence has become a mandate in today’s world of scrolling social media and often landing straight on a shopping website. A professional web application helps your business achieve industry standards and engage your customers with the company’s offerings.</p>
                    </a>
                </div>
                <div class="bloghighInfo">
                    <p>April 15, 2022 . 5min read</p>
                </div>
            </div>
        </div>
    </section>
    
    <section class="secNewsletter" id="newsletter">
        <div class="newsletter">
            <div class="newslettercontainer">
                <div class="subnewsletter">
                    <div class="subnewsFlex">
                        <div class="subNewstexts">
                            <h3 class="subNewstitle">Subscribe to our newsletter</h3>
                            <p class="subNewsTextsp">stay upto date with our latest blogs and news updates</p>
                        </div>
                        <div class="subnewsform">
                            <form action="" class="subNewsFormf">
                                <div class="subinputsFlex">
                                    <input type="text" class="subnewsinput" placeholder="your e-mail address"/>
                                    <input type="submit" value="Subscribe" class="subnewsButton"/>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <Footer/>
    </Fragment>
  )
}

export default Blog