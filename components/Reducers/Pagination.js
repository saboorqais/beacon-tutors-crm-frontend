
import { createSlice } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";

const initialState = {
  payload: 1,
};

const CHANGE_PAGE_NUMBER="CHANGE_PAGE_NUMBER"
export const PaginationSlice = createSlice({
  name: "page",
  initialState,
  reducers: {
    // Action to set the authentication status
    setPositiontate(state, action) {
      state.payload = action.payload;
    },

    // Special reducer for hydrating the state. Special case for next-redux-wrapper
    extraReducers: {
      [HYDRATE]: (state = initialState, action) => {
        switch (action.type) {
          case CHANGE_PAGE_NUMBER:
            return Object.assign([], state, {
              payload: action.payload,
            });
          default:
            return state;
        }
      },
    },
  },
});


export const { setPositiontate } = PaginationSlice.actions;

export const selectPageState = (state) => state.page.payload;

export default PaginationSlice.reducer;