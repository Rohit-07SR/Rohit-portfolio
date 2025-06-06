import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithubSquare, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faSquareEnvelope } from '@fortawesome/free-solid-svg-icons'

const Footer = () => {
    return (

        <div className="container">
            <div className="row ">
                <div className="col-md-12 text-white foot">
                    <p>Fullstack Developer</p>
                    <p>UI Designer</p>
                    <p>© Rohit S</p>
                    <p>Data Analyst</p>
                    <p>Designed by @ernestechie</p>
                </div>
                <div className="col-md-12 ">
                    <div className="footicons">
                        <a href="https://www.linkedin.com/in/rohit-s-b5b009342/" target="_blank" rel="noopener noreferrer">  <FontAwesomeIcon icon={faLinkedin} /> </a>
                        <a href="https://www.instagram.com/rohit_07_29/profilecard/?igsh=MWFlNjBxbzNxNHYyMQ==" target="_blank" rel="noopener noreferrer"> <FontAwesomeIcon icon={faInstagram} /></a>
                        <a href="https://github.com/Rohit-07SR" target="_blank" rel="noopener noreferrer"> <FontAwesomeIcon icon={faGithubSquare} /></a>
                        <a href="mailto:rohitishandsome07@gmail.com" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faSquareEnvelope} /></a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
