import React from 'react';
import FooterCSS from './footer.module.css'
import AppTextCSS from '../appCSS/appText_css.module.css'
import BoxCSS from '../appCSS/appBox_css.module.css'

import { Button } from '@mui/material';
const Footer = () => {
  return (
    <footer className={FooterCSS.footer}>
        <div className={FooterCSS.footerBody}>
            <div className={FooterCSS.block}>
                <title className={AppTextCSS.bigText}>About</title>
                <a href='##' className={AppTextCSS.smallText}>About uniquide</a>
                <a href='##' className={AppTextCSS.smallText}>Meet the policy</a>
                <a href='##' className={AppTextCSS.smallText}>Privacy policy</a>
                <a href='##' className={AppTextCSS.smallText}>Disclaimer</a>
            </div>
            <div className={FooterCSS.block}>
                <title className={AppTextCSS.bigText}>About</title>
                <a href='##' className={AppTextCSS.smallText}>The Uniquide Group</a>
                <a href='##' className={AppTextCSS.smallText}>study in Africa</a>
                <a href='##' className={AppTextCSS.smallText}>Schorship in Africa</a>
            </div>
            <div className={FooterCSS.block}>
                <title className={AppTextCSS.bigText}>Let's Connect</title>
                <a href='##' className={AppTextCSS.smallText}>Contact us</a>
                <a href='##' className={AppTextCSS.smallText}>Advertise with us</a>
                <a href='##' className={AppTextCSS.smallText}>Meet our counsellor</a>
            </div>
            <div className={FooterCSS.subscribe}>
                <text>Subscribe to our newsletter</text>
                <div className={BoxCSS.box}>
                    <input></input>
                    <button>Subscribe</button>
                </div>

            </div>
        </div>
        <h5>copyright@2024</h5>

    </footer>
  );
};

export default Footer;
