import React from "react";
import GridCss from './country_list.module.css'

const CountryList = ()=>{
    const countryList = [];
    for (let i = 0; i < 54; i++) {
        countryList.push("Rwanda")        
    }
    return(
        <div className={GridCss.gridContainer}>
           {countryList.map((e)=>{
            return(<div> {e}</div>)
           })} 
        </div>
    )
}
export default CountryList;