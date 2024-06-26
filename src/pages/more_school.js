import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import FilterBlock from "../components/filtter_block";
import PageStyeCSS from "./pages_style.module.css"
import { useDispatch } from "react-redux";
import { fetchSchool } from '../redux/schoolReducer/schoolSlice';
import {GridViewForSchool} from "../components/grid_for_school_university";


const MoreSchoolPage = () => {
    const dispatch = useDispatch();
  

  dispatch(fetchSchool());
    return (<div className={PageStyeCSS.schoolPage}>
        <Header />
        <FilterBlock />
        <GridViewForSchool/>
        <Footer />
    </div>)
}
export default MoreSchoolPage;