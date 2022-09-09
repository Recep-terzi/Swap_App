import { createSlice } from "@reduxjs/toolkit";

export const swapSlice = createSlice({
  name: "swap",
  initialState: {
    // items: [],
    // detail: [],
    // user: null,
    user: null,
    // login: false,
  },
  reducers: {
    getItems: (state, action) => {
      state.items = action.payload;
    },
    // getDetail: (state, action) => {
    //   state.detail = action.payload;
    // },
    // setLogin: (state, action) => {
    //   state.login = action.payload;
    // },
    // setUser: (state, action) => {
    //   state.user = action.payload;
    // },
    // setLogout: (state) => {
    //   state.user = null;
    // },
    login: (state, action) => {
      state.user = action.payload;
    },
    logout: (state) => {
      state.user = null;
    },
  },
});

export const {
  getItems,
  getDetail,
  setLogin,
  setUser,
  setLogout,
  login,
  logout,
} = swapSlice.actions;
export const selectUser = (state) => state.swap.user;
export default swapSlice.reducer;
