import { createSelector, createSlice } from "@reduxjs/toolkit";

export const citySelector = createSelector((state) => state.city);

export const cities = createSlice({
  name: "cities",
  initialState: [],
  reducers: {
    cityAdded: (state, action) => {
      state.push(action.payload);
    },
  },
});

export const { cityAdded } = cities.actions;

export const cityReducer = cities.reducer;
