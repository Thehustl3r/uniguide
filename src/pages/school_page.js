import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import FilterBlock from "../components/filtter_block";
import PageStyeCSS from "./pages_style.module.css"
import SlidingGridView from "../components/sliding_grid_view";
import TredingCountries from "../components/trending_countries";
import AppText from "../appCSS/appText_css.module.css"
const SchoolPage = () => {
    return (<div className={PageStyeCSS.schoolPage}>
        <Header />
        <FilterBlock />
        <SlidingGridView />
        <TredingCountries />
        <div className={`${PageStyeCSS.discription} `}>
            <h5 className={AppText.bigText}>Find and Compare University Scholarships Africa</h5>
            <h5 className={AppText.bigText}>Scholarships, grants, fellowships and other student funding</h5>
            <p>
                Find and compare scholarships for college students, college grants, fellowships, federal financial aid and other forms of student funding to cover expenses for international Bachelors, Masters and PhDs worldwide.
            </p>
            <p>
            Uniguide is the best scholarship website for international students looking to meet their financial needs. Browse comprehensive scholarship lists available for a wide variety of destinations abroad. Start your scholarship search by choosing a study location and selecting one of over 1000 opportunities for student financial aid available in the Rwanda, Kenya, Nigeria, Uganda, South Africa, Ghana, Senegal, and many others.
            </p>
            <p>
            Apply for a university scholarship in a degree subject that interests you from top MBA scholarships, engineering scholarships, scholarships for law schools and medical schools, as well as art, sports or music scholarships, and many more.
            </p>



        </div>
        <Footer />
    </div>)
}
export default SchoolPage;