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
      if (userData.length === 0) {
        const token = localStorage.getItem('token');
        const response = await axios.post(
          `${Config.apiURL + Config.loginAPI}`,
          {}, // Empty body for token-based login
          { headers: { Authorization: `Bearer ${token}` } }
        );
        if (response.status >= 200 && response.status < 300) {
          return response.data;
        } else {
          // Handle error response
          throw new Error(`Request failed with status ${response.status}`);
        }
      } else {
        const response = await axios.post(
          `${Config.apiURL + Config.loginAPI}`,
          userData
        );
        localStorage.setItem('token', response.data.token);
        if (response.status >= 200 && response.status < 300) {
          console.log(`Request failed with status ${response.status}`);

          return response.data;
        } else {
          // Handle error response
          console.log(`Request failed with status ${response.status}`);
          throw new Error(`Request failed with status ${response.status}`);
        }
      }
    } catch (error) {
      // Handle specific errors here
      // console.log(`Request failed with status ${response.status}`);
      console.log(error);

      throw error; // Rethrow the error to propagate it further if needed
    }
  },
);

const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {},
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