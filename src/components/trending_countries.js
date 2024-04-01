import React from "react";
import TredingCountriesCSS from "./component_style.module.css"
import AppText from "../appCSS/appText_css.module.css"


const TredingCountries = () => {
    const card = <div className={TredingCountriesCSS.card}>

        <h4>Scholarship in Rwanda</h4>
    </div>
    const cards = []
    for (let i = 0; i < 10; i++) {
        cards.push(card);
    }
    return (
        <div className={TredingCountriesCSS.tredingCountries}>

            <h2 className={AppText.bigText}>Treding Scholarships</h2>


            <div className={TredingCountriesCSS.countries_grid}>
                {cards.map(card => card).slice(0, 8)}
            </div>
            <h5><u>more coutries</u></h5>
        </div>
    )
}
export default TredingCountries;