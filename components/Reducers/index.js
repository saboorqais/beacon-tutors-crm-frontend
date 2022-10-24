import { combineReducers } from "redux";
import SideBarTab, { TabsSlice } from "./SideBarTab";
import { configureStore } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";

const makeStore = () =>
  configureStore({
    reducer: {
      [TabsSlice.name]: TabsSlice.reducer,
    },
    devTools: true,
  });



export const wrapper = createWrapper(makeStore);