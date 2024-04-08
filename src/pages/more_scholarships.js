import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import FilterBlock from "../components/filtter_block";
import PageStyeCSS from "./pages_style.module.css"
import { useDispatch } from "react-redux";
import { fetchSchool } from '../redux/schoolReducer/schoolSlice';
import {GridViewForScholarship} from "../components/grid_for_school_university";


const MoreScholarshipPage = () => {
    const dispatch = useDispatch();
  

  dispatch(fetchSchool());
    return (<div className={PageStyeCSS.schoolPage}>
        <Header />
        <FilterBlock />
        <GridViewForScholarship/>
        <Footer />
    </div>)
}
export default MoreScholarshipPage;