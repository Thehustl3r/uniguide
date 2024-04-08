import React, { useEffect, useState } from "react";
import TredingCountriesCSS from "./component_style.module.css"
import AppText from "../appCSS/appText_css.module.css"
import { useSelector } from "react-redux";


const GridViewForScoolAndScholarship = ({title="Schools" , data}) => {
    const [data, setData] = useState([])
    const searchQuery = useSelector(state => state.search)
    
    const schools = useSelector(state => state.school.value)
    
    const filteredData = schools?.filter((item) => item.name.toLowerCase().includes(searchQuery.toLowerCase()));

    useEffect(() => {
        setData(filteredData);
    }, [dispatch])

    return (
        <div className={TredingCountriesCSS.tredingCountries}>

            <h2 className={AppText.bigText}>Popular Countries</h2>


            {
                // schools?.isLoading ? <h4>Loading...</h4> :
                <div className={TredingCountriesCSS.countries_grid}>
                    {schools?.value?.map(e => {
                        return <div key={e.id} className={TredingCountriesCSS.card}>

                            <h4>{e.country}</h4>
                        </div>
                    }).slice(0, 8)}
                </div>
            }
            <h5><u>more coutries</u></h5>
        </div>
    )
}
export default GridViewForScoolAndScholarship;