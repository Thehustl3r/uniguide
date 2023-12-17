import React from 'react';
import "./ContactUs";

const ContactUs = () => {
    return (

        <div className='contact-us'>

            <div className="main-box">

                <h3>Get In touch With Us</h3>
                <div className="inner-box">
                    <h2>Inner Box 1</h2>
                    <p>This is the content of the first inner box.</p>
                </div>


                <div className="inner-box">
                    <h2>Inner Box 2</h2>
                    <p>This is the content of the second inner box.</p>
                </div>

                <div className="inner-box">
                    <h2>Inner Box 3</h2>
                    <p>This is the content of the third inner box.</p>
                </div>

                <div className="extended-box">
                    <h2>Extended Box</h2>
                    <p>This box extends outside of the main box.</p>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;