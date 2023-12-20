import React from 'react';
import "./ContactUs.css";
import Button from './Button';

const ContactUs = () => {
    return (
        <div className='contact-us'>

            <div className="main-box">
                <div className="header-container">
                    <h3>Get In touch With Us</h3>
                    <div className='contactContainer'>
                        <div className="inner-box">
                            <h2>Head Office</h2>
                            <p>Kigali - Rwanda</p>
                        </div>

                        <div className="inner-box">
                            <h2>Call Us</h2>
                            <p>+25078888888</p>
                        </div>

                        <div className="inner-box">
                            <h2>Email Us</h2>
                            <p>mprosp3r@gmail.com.</p>
                            <p>slvshimwa@gmail.com.</p>
                        </div>
                    </div>
                    <div className="extended-box">
                        <h2>Sign Up for Our Newsletter</h2>
                        <Button />
                        <Button label="Subscribe"/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;
