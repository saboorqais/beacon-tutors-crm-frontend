
import { createSlice } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";

const initialState = {
  payload: false,
};

const LOADING="LOADING"
export const LoadingSlice = createSlice({
  name: "loading",
  initialState,
  reducers: {
    // Action to set the authentication status
    setLoadingState(state, action) {
      state.payload = action.payload;
    },

    // Special reducer for hydrating the state. Special case for next-redux-wrapper
    extraReducers: {
      [HYDRATE]: (state = initialState, action) => {
        switch (action.type) {
          case LOADING:
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


export const { setLoadingState } = LoadingSlice.actions;

export const selectLoadingState = (state) => state.loading.payload;

export default LoadingSlice.reducer;