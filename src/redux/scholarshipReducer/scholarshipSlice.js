import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import Config from "../../config";

const initialState = {
    value: [],
    isloading: false,
    error: false,
}

export const fetchScholarship = createAsyncThunk(
  'scholarship',
  async () => {
    try {
      
      const { data } = await axios.get(`${Config.apiURL + Config.scholarshipAPI}`);

      return data;

    } catch (error) {
      return error;
    }
  },
);

const scholarshipSlice = createSlice({
    name: 'scholarship',
    initialState,
    reducers:{},
    extraReducers: builder => {
        builder
          .addCase(fetchScholarship.pending, (state) => {
            state.isloading = true;
          })
          .addCase(fetchScholarship.fulfilled, (state, action) => {
            state.value = action.payload;
            state.error = false;
            state.isloading = false;
          })
          .addCase(fetchScholarship.rejected, (state, action) => {
            state.error = action.payload;
            state.value = false;
            state.isloading = false;
          });
      },
    
    });

export default scholarshipSlice.reducer