import React, { useState } from "react";

import AppText from "../appCSS/appText_css.module.css"
import SlidingViewCSS from "./sliding_view.module.css"
import { TfiNewWindow } from "react-icons/tfi";
import { SlArrowRight, SlArrowLeft } from "react-icons/sl";
import { useSelector } from "react-redux";

export function SlidingViewForSchool({ title = 'Top' }) {
    const universities = useSelector(state => state.school);
    const [index, setIndex] = useState(0);

    const scrollLeft = () => {
        if (index > 0) {
            setIndex(index - 1);
            console.log(index);

        }
    };
    const scrollRight = async () => {
        console.log(index);
        console.log(await universities.value.length);

        if (index < await universities.value.length) {

            setIndex(index + 1);
            console.log(index);
        }
    }

    return (<div className={SlidingViewCSS.slidingView}>
        <h2 className={AppText.bigText}>
            {title}
        </h2>
        <div className={SlidingViewCSS.viewSection}>
            <span className={SlidingViewCSS.arrows}>
                <SlArrowLeft onClick={scrollLeft} />
                <SlArrowRight onClick={scrollRight} />
            </span>
            {universities.isLoading ? <div>Loading</div> :
                <div className={SlidingViewCSS.countryCard}>
                    <a className={SlidingViewCSS.textSection} href={universities.value[index]?.website} target="_blank">
                        <h4>{universities.value[index]?.name}</h4>
                        <TfiNewWindow />
                    </a>
                </div>
            }

        </div>
    </div>)
}
export function SlidingViewForScholarship({ title = 'Top' }) {
    const scholarships = useSelector(state => state.scholarship);
    const [index, setIndex] = useState(0);

    const scrollLeft = () => {
        if (index > 0) {
            setIndex(index - 1);
            console.log(index);

        }
    };
    const scrollRight = async () => {
        console.log(index);
        console.log(await scholarships.value.length);

        if (index < await scholarships.value.length) {

            setIndex(index + 1);
            console.log(index);
        }
    }

    return (<div className={SlidingViewCSS.slidingView}>
        <h2 className={AppText.bigText}>
            {title}
        </h2>
        <div className={SlidingViewCSS.viewSection}>
            <span className={SlidingViewCSS.arrows}>
                <SlArrowLeft onClick={scrollLeft}/>
                <SlArrowRight onClick={scrollRight}/>
            </span>
            {scholarships.isLoading ? <div>Loading</div> :
                <div className={SlidingViewCSS.scholarshipCard}>
                    <p>{scholarships.value[index]?.description}</p>
                    <h4>{scholarships.value[index]?.benefit}</h4>

                    <a className={SlidingViewCSS.textSection} href={scholarships.value[index]?.link} target="_blank">
                        <h4>{scholarships.value[index]?.title}</h4>
                        <TfiNewWindow />
                    </a>
                </div>
            }
        </div>
    </div>)
}