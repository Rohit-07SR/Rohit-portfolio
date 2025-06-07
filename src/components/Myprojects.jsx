import React from 'react';
import locationimg from '../image/weather.png';
import mediaimg from '../image/socialmediaicons.png';
import advimg from '../image/advocate.png';

const projects = [
  {
    title: 'WEATHER',
    img: locationimg,
    desc: 'A live weather app for finding realtime weather of the cities.',
    livelink: 'https://weather-app-gamma-azure-68.vercel.app/',
    gitlink: 'https://github.com/Rohit-07SR/Weather-App',
  },
  {
    title: 'SIMPLE SOCIAL MEDIA APP',
    img: mediaimg,
    desc: 'A social media app where you can add, view, update and delete posts.',
    livelink: 'https://media-app-rust.vercel.app/',
    gitlink: 'https://github.com/Rohit-07SR/Media-App',
  },
  {
    title: 'NOTARY',
    img: advimg,
    desc: 'You can book an appointment with your advocate. (Development under progress...)',
    livelink:'https://notary-peach.vercel.app/',
    gitlink:'https://github.com/Rohit-07SR/notary',
  },
];

const Myprojects = () => {
  return (
    <div className="container py-5 claspro" id='myprojects'>
      <div className="row justify-content-center">
        {projects.map((proj, i) => (
          <div className="col-md-6 col-lg-4 mb-4" key={i}>
            <div className="card h-100 bgclr shadow-sm">
              <img src={proj.img} className="card-img-top imsz" alt={proj.title} />
              <div className="card-body d-flex flex-column justify-content-between">
                <h5 className="card-title cdt">{proj.title}</h5>
                <p className="card-text cdtxt">{proj.desc}</p>
                <div className="mt-auto d-flex gap-2">
                  <a href={proj.livelink} className="btn btn1" target="_blank" rel="noopener noreferrer">View Live</a>
                  <a href={proj.gitlink} className="btn btn2 btn-outline" target="_blank" rel="noopener noreferrer">GitHub Repo</a>
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
