
import { createSlice } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";

const CLOSE_BUTTON_STATUS_IPAD = 'CLOSE_BUTTON_STATUS_IPAD';
const initialState = {
  status: false,
};
export const CloseSliceIPAD = createSlice({
  name: "statusDrawer",
  initialState,
  reducers: {
    // Action to set the authentication status
    setStateDrawerIPAD(state, action) {
      console.log(state)
      state.status = action.payload;
    },

    // Special reducer for hydrating the state. Special case for next-redux-wrapper
    extraReducers: {
      [HYDRATE]: (state = initialState, action) => {
        switch (action.type) {
          case CLOSE_BUTTON_STATUS_IPAD:
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


export const { setStateDrawerIPAD } = CloseSliceIPAD.actions;

export const selectState = (state) => state.statusDrawer.status;

export default CloseSliceIPAD.reducer;