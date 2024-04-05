import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import Config from "../../config";

const initialState = {
    value: [],
    isloading: false,
    error: false,
}

export const fetchSchool = createAsyncThunk(
  'school',
  async () => {
    try {
      
      const { data } = await axios.get(`${Config.apiURL + Config.schoolAPI}`);

      return data;

    } catch (error) {
      return error;
    }
  },
);

const schoolSlice = createSlice({
    name: 'school',
    initialState,
    reducers:{},
    extraReducers: builder => {
        builder
          .addCase(fetchSchool.pending, (state) => {
            state.isloading = true;
          })
          .addCase(fetchSchool.fulfilled, (state, action) => {
            state.value = action.payload;
            state.error = false;
            state.isloading = false;
          })
          .addCase(fetchSchool.rejected, (state, action) => {
            state.error = action.payload;
            state.value = false;
            state.isloading = false;
          });
      },
    
    });

export default schoolSlice.reducer