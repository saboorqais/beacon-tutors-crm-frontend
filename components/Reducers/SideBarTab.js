import { CHANGE_SIDEBAR_TAB } from "../Action/Sidebarchnager";
import { createSlice } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";

const initialState = {
  id: 0,
};
export const TabsSlice = createSlice({
  name: "tabs",
  initialState,
  reducers: {
    // Action to set the authentication status
    setTabState(state, action) {
      state.id = action.payload;
    },

    // Special reducer for hydrating the state. Special case for next-redux-wrapper
    extraReducers: {
      [HYDRATE]: (state = initialState, action) => {
        switch (action.type) {
          case CHANGE_SIDEBAR_TAB:
            return Object.assign([], state, {
              payload: action.payload,
              id: action.id,
            });
          default:
            return state;
        }
      },
    },
  },
});


export const { setTabState } = TabsSlice.actions;

export const selectTabState = (state) => state.tabs.id;

export default TabsSlice.reducer;