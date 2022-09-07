import { createSlice } from "@reduxjs/toolkit";

export const swapSlice = createSlice({
  name: "swap",
  initialState: {
    items: [],
    detail: [],
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
  },
});

export const { getItems, getDetail, setLogin } = swapSlice.actions;
export default swapSlice.reducer;
