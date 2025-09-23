import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';
import Cookies from 'js-cookie';

export const MeDataApi = createAsyncThunk(
  'data/MeDataApi',
  async () => {
    try {
      const response = await axios.get(`https://api.legalpaper.in/user/me`,
        {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': Cookies.get('token'),
          },
        }
      );
      console.log(response.data)
      return response.data;
    } catch (error) {
      console.log('Error in Me Data Api:', 'error', error);
      throw error;
    }
  },
);

// Create a slice for follow/unfollow
const MeDataApiSlice = createSlice({
  name: 'data',
  initialState: {
    data: [],
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(MeDataApi.pending, state => {
        state.status = 'loading';
      })
      .addCase(MeDataApi.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload;
      })
      .addCase(MeDataApi.rejected, (state, action) => {
        state.status = 'failed';
        console.log("Error: Me Data Api:", "error",  action.error)
        state.error = action.error.message;
      });
  },
});

export default MeDataApiSlice.reducer;
