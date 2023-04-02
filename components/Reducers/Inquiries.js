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
  const data=[
    {
      "id": 1,
      "Name": "Abdul saboor",
      "Whatsapp": "+923184536655",
      "City": "Lahore",
      "Contact": "+923184536655",
      "Email": "saboor.qaiser456@gmail.com",
      "Hiring": "Online Tutor",
      "Comments": "Hey"
    },
    {
      "id": 2,
      "Name": "Abdul saboor",
      "Whatsapp": "+923184536655",
      "City": "Lahore",
      "Contact": "+923184536655",
      "Email": "saboor.qaiser456@gmail.com",
      "Hiring": "Online Tutor",
      "Comments": "Hey"
    },
    {
      "id": 3,
      "Name": "Abdul saboor",
      "Whatsapp": "+923184536655",
      "City": "Lahore",
      "Contact": "+923184536655",
      "Email": "saboor.qaiser456@gmail.com",
      "Hiring": "Online Tutor",
      "Comments": "Hey"
    },
    {
      "id": 4,
      "Name": "Abdul saboor",
      "Whatsapp": "+923184536655",
      "City": "Lahore",
      "Contact": "+923184536655",
      "Email": "saboor.qaiser456@gmail.com",
      "Hiring": "Online Tutor",
      "Comments": "Hey"
    },
    {
      "id": 5,
      "Name": "Abdul saboor",
      "Whatsapp": "+923184536655",
      "City": "Lahore",
      "Contact": "+923184536655",
      "Email": "saboor.qaiser456@gmail.com",
      "Hiring": "Online Tutor",
      "Comments": "Hey"
    },
    {
      "id": 6,
      "Name": "Abdul saboor",
      "Whatsapp": "+923184536655",
      "City": "Lahore",
      "Contact": "+923184536655",
      "Email": "saboor.qaiser456@gmail.com",
      "Hiring": "Online Tutor",
      "Comments": "Hey"
    },
    {
      "id": 7,
      "Name": "Abdul saboor",
      "Whatsapp": "+923184536655",
      "City": "Lahore",
      "Contact": "+923184536655",
      "Email": "saboor.qaiser456@gmail.com",
      "Hiring": "Online Tutor",
      "Comments": "Hey"
    },
    {
      "id": 8,
      "Name": "Abdul saboor",
      "Whatsapp": "+923184536655",
      "City": "Lahore",
      "Contact": "+923184536655",
      "Email": "saboor.qaiser456@gmail.com",
      "Hiring": "Online Tutor",
      "Comments": "Hey"
    },
    {
      "id": 10,
      "Name": "Abdul saboor",
      "Whatsapp": "+923184536655",
      "City": "Lahore",
      "Contact": "+923184536655",
      "Email": "saboor.qaiser456@gmail.com",
      "Hiring": "Online Tutor",
      "Comments": "Hey"
    },
    {
      "id": 11,
      "Name": "Abdul saboor",
      "Whatsapp": "+923184536655",
      "City": "Lahore",
      "Contact": "+923184536655",
      "Email": "saboor.qaiser456@gmail.com",
      "Hiring": "Online Tutor",
      "Comments": "Hey"
    }
  ]
  function createMockPromise(result, delay) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (result) {
          resolve(result);
        } else {
          reject('Error: No result provided');
        }
      }, delay || 0);
    });
  }
  const myPromise = createMockPromise('Hello, World!', 2000);

myPromise.then(result => {
  dispatch(InquiriesSlice.actions.setAllInquiries(data));
  dispatch(LoadingSlice.actions.setLoadingState(false));
  // Output: Hello, World!
}).catch(error => {
  console.error(error); // Output: Error: No result provided
});
/*   const response = InquiriesService(id);
  response
    .then((res) => {
      
     
      dispatch(InquiriesSlice.actions.setAllInquiries(res.data));
      dispatch(LoadingSlice.actions.setLoadingState(false));
    })
    .catch((res) => {
      
    }); */
};

export const selectInquiries = (state) => state.Inquiries.payload;

export default InquiriesSlice.reducer;
