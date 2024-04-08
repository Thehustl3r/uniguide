import React, { useRef } from "react";
import SlidingGridViewCSS from "./component_style.module.css"
import AppText from "../appCSS/appText_css.module.css"
import { TfiNewWindow } from "react-icons/tfi";
import { SlArrowRight, SlArrowLeft } from "react-icons/sl";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export const SlidingGridViewForCountry = () => {
    const scrollContainer = useRef(null);
    const schools = useSelector(state => state.school)
    const scrollLeft = () => {

        if (scrollContainer.current) {
            scrollContainer.current.scrollLeft -= 100;

        }
    };
    const scrollRight = () => {
        if (scrollContainer.current) {
            scrollContainer.current.scrollLeft += 100;
        }
    }
    return (
        <div className={SlidingGridViewCSS.slidingGridView}>
            <Link to={'/schools/moreSchools'}>
                <h2 className={AppText.bigText}>Popular Schools</h2>

            </Link>
            <span className={SlidingGridViewCSS.scrollable_button}>
                <button onClick={scrollLeft}>
                    <SlArrowLeft />
                </button>
                <button onClick={scrollRight}>
                    <SlArrowRight />
                </button>
            </span>
            <div>
                {schools.isLoading ? <div>Loading...</div>
                    :
                    <div ref={scrollContainer} className={SlidingGridViewCSS.slidingView}>
                        {schools.value?.map(e => {
                            return (
                                <div key={e.id} className={SlidingGridViewCSS.card}>
                                    <h2>{e.name}</h2>
                                    <h4>Location: {e.country}</h4>
                                    <span>
                                        <a href={e.website} target="_blank">
                                            <text>Apply</text>
                                            <TfiNewWindow />
                                        </a>
                                    </span>
                                </div>
                            )
                        })}
                    </div>
                }
            </div>
        </div>)
}

export const SlidingGridViewForScholaship = () => {
    const scrollContainer = useRef(null);
    const scholarships = useSelector(state => state.scholarship)
    const scrollLeft = () => {

        if (scrollContainer.current) {
            scrollContainer.current.scrollLeft -= 100;

        }
    };
    const scrollRight = () => {
        if (scrollContainer.current) {
            scrollContainer.current.scrollLeft += 100;
        }
    }
    return (
        <div className={SlidingGridViewCSS.slidingGridView}>
            <Link to={'/scholarships/moreScholarships'}>
                <h2 className={AppText.bigText}>Treding Scholarships</h2>

            </Link>
            <span className={SlidingGridViewCSS.scrollable_button}>
                <button onClick={scrollLeft}>
                    <SlArrowLeft />
                </button>
                <button onClick={scrollRight}>
                    <SlArrowRight />
                </button>
            </span>
            <div>
                {scholarships.isLoading ? <div>Loading...</div>
                    :
                    <div ref={scrollContainer} className={SlidingGridViewCSS.slidingView}>
                        {scholarships.value?.map(e => {
                            return (
                                <div className={SlidingGridViewCSS.card_slidingView}>
                                    <h2 className={SlidingGridViewCSS.noWrap}>{e.title}</h2>
                                    <div>
                                        <u>Benefit:</u> {e.benefit}
                                    </div>
                                    <span>
                                        <a href={e.link} target="_blank">
                                            <>Apply</>
                                            <TfiNewWindow />
                                        </a>
                                    </span>
                                </div>
                            )
                        })}
                    </div>
                }
            </div>
        </div>)
}