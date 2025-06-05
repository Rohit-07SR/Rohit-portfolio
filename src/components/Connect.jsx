import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquareFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faBasketball, faBagShopping } from '@fortawesome/free-solid-svg-icons'

const Connect = () => {
    return (
        <div className="container">
                    <div className="row">
                        <div className="col-md-6 text-white p-3">
                            <div className="connect">
                            <h2>Connect with me:</h2>
                            <p>Satisfied with me? Please contact me</p>
                            <div className="icons">
                                <FontAwesomeIcon icon={faSquareFacebook} />
                                <FontAwesomeIcon icon={faInstagram} />
                                <FontAwesomeIcon icon={faBasketball} />
                                <FontAwesomeIcon icon={faBagShopping} />
                            </div>
                        </div>
                        </div>
                        <div className="col-md-6">
                            <div class="frm" >
                                <form className='forminput'>
                                    <input type="text" id="fname" name="fname" placeholder='Name' /><br />
                                    <input type="email" id="mail" name="mail" placeholder='Email' /><br />
                                    <input className='msg' type="textbox" id="message" name="message" placeholder='Message' /><br />
                                    <input className='sub' type="submit" value="Save" />
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
    );
};

export default Connect;
