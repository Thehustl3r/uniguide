import React, {  useRef } from "react";
import SlidingGridViewCSS from "./component_style.module.css"
import AppText from "../appCSS/appText_css.module.css"
import { TfiNewWindow } from "react-icons/tfi";
import { SlArrowRight, SlArrowLeft } from "react-icons/sl";

const SlidingGridView = () => {
    const scrollContainer = useRef(null);

    const scrollLeft = () => {
        console.log("Left button pressed");

        if (scrollContainer.current) {
            scrollContainer.current.scrollLeft -= 100;

        }
    };
    const scrollRight = () => {
        console.log("Right button pressed");
        if (scrollContainer.current) {
            scrollContainer.current.scrollLeft += 100;
        }
    }

    const card = <div className={SlidingGridViewCSS.card}>
        <h2>Womens Scholarship</h2>
        <h3>Universty name</h3>
        <h2>Phd, Masters</h2>
        <h2>up too 1000$</h2>
        <span>
            <text>Apply</text>
            <TfiNewWindow />
        </span>
    </div>
    const cards = []
    for (let i = 0; i < 10; i++) {
        cards.push(card);
    }
    return (
        <div className={SlidingGridViewCSS.slidingGridView}>
            <h2 className={AppText.bigText}>Treding Scholarships</h2>
            <span className={SlidingGridViewCSS.scrollable_button}>
                <button onClick={scrollLeft}>
                    <SlArrowLeft />
                </button>
                <button onClick={scrollRight}>
                    <SlArrowRight />
                </button>
            </span>
            <div ref={scrollContainer} className={SlidingGridViewCSS.slidingView}>
                {cards.map(card => card)}
            </div>
        </div>)
}
export default SlidingGridView;