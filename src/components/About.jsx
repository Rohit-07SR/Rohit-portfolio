import React, { useRef } from 'react'
import profilepic from '../image/myclrbg.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faEye } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-scroll';
const About = () => {
  const meRef = useRef(null)
  const myproRef = useRef(null)

  const scrolling = (ref) => {
    ref.Current?.scrolling({ behavior: "smooth" })
  }

  return (
    <div className="container one" id='about'>
      <div className="row">
        <div className="col-md-6  ">
          <div className="leftcontent">
            <h2>Hello, I'm</h2>
            <h2 className="myname">Rohit S</h2>
            <p>Fullstack developer and create seamless web experiences for end-users.</p>
            <div className="col-md-12 buttonss">
              <button className="btns abt border">
                <Link to="experience" spy={true} smooth={true} offset={-175} duration={100} onClick={() => { scrolling(meRef) }}>About me</Link>
                <FontAwesomeIcon icon={faUser} className="ms-2 text-white iconsize" />
              </button>
              <button className="btns pro border">
                <Link to="myprojects" spy={true} smooth={true} offset={-250} duration={100} onClick={() => { scrolling(myproRef) }}>Projects</Link>
                <FontAwesomeIcon icon={faEye} className="ms-2 text-white iconsize" />
              </button>
            </div>
          </div>
        </div>
        <div className="col-md-6 right">
          <div className="rightimage">
            <img src={profilepic} alt="Profile" />
          </div>
        </div>
      </div>
    </div>

  )
}

export default About