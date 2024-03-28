import React from "react";
import AppText from "../appCSS/appText_css.module.css"
import SlidingViewCSS from "./sliding_view.module.css"
import { TfiNewWindow } from "react-icons/tfi";
import { SlArrowRight, SlArrowLeft } from "react-icons/sl";

const SlidingView = () => {
    return (<div className={SlidingViewCSS.slidingView}>
        <h2 className={AppText.bigText}>Top Universities</h2>
        <div className={SlidingViewCSS.viewSection}>
            <span >
                <SlArrowLeft />
                <SlArrowRight />
            </span>
            <div>
                <text>Universities name</text>
                <TfiNewWindow />
            </div>
        </div>
    </div>)
}

export default SlidingView;