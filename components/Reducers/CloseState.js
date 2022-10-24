
import { createSlice } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";
import { CLOSE_BUTTON_STATUS } from "../Action/CloseButtonStatus";

const initialState = {
  status: true,
};
export const CloseSlice = createSlice({
  name: "status",
  initialState,
  reducers: {
    // Action to set the authentication status
    setCloseState(state, action) {
      state.status = action.payload;
    },

    // Special reducer for hydrating the state. Special case for next-redux-wrapper
    extraReducers: {
      [HYDRATE]: (state = initialState, action) => {
        switch (action.type) {
          case CLOSE_BUTTON_STATUS:
            return Object.assign([], state, {
              payload: action.payload,
              status: action.status,
            });
          default:
            return state;
        }
      },
    },
  },
});


export const { setCloseState } = CloseSlice.actions;

export const selectCloseState = (state) => state.status.status;

export default CloseSlice.reducer;