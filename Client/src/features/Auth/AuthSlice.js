import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import { fetchCount } from './authAPI';

const initialState = {
  loggedIn: false,
  type: null,
  userDetail: null,
};

// export const incrementAsync = createAsyncThunk(
//   'auth/fetchCount',
//   async (amount) => {
//     const response = await fetchCount(amount);
//     return response.data;
//   }
// );

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    // setLogin: (state, action) => {
    //   state.loggedIn = action.payload;
    // },
    // setType: (state, action) => {
    //   state.type = action.payload;
    // },
    setData: (state, action) => {
      state.type = action.payload.type;
      state.loggedIn = true;
      state.userDetail = action.payload.user;
    },
  },
});

export const { setData} = authSlice.actions;

export const selectLoggedIn = (state) => state.auth.loggedIn;
export const selectAccountType = (state) => state.auth.type;

export default authSlice.reducer;
