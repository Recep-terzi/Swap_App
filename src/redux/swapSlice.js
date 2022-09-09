import { createSlice } from "@reduxjs/toolkit";

export const swapSlice = createSlice({
  name: "swap",
  initialState: {
    items: [],
    detail: [],
    user: null,
    login: false,
  },
  reducers: {
    getItems: (state, action) => {
      state.items = action.payload;
    },
    getDetail: (state, action) => {
      state.detail = action.payload;
    },
    setLogin: (state, action) => {
      state.login = action.payload;
    },
    setUser: (state, action) => {
      state.user = action.payload;
    },
    setLogout: (state) => {
      state.user = null;
    },
  },
});

export const { getItems, getDetail, setLogin, setUser, setLogout } =
  swapSlice.actions;
export default swapSlice.reducer;
