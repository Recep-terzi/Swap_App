import { createSlice } from "@reduxjs/toolkit";

export const swapSlice = createSlice({
  name: "swap",
  initialState: {
    items: [],
    productItems: [],
    user: null,
    hidden: false,
    detail: [],
  },
  reducers: {
    getItems: (state, action) => {
      state.items = action.payload;
    },
    getProductItems: (state, action) => {
      state.productItems = action.payload;
    },
    login: (state, action) => {
      state.user = action.payload;
    },
    logout: (state) => {
      state.user = null;
    },
    setHidden: (state, action) => {
      state.hidden = action.payload;
    },
    getDetail: (state, action) => {
      state.detail = action.payload;
    },
  },
});

export const {
  getItems,
  login,
  getProductItems,
  getDetail,
  setHidden,
  logout,
} = swapSlice.actions;
export const selectUser = (state) => state.swap.user;
export default swapSlice.reducer;
