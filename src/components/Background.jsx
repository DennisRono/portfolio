import React from 'react'
import '../styles/css/background.css'
import Dennis from '../images/about-image.png'

const background = () => {
  return (
    <div className="background">
        <div className="bwrapper">
            <div className="bcontainer">
                <div className="bflex">
                    <div className="dennisImage">
                        <div className="img-blk-wrapper">
                            <div className="img-blk">
                                <img src={Dennis} alt="" />     
                            </div>
                        </div>
                    </div>
                    <div className="bTexts">
                        <h2 className="btTitle"><span className="secCounter">1.</span> Background <span className="line"></span></h2>
                        <p className="backtexts">
                        Hello, I am Dennis. I am currently a student at Machackos University Kenya. I love building things for the internet. My native home place is Kericho Kenya. My intrest in computers started back when I was in High School when I did a science fair project on web develpment. As simple as the project was it taught me alot on how the internet works and moreover gave me a little Experience on HTML & CSS.
                        <br /><br />
                        currently i focus on finding reliable solutions for software issues. I am fluent in English and accustomed to working with cross-cultural, global terms.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default background