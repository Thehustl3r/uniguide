import React from "react";
import FilterBlockCSS from "./component_style.module.css"
const FilterBlock = () => {
    return (
        <div className={FilterBlockCSS.filterBlock}>
            <select placeholder="Country">
                <option value="" disabled selected>Country</option>
            </select>
            <select placeholder="City">
                <option value="" disabled selected>City</option>
            </select>
            <select placeholder="Degree">
                <option value="" disabled selected>Degree</option>

            </select>
            <select placeholder="Money">
                <option value="" disabled selected>Money</option>

            </select>

            <button className={FilterBlockCSS.button}>Filter</button>
        </div>
    )
}
export default FilterBlock;