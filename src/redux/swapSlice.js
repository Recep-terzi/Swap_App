import { createSlice } from "@reduxjs/toolkit";

export const swapSlice = createSlice({
  name: "swap",
  initialState: {
    items: [],
    detail: [],
  },
  reducers: {
    getItems: (state, action) => {
      state.items = action.payload;
    },
    getDetail: (state, action) => {
      state.detail = action.payload;
    },
  },
});

export const { getItems, getDetail } = swapSlice.actions;
export default swapSlice.reducer;
