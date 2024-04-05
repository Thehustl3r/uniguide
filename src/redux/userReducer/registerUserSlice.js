import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import Config from "../../config";

const initialState = {
    value: [],
    isloading: false,
    error: false,
}

export const addUser = createAsyncThunk(
  'addUser',
  async (userData) => {
    console.log(userData);
    try {
      
      const { data } = await axios.post(`${Config.apiURL + Config.signupAPI}`, userData);

      return data;

    } catch (error) {
      return error;
    }
  },
);

const addUserSlice = createSlice({
    name: 'addUser',
    initialState,
    reducers:{},
    extraReducers: builder => {
        builder
          .addCase(addUser.pending, (state) => {
            state.isloading = true;
          })
          .addCase(addUser.fulfilled, (state, action) => {
            state.value = action.payload;
            state.error = false;
            state.isloading = false;
          })
          .addCase(addUser.rejected, (state, action) => {
            state.error = action.payload;
            state.value = false;
            state.isloading = false;
          });
      },
    
    });

export default addUserSlice.reducer