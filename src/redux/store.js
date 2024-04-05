import { configureStore } from "@reduxjs/toolkit";
import school from "./schoolReducer/schoolSlice";
import addUser from "./schoolReducer/addSchoolSlice"
import countries from "./locationReducer/countrySlice"
import scholarship from "./scholarshipReducer/scholarshipSlice";
import loginStatus from "./authReducer/authSlice"
const store = configureStore ({
    reducer: {
        school,
        addUser,
        countries,
        scholarship,
        loginStatus,
    }
})
export default store