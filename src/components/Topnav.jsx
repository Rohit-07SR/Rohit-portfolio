import React, { useRef } from 'react';
import About from './About';
import Experience from './Experience';
import Myprojects from './Myprojects';
import Connect from './Connect';

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
      <nav className="navbar navbar-expand-lg clr">
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
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse topclass" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item nav-link" onClick={() => { scrolls(homeRef) }}>
                Home
              </li>
              <li className="nav-item nav-link" onClick={() => { scrolls(aboutmeRef) }}>
                About Me
              </li>
              <li className="nav-item nav-link" onClick={() => { scrolls(proRef) }}>
                Projects
              </li>
              <li className="nav-item nav-link" onClick={() => { scrolls(contactRef) }}>
                Contact
              </li>
            </ul>
          </div>
        </div>
      </nav>
      
    </>
  );
};

export default Topnav;
