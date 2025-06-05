import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faSquareFacebook,
    faInstagram,
} from '@fortawesome/free-brands-svg-icons';
import {
    faBasketball,
    faBagShopping,
} from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
    return (

        <div className="container">
            <div className="row ">
                <div className="col-md-12 text-white foot">
                    <p>Fullstack Developer</p>
                    <p>UI Designer</p>
                    <p>© 2022 Jayjay Dinero Dinero</p>
                    <p>Data Analyst</p>
                    <p>Designed by @ernestechie</p>
                </div>
                <div className="col-md-12 ">
                    <div className="footicons">
                        <FontAwesomeIcon icon={faSquareFacebook} />
                        <FontAwesomeIcon icon={faInstagram} />
                        <FontAwesomeIcon icon={faBasketball} />
                        <FontAwesomeIcon icon={faBagShopping} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
