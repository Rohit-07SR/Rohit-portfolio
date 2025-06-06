import React, { useRef } from 'react';
import {Link} from 'react-scroll';
// import About from './About';
// import Experience from './Experience';
// import Myprojects from './Myprojects';
// import Connect from './Connect';

const Topnav = () => {
  const homeRef = useRef(null)
  const aboutmeRef = useRef(null)
  const proRef = useRef(null)
  const contactRef = useRef(null)

  const scrolls = (ref) => {
    ref.Current?.scrolls({ behavior: "smooth" })
  }

  return (
    <>
      <nav className="navbar navbar-expand-lg clr fixed-top">
        <div className="container">
          <a className="navbar-brand name" href="#">Rohit S</a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon border"></span>
          </button>
          <div className="collapse navbar-collapse topclass" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item nav-link" >
                <Link to="about" spy={true} smooth={true} offset={-150} duration={100} onClick={() => { scrolls(homeRef) }}>Home</Link>
              </li>
              <li className="nav-item nav-link" >
               <Link to="experience" spy={true} smooth={true} offset={-100} duration={100} onClick={() => { scrolls(aboutmeRef) }}>About Me</Link> 
              </li>
              <li className="nav-item nav-link" >
                <Link to="myprojects" spy={true} smooth={true} offset={-200} duration={100} onClick={() => { scrolls(proRef) }}>Projects</Link>
              </li>
              <li className="nav-item nav-link" >
                <Link to="connect" spy={true} smooth={true} offset={-150} duration={100} onClick={() => { scrolls(contactRef) }}>Contact</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      
    </>
  );
};

export default Topnav;
