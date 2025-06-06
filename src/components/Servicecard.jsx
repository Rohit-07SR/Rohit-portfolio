import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPenRuler,
  faWindowMaximize,
  faCodeBranch,
  faPager,
} from '@fortawesome/free-solid-svg-icons';
import {
  faAndroid,
  faNodeJs,
} from '@fortawesome/free-brands-svg-icons';

const services = [
  {
    title: 'UI & UX DESIGNING',
    text: 'I design beautiful web interfaces with Figma and Adobe XD',
    icon: faPenRuler,
    style: 'cd135',
  },
  {
    title: 'WEB DEVELOPMENT',
    text: 'I create beautiful interfaces with HTML, CSS, JS, Angular, and ReactJS',
    icon: faWindowMaximize,
    style: 'cd246',
  },
  {
    title: 'MOBILE DEVELOPMENT',
    text: 'I have experience using Flutter and React Native',
    icon: faAndroid,
    style: 'cd135',
  },
  {
    title: 'VERSION CONTROL',
    text: 'I can use Git & Mercurial as version control tools effectively',
    icon: faCodeBranch,
    style: 'cd246',
  },
  {
    title: 'NPM AND NODEJS',
    text: 'I can build apps using Node JS and manage packages with NPM',
    icon: faNodeJs,
    style: 'cd135',
  },
  {
    title: 'WEB SCRAPING',
    text: 'I can collect and analyze data from the web using scraping tools',
    icon: faPager,
    style: 'cd246',
  },
];

const Servicecard = () => {
  return (
    <div className="seroffcard">
      <div className="container serviceoffered text-left py-4">
        <h5>The services I offer are:</h5>
      </div>

      <div className="container">
        <div className="row row-cols-1 row-cols-md-3 g-4 justify-content-center">
          {services.map((service, index) => (
            <div className="col d-flex justify-content-center" key={index}>
              <div
                className={`card ${service.style} text-center text-white shadow`}
                style={{ width: '343px', height: '300px' }}
              >
                <div className="card-body bdy d-flex flex-column justify-content-center align-items-center">
                  <FontAwesomeIcon icon={service.icon} size="4x" className="mb-3" />
                  <h5 className="card-title">{service.title}</h5>
                  <p className="card-text">{service.text}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Servicecard;
