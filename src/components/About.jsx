import React from 'react'
import profilepic from '../image/man.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faEye } from '@fortawesome/free-solid-svg-icons';

const About = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6  ">
          <div className="leftcontent">
            <h2>Hello, I'm</h2>
            <h2 className="myname">Rohit S</h2>
            <p>Fullstack developer and create seamless web experiences for end-users.</p>
            <div className="col-md-12 buttonss">
              <button className="btns abt border">
                About me <FontAwesomeIcon icon={faUser} className="ms-2 text-white" />
              </button>

              <button className="btns pro border">
                Projects <FontAwesomeIcon icon={faEye} className="ms-2 text-white" />
              </button>
            </div>
          </div>
        </div>
        <div className="col-md-6 right">
          <div className="rightimage">
            <img src={profilepic} alt="Profile"/>
          </div>
        </div>
      </div>
    </div>

  )
}

export default About