import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section1">
            <div className='f-element'>
            <h3>CONTACT</h3>
                <div className='footer-item1'>
                    <div className='f-image'>
                        <img src='./call.png' alt=''/>
                    </div>
                    <div className='f-text'>
                        <p>+250788555765</p>
                    </div>
                </div>
                <div className='footer-item1'>
                    <div className='f-image'>
                        <img src='./email.png' alt=''/>
                    </div>
                    <div className='f-text'>
                        <p>uniguide@gmail.com</p>
                    </div>
                </div>
            </div>
        </div>
        <div className="footer-section2">
          <div className='f-element'>
          <h3>LINKS</h3>
            <p>Privacy policy</p>
            <p>Terms of use</p>
          </div>
        </div>
        <div className="footer-section3">
          <div className='f-element'>
          <h3>SOCIAL NETWORKS</h3>
                <div className='footer-item1'>
                    <div className='f-image'>
                        <img src='./fb.png' alt=''/>
                    </div>
                    <div className='f-text'>
                        <p>uniguide</p>
                    </div>
                </div>
                <div className='footer-item1'>
                    <div className='f-image'>
                        <img src='./linkd-removebg-preview.png' alt=''/>
                    </div>
                    <div className='f-text'>
                        <p>@uniguide</p>
                    </div>
                </div>
                <div className='footer-item1'>
                    <div className='f-image'>
                        <img src='./insta-removebg-preview.png' alt=''/>
                    </div>
                    <div className='f-text'>
                        <p>@uniguide</p>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
