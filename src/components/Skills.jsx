import React from 'react'
import '../styles/css/skills.css'
import TypeIt from "typeit-react"



const Skills = () => {

    let playcode = ["/* Contact me let's talk */", "var", "object", "=", "{", "name", ":", "'Dennis'",",", "age", ":", "20,", "gender", ":", "'male',", "location", ":", "'Kenya',", "skills", ":", "[", "'Javascript',", "'HTML',", "'CSS',", "'Java',", "'C',", "'React.js',", "'php']", "};", "var", "happy", "=", "'Check", "out", "my", "works';", "Console",".","log","(","happy",")",";"];
                                                
    const randColor = () =>  {
        return "#" + Math.floor(Math.random()*16777215).toString(16).padStart(6, '0').toUpperCase();
    }

    const SuperStrong = () => {
        return (
            <div style={{ fontSize: "19px" }} className="playdivarea">
                <span style={{ color: randColor() }}>{playcode[0]}</span><br/>
                <span style={{ color: randColor() }}>{playcode[1]}</span>{" "}<span style={{ color: randColor() }}>{playcode[2]}</span>{" "}<span style={{ color: randColor() }}>{playcode[3]}</span>{" "}<span style={{ color: randColor() }}>{playcode[4]}</span><br/>
                <span style={{ marginLeft: '20px', color: randColor() }}>{playcode[5]}</span>{" "}<span style={{ color: randColor() }}>{playcode[6]}</span>{" "}<span style={{ color: randColor() }}>{playcode[7]}</span>{" "}<span style={{ color: randColor() }}>{playcode[8]}</span><br/>
                <span style={{ marginLeft: '20px', color: randColor() }}>{playcode[9]}</span>{" "}<span style={{ color: randColor() }}>{playcode[10]}</span>{" "}<span style={{ color: randColor() }}>{playcode[11]}</span><br/>
                <span style={{ marginLeft: '20px', color: randColor() }}>{playcode[12]}</span>{" "}<span style={{ color: randColor() }}>{playcode[13]}</span>{" "}<span style={{ color: randColor() }}>{playcode[14]}</span><br/>
                <span style={{ marginLeft: '20px', color: randColor() }}>{playcode[15]}</span>{" "}<span style={{ color: randColor() }}>{playcode[16]}</span>{" "}<span style={{ color: randColor() }}>{playcode[17]}</span><br/>
                <span style={{ marginLeft: '20px', color: randColor() }}>{playcode[18]}</span>{" "}<span style={{ color: randColor() }}>{playcode[19]}</span>{" "}<span style={{ color: randColor() }}>{playcode[20]}</span><br/>
                <span style={{ marginLeft: '50px', color: randColor() }}>{playcode[21]}</span>{" "}<span style={{ color: randColor() }}>{playcode[22]}</span><br/>
                <span style={{ marginLeft: '50px', color: randColor() }}>{playcode[23]}</span>{" "}<span style={{ color: randColor() }}>{playcode[24]}</span><br/>
                <span style={{ marginLeft: '50px', color: randColor() }}>{playcode[25]}</span>{" "}<span style={{ color: randColor() }}>{playcode[26]}</span>{" "}<span style={{ color: randColor() }}>{playcode[27]}</span><br/>
                <span style={{ color: randColor() }}>{playcode[28]}</span><br/><br/>
                <span style={{ color: randColor() }}>{playcode[29]}</span>{" "}<span style={{ color: randColor() }}>{playcode[30]}</span>{" "}<span style={{ color: randColor() }}>{playcode[31]}</span>{" "}<span style={{ color: randColor() }}>{playcode[32]}</span>{" "}<span style={{ color: randColor() }}>{playcode[33]}</span>{" "}<span style={{ color: randColor() }}>{playcode[34]}</span>{" "}<span style={{ color: randColor() }}>{playcode[35]}</span><br/><br/>
                <span style={{ color: randColor() }}>{playcode[36]}</span>{" "}<span style={{ color: randColor() }}>{playcode[37]}</span>{" "}<span style={{ color: randColor() }}>{playcode[38]}</span>{" "}<span style={{ color: randColor() }}>{playcode[39]}</span>{" "}<span style={{ color: randColor() }}>{playcode[40]}</span>{" "}<span style={{ color: randColor() }}>{playcode[41]}</span>{" "}<span style={{ color: randColor() }}>{playcode[42]}</span>
            </div>
        );
    };

  return (
    <div className="skills">
        <div className="swrapper">
            <div className="scontainer">
                <div className="sflex">
                    <div className="sTexts">
                        <h2 className="sTitle"><span className="sCounter">02.</span> &nbsp;&nbsp;&nbsp;&nbsp; Technologies I use</h2>
                        <br/>
                        <p className="skillsTexts">
                            Here are a few technologies I've been working with recently:
                        </p>
                        <nav className="snav">
                            <ul>
                                <h2>Languages</h2>
                                <li>php</li>
                                <li>Node.js</li>
                                <li>Java</li>
                                <li>HTML & CSS</li>
                                <li>Python</li>
                                <li>Javascript (ES6+)</li>
                            </ul>
                            <ul>
                                <h2>Frameworks</h2>
                                <li>React.js</li>
                                <li>Three.js</li>
                                <li>TensorFlow</li>                                
                                <li>Electron</li>                                
                                <li>Django</li>                               
                                <li>Jekyll</li>                               
                            </ul>
                            <ul>
                                <h2>Design</h2>
                                <li>Adobe XD</li>
                                <li>Figma</li>
                                <li>Sketch</li>                                
                                <li>Webflow</li>                              
                            </ul>
                        </nav>
                    </div>
                    <div className="sImages">
                        <div className="codeplay" data-aos="flip-right">
                            <div className="top-left-bg"></div>
                            <div className="bottom-right-bg"></div>
                            <div className="img-center-block">
                                <div className="img-wrapper">
                                    <div className="pb-mobi" style={{width: "100%", paddingBottom: "95.7916%"}}></div>
                                    <div className="codeplay-area">
                                        <TypeIt options={{ startDelay: 900 }}>
                                            <SuperStrong>Super strong text.</SuperStrong>
                                        </TypeIt>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Skills