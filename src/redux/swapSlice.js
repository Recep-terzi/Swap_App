import { createSlice } from "@reduxjs/toolkit";

export const swapSlice = createSlice({
  name: "swap",
  initialState: {
    items: [],
  },
  reducers: {
    getItems: (state, action) => {
      state.items = action.payload;
    },
  },
});

export const { getItems } = swapSlice.actions;
export default swapSlice.reducer;
