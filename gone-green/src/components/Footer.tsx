import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import "./footer.css"

const Footer = () => {
    return (
        <div id='custom-footer'>
        <p className='footer-mobile'>Thanks for visiting us!</p>
        <div className='footer-content'>
            <p>&copy; 2024 All rights reserved</p>
            <p className='footer-screen'>Thanks for visiting us!</p>
            <div className='footer-icons'>
                {/* Connect with us: */}
                <a href="https://www.facebook.com" target="_blank">
                    <FontAwesomeIcon icon={faFacebook} className='footer-icon' />
                </a>
                <a href="https://www.instagram.com" target="_blank">
                    <FontAwesomeIcon icon={faInstagram} className='footer-icon' />
                </a>
                <a href="https://www.linkedin.com" target="_blank">
                    <FontAwesomeIcon icon={faLinkedin} className='footer-icon' />
                </a>
            </div>
        </div>
    </div>
    );
};

export default Footer;