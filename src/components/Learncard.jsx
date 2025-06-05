import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPenRuler,
  faWindowMaximize,
  faAddressCard,
} from '@fortawesome/free-solid-svg-icons';
import { faAndroid } from '@fortawesome/free-brands-svg-icons';

const cards = [
  { icon: faPenRuler, label: 'UI & UX DESIGNING' },
  { icon: faWindowMaximize, label: 'WEB DEVELOPMENT' },
  { icon: faAndroid, label: 'MOBILE DEVELOPMENT' },
  { icon: faAddressCard, label: 'WEB SCRAPING WITH PYTHON' },
];

const Learncard = () => {
  return (
    <div className="container py-5 crdclr">
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4 g-4">
        {cards.map((card, index) => (
          <div className="col" key={index}>
            <div className={`card h-100 text-center ${index === 0 ? 'vlt' : 'grey'}`}>
              <div className="card-body d-flex flex-column justify-content-center align-items-center txt">
                <FontAwesomeIcon icon={card.icon} size="2x" className="mb-3 text-white" />
                <p className="card-text text-white">{card.label}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Learncard;
