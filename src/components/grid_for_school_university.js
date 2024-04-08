import React, { useEffect, useState } from "react";
import componentStyle from "./component_style.module.css"
import AppText from "../appCSS/appText_css.module.css"
import { useDispatch, useSelector } from "react-redux";
import { TfiNewWindow } from "react-icons/tfi";



const GridViewForSchool = ({title="Schools"}) => {
    const [data, setData] = useState([])
    const dispatch = useDispatch();
    const searchQuery = useSelector(state => state.search.searchQuery)
    
    const schools = useSelector(state => state.school)
    
    const filteredData = schools?.value?.filter((item) => item.name.toLowerCase().includes(searchQuery.toLowerCase()));

    useEffect(() => {
        setData(filteredData);
    }, [dispatch])

    return (
        <div className={componentStyle.moreCountry}>

            <h2 className={AppText.bigText}>{title}</h2>


            {
                schools?.isLoading ? <h4>Loading...</h4> :
                <div className={componentStyle.schoolGrid}>
                    {filteredData?.map(e => {
                        return <div key={e.id} className={componentStyle.card}>
                            <h2>{e.name}</h2>
                                    <h4>Location: {e.country}</h4>
                                    <span>
                                        <a href={e.website} target="_blank">
                                            <text>Apply</text>
                                            <TfiNewWindow />
                                        </a>
                                    </span>
                        </div>
                    })}
                </div>
            }
        </div>
    )
}

const GridViewForScholarship = ({title="Scholarships"}) => {
    const [data, setData] = useState([])
    const dispatch = useDispatch();
    const searchQuery = useSelector(state => state.search.searchQuery)
    
    const scholarships = useSelector(state => state.scholarship)
    
    const filteredData = scholarships?.value?.filter((item) => item.title.toLowerCase().includes(searchQuery.toLowerCase()));

    useEffect(() => {
        setData(filteredData);
    }, [dispatch])

    return (
        <div className={componentStyle.moreCountry}>

            <h2 className={AppText.bigText}>{title}</h2>


            {
                scholarships?.isLoading ? <h4>Loading...</h4> :
                <div className={componentStyle.schoolGrid}>
                    {filteredData?.map(e => {
                        return <div className={componentStyle.card_slidingView}>
                        <h2 className={componentStyle.noWrap}>{e.title}</h2>
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
                    })}
                </div>
            }
        </div>
    )
}
export  {GridViewForSchool, GridViewForScholarship};