import React from 'react';
import "./ContactUs.css";
import Button from './Button';

const ContactUs = () => {
    return (
        <div className='contact-us'>

            <div className="getInTouch-box">
                <h3>Get In touch With Us</h3>
                <div className='contactContainer'>
                    <div className="inner-box">
                        <div className='circle'></div>
                        <div>
                            <h2>Head Office</h2>
                            <p>Kigali - Rwanda</p>
                        </div>
                    </div>

                    <div className="inner-box">
                        <div className='circle'></div>

                        <div>
                            <h2>Call Us</h2>
                            <p>+250788555765</p>
                        </div>
                    </div>

                    <div className="inner-box">
                        <div className='circle'></div>

                        <div>
                            <h2>Email Us</h2>
                            <p>slvshimwa@gmail.com.</p>
                        </div>
                    </div>
                </div>

            </div>

            <div className="newsletter-box">
                <h2>Sign Up for Our Newsletter</h2>
                <div className='input-box'>
                    <input className='newsletter-input' placeholder='email'></input>
                    <button >Subscribe</button>
                </div>

            </div>
        </div>
    );
};

export default ContactUs;
