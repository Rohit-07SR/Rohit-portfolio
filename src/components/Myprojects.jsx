import React from 'react';
import tinderimg from '../image/location.png';
import liveimg from '../image/live.png';
import vanimg from '../image/van.png';

const projects = [
  {
    title: 'TINDER',
    img: tinderimg,
    desc: 'A live Geolocation app for finding tweets and Twitter users around you.',
  },
  {
    title: 'LIVENTS',
    img: liveimg,
    desc: 'A video streaming app with live Geolocation, for streaming events.',
  },
  {
    title: 'MOOVE',
    img: vanimg,
    desc: 'Mobile app for booking instant pickup & dropoff across major cities.',
  },
];

const Myprojects = () => {
  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        {projects.map((proj, i) => (
          <div className="col-md-6 col-lg-4 mb-4" key={i}>
            <div className="card h-100 bgclr shadow-sm">
              <img src={proj.img} className="card-img-top imsz" alt={proj.title} />
              <div className="card-body d-flex flex-column justify-content-between">
                <h5 className="card-title cdt">{proj.title}</h5>
                <p className="card-text cdtxt">{proj.desc}</p>
                <div className="mt-auto d-flex gap-2">
                  <a href="#" className="btn btn1">View Live</a>
                  <a href="#" className="btn btn2 btn-outline">GitHub Repo</a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Myprojects;
