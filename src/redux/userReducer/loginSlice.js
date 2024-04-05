import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import Config from "../../config";

const initialState = {
    value: [],
    isloading: false,
    error: false,
}

export const login = createAsyncThunk(
  'login',
  async (userData) => {
    try {
      
      const { data } = await axios.post(`${Config.apiURL + Config.loginAPI}`, userData);

      return data;

    } catch (error) {
      return error;
    }
  },
);

const loginSlice = createSlice({
    name: 'login',
    initialState,
    reducers:{},
    extraReducers: builder => {
        builder
          .addCase(login.pending, (state) => {
            state.isloading = true;
          })
          .addCase(login.fulfilled, (state, action) => {
            state.value = action.payload;
            state.error = false;
            state.isloading = false;
          })
          .addCase(login.rejected, (state, action) => {
            state.error = action.payload;
            state.value = false;
            state.isloading = false;
          });
      },
    
    });

export default loginSlice.reducer