import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithubSquare, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faSquareEnvelope } from '@fortawesome/free-solid-svg-icons'
import Swal from 'sweetalert2';


const Connect = () => {

    const onSubmit = async (event) => {
        event.preventDefault();
        const url = "https://script.google.com/macros/s/AKfycbyoGF8OG0VO0SRixnOB5ATnl3N7gXb5l6Aouc_uHuPAuue1rY7oqxmXlpdb0_-yMolk7w/exec";

        try {
            const response = await fetch(url, {
                method: "POST",
                headers: { "Content-Type": "application/x-www-form-urlencoded" },
                body: `Name=${event.target.name.value}&Email=${event.target.email.value}&Message=${event.target.message.value}`
            });

            const data = await response.text();

            Swal.fire({
                icon: 'success',
                title: 'Message Sent!',
                text: data,
            });

            event.target.reset();

        } catch (error) {
            console.error("Error:", error);

            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Something went wrong. Please try again later!',
            });
        }
    };

    return (
        <div className="container cnct" id='connect'>
            <div className="row">
                <div className="col-md-6 text-white p-3">
                    <div className="connect">
                        <h2>Connect with me:</h2>
                        <p>Satisfied with me? Please contact me</p>
                        <div className="icons">
                            <a href="https://www.linkedin.com/in/rohit-s-b5b009342/" target="_blank" rel="noopener noreferrer">  <FontAwesomeIcon icon={faLinkedin} /> </a>
                            <a href="https://www.instagram.com/rohit_07_29/profilecard/?igsh=MWFlNjBxbzNxNHYyMQ==" target="_blank" rel="noopener noreferrer"> <FontAwesomeIcon icon={faInstagram} /></a>
                            <a href="https://github.com/Rohit-07SR" target="_blank" rel="noopener noreferrer"> <FontAwesomeIcon icon={faGithubSquare} /></a>
                            <a href="mailto:rohitishandsome07@gmail.com" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faSquareEnvelope} /></a>
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <div class="frm" >
                        <form className='forminput' onSubmit={onSubmit}>
                            <input required type="text" id="fname" name="name" placeholder='Name' /><br />
                            <input required type="email" id="mail" name="email" placeholder='Email' /><br />
                            <input required className='msg' type="textbox" id="message" name="message" placeholder='Message' /><br />
                            <input className='sub' type="submit" value="Send" />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Connect;
