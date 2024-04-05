import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import Config from "../../config";

const initialState = {
    value: [],
    isloading: false,
    error: false,
}

export const fetchCountries = createAsyncThunk(
  'countries',
  async () => {
    try {
      
      const { data } = await axios.get(`${Config.apiURL + Config.countriesAPI}`);

      return data;

    } catch (error) {
      return error;
    }
  },
);

const countriesSlice = createSlice({
    name: 'countries',
    initialState,
    reducers:{},
    extraReducers: builder => {
        builder
          .addCase(fetchCountries.pending, (state) => {
            state.isloading = true;
          })
          .addCase(fetchCountries.fulfilled, (state, action) => {
            state.value = action.payload;
            state.error = false;
            state.isloading = false;
          })
          .addCase(fetchCountries.rejected, (state, action) => {
            state.error = action.payload;
            state.value = false;
            state.isloading = false;
          });
      },
    
    });

export default countriesSlice.reducer