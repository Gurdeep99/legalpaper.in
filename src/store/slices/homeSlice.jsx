import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';

export const HomeDataApi = createAsyncThunk(
  'data/HomeDataApi',
  async () => {
  
    try {
      const response = await axios.get(`https://api.legalpaper.in/render/home`,
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
      console.log(response.data)
      return response.data;
    } catch (error) {
      console.log('Error in Astro Profile Data Api:', 'error', error);
      throw error;
    }
  },
);

// Create a slice for follow/unfollow
const HomeDataApiSlice = createSlice({
  name: 'data',
  initialState: {
    data: [],
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(HomeDataApi.pending, state => {
        state.status = 'loading';
      })
      .addCase(HomeDataApi.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload;
      })
      .addCase(HomeDataApi.rejected, (state, action) => {
        state.status = 'failed';
        console.log("Error: Follow UnFollow Api:", "error",  action.error)
        state.error = action.error.message;
      });
  },
});

export default HomeDataApiSlice.reducer;
