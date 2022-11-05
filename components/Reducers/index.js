import { applyMiddleware, combineReducers } from "redux";
import SideBarTab, { TabsSlice } from "./SideBarTab";
import { configureStore } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";
import { CloseSlice } from "./CloseState";
import thunk from "redux-thunk";
import { InquiriesSlice } from "./Inquiries";
import Pagination, { PaginationSlice } from "./Pagination";
import Loading from "../Loading/Loading";
import { LoadingSlice } from "./Loading";




const middleware = [thunk];

const makeStore = () =>
  configureStore({
    reducer: {
      [TabsSlice.name]: TabsSlice.reducer,
      [CloseSlice.name]:CloseSlice.reducer,
      [InquiriesSlice.name]:InquiriesSlice.reducer,
      [PaginationSlice.name]:PaginationSlice.reducer,
      [LoadingSlice.name]:LoadingSlice.reducer,
    },
  
    devTools: true,
  }
  ,  applyMiddleware(...middleware));



export const wrapper = createWrapper(makeStore);