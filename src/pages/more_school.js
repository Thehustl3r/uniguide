import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import FilterBlock from "../components/filtter_block";
import PageStyeCSS from "./pages_style.module.css"
import {SlidingGridViewForCountry} from "../components/sliding_grid_view";
import TredingCountries from "../components/trending_countries";
import AppText from "../appCSS/appText_css.module.css"
import ReviewView from "../components/review_view";
import { useDispatch } from "react-redux";
import { fetchSchool } from '../redux/schoolReducer/schoolSlice';


const MoreSchoolPage = () => {
    const dispatch = useDispatch();
  

  dispatch(fetchSchool());
    return (<div className={PageStyeCSS.schoolPage}>
        <Header />
        <FilterBlock />
        <SlidingGridViewForCountry />
        <TredingCountries />
        <ReviewView/>
        <Footer />
    </div>)
}
export default MoreSchoolPage;