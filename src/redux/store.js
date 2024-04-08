import { configureStore } from "@reduxjs/toolkit";
import school from "./schoolReducer/schoolSlice";
import addUser from "./schoolReducer/addSchoolSlice"
import countries from "./locationReducer/countrySlice"
import scholarship from "./scholarshipReducer/scholarshipSlice";
import loginStatus from "./authReducer/authSlice";
import search from "./authReducer/searchSlice";
import login from "./userReducer/loginSlice";

const store = configureStore ({
    reducer: {
        school,
        addUser,
        countries,
        scholarship,
        loginStatus,
        search,
        login,
        
    }
})
export default store