import "../styles/globals.css";
import dynamic from "next/dynamic";
import "../styles/globals.scss";
import { configureStore } from "@reduxjs/toolkit";
import SideBarTab from "../components/Reducers/SideBarTab";
import { Provider } from "react-redux";
import { wrapper } from "../components/Reducers";
import React from "react";
const store = configureStore({
  reducer: {
    Tabs: SideBarTab,
  },
});

function MyApp({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page);
  const Toaster = dynamic(() =>
    import("react-hot-toast").then((module) => module.Toaster)
  );

  return getLayout(
    <>
      <Toaster
        position="bottom-right"
        containerStyle={{
          zIndex: "10000001",
        }}
        toastOptions={{
          className: "toast",
          duration: 5000,
          success: {
            iconTheme: {
              primary: "#4FC3B1",
            },
          },
          error: {
            iconTheme: {
              primary: "#FF6F66",
            },
          },
          style: {
            zIndex: "10000000 !important",
          },
        }}
      />
       <React.StrictMode>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
      </React.StrictMode>
    </>
  );
}

export default wrapper.withRedux(MyApp);