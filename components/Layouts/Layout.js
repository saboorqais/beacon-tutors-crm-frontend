import React, { useEffect } from "react";
import dynamic from "next/dynamic";
import Nav from "../Nav/Nav";
import { useRouter } from "next/router";
import {
  ChevronsLeft,
  Settings,
  LogOut,
  Sidebar,
} from "lucide-react";
import MainContainer from "../MainContainer/MainContainer";
import SideBarMenu from "../SideBarMenu/SideBarMenu";
import ListContainer from "../ListContainer/ListContainer";
import {  useDispatch, useSelector } from "react-redux";
import {
  selectCloseState,
} from "../Reducers/CloseState";
import styles from "../Layouts/Layout.module.css";
import { selectLoadingState } from "../Reducers/Loading";
import { selectPageState } from "../Reducers/Pagination";
import { selectInquiries } from "../Reducers/Inquiries";
import SideBar from "../SideBar/SideBar";
export default function Layout({ children }) {
 
  const router = useRouter();
  const Pattern = dynamic(() =>
    import("../../assets/backgroundPattern.svg").then(
      (module) => module.ReactComponent
    )
  )
  const WebView = dynamic(() =>
  import('react-device-detect').then((module) => module.BrowserView)
);
  const CloseState = useSelector(selectCloseState);
  return (
    <div className={styles.mainContainer}>
      {!(router.asPath === "/signin") && (
        <div>
          <SideBar/>
        </div>
      )}

      <div
        className={
          !(router.asPath === "/signin")
            ? `${styles.LeftOverFlex}`
            : `${styles.SignInContainer}`
        }
      >
        <div className={styles.background}>
          <Pattern width="100%" height="100%" />
        </div>

        <Nav />
       

        <div className={styles.pageLayout}>
          <main
          style={{width:"100%" 
       }}
          >{children}</main>
        </div>
      </div>
    </div>
  );
}
