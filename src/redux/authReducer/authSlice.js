import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    islogedIn: false,
    token: '',
    name: '',
}

const authSlice = createSlice({
    name: 'loginStatus',
    initialState,
    reducers: {
        setLoginStatus(state, action){
            state.islogedIn = action.payload.islogedIn
            state.token = action.payload.token
            state.name = action.payload.name

        },
    }

})
export const {setLoginStatus} = authSlice.actions
export default authSlice.reducer