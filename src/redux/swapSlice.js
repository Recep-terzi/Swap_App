import { createSlice } from "@reduxjs/toolkit";

export const swapSlice = createSlice({
  name: "swap",
  initialState: {
    items: [],
    productItems: [],
    user: null,
    hidden: false,
    detail: [],
    technologyItems: [],
    clothesItems: [],
    otherItems: [],
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
    getTechonologyItems: (state, action) => {
      state.technologyItems = action.payload;
    },
    getClothesItems: (state, action) => {
      state.clothesItems = action.payload;
    },
    getOtherItems: (state, action) => {
      state.otherItems = action.payload;
    },
  },
});

export const {
  getItems,
  login,
  getProductItems,
  getDetail,
  getTechonologyItems,
  setHidden,
  getClothesItems,
  logout,
  getOtherItems,
} = swapSlice.actions;
export const selectUser = (state) => state.swap.user;
export default swapSlice.reducer;
