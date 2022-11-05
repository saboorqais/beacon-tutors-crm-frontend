import { CHANGE_SIDEBAR_TAB } from "../Action/Sidebarchnager";
import { createSlice } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";
import InquiriesService from "../Services/InquiriesService";
import { useDispatch, useSelector } from "react-redux";
import { LoadingSlice, selectLoadingState, setLoadingState } from "./Loading";
const GET_ALL_INQUIRIES = "GET_ALL_INQUIRIES";
const initialState = {
  payload: [],
};
export const InquiriesSlice = createSlice({
  name: "Inquiries",
  initialState,
  reducers: {
    // Action to set the authentication status
    setAllInquiries(state, action) {
      state.payload = action.payload;
    },

    // Special reducer for hydrating the state. Special case for next-redux-wrapper
    extraReducers: {
      [HYDRATE]: (state = initialState, action) => {
        switch (action.type) {
          case GET_ALL_INQUIRIES:
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

export const getAllInquiries = (id) => async (dispatch) => {
  dispatch(LoadingSlice.actions.setLoadingState(true));
  const response = InquiriesService(id);
  response
    .then((res) => {
      
      dispatch(InquiriesSlice.actions.setAllInquiries(res.data));
      dispatch(LoadingSlice.actions.setLoadingState(false));
    })
    .catch((res) => {
      
    });
};

export const selectInquiries = (state) => state.Inquiries.payload;

export default InquiriesSlice.reducer;
