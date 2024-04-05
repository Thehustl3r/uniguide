import React from "react";
import GridCss from './component_style.module.css'
import { useSelector } from "react-redux/es/hooks/useSelector";


const CountryList = ()=>{
    const countries = useSelector(state => state.countries.value)
    const countryList = countries;
    
    
    return(
        <div className={GridCss.gridContainer}>
           {countryList.map((e)=>{
            return(<div className={GridCss.noWrap}> {e.name}</div>)
           })} 
        </div>
    )
}
export default CountryList;