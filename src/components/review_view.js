import React from "react";
import ReviewViewCSS from './component_style.module.css'
import AppText from '../appCSS/appText_css.module.css'
import { FaStar } from "react-icons/fa6";


const ReviewView = () => {
    const card = <div className={ReviewViewCSS.review}>
        <h4>University of Rwanda</h4>
        <div className={ReviewViewCSS.ratings}>
            <span>
            <FaStar className={ReviewViewCSS.star}/>
            <FaStar className={ReviewViewCSS.star}/>
            <FaStar className={ReviewViewCSS.star}/>
            <FaStar className={ReviewViewCSS.star}/>
            <FaStar className={ReviewViewCSS.star}/>

            </span>
            <h5>5/5</h5>
        </div>
        <p>This university is the best university that exists taht I
            would recomend it to anyone</p>
    </div>
    const cards = []
    for (let i = 0; i < 3; i++) {
        cards.push(card);
    }
    return <div className={ReviewViewCSS.reviewView}>
        <h2 className={AppText.bigText}>Testimonies</h2>
        <h2 className={AppText.bigText}>Reviews From others can help you to make your decision</h2>
        <div className={ReviewViewCSS.cardSection}>
            {cards.map(card => card)}
        </div>
        <h2 className={AppText.bigText}><u> More reviews</u></h2>

    </div>
}
export default ReviewView;