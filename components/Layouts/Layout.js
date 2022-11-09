import React, { useEffect } from "react";
import dynamic from "next/dynamic";
import Nav from "../Nav/Nav";
import { useRouter } from "next/router";
import {
  ChevronsLeft,
  Settings,
  LogOut,
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
export default function Layout({ children }) {
 
  const router = useRouter();
  const Pattern = dynamic(() =>
    import("../../assets/backgroundPattern.svg").then(
      (module) => module.ReactComponent
    )
  );
  const CloseState = useSelector(selectCloseState);
  return (
    <div className={styles.mainContainer}>
      {!(router.asPath === "/signin") && (
        <div>
          <aside
            className={styles.sidebar}
            style={{
              width: CloseState === true ? "300px" : "75px",
            }}
          >
            <div className={styles.CollapseButtonTop}>
              <SideBarMenu
                style={{
                  width: CloseState === true ? "300px" : "75px",
                }}
                icon={<ChevronsLeft size={40} />}
                title="Collapse"
              />
            </div>

            <ListContainer />

            <div
              className={styles.CollapseButtonEnd}
              style={{
                width: CloseState === true ? "300px" : "75px",
              }}
            >
              <div className={styles.EndButton}>
                <SideBarMenu icon={<Settings size={40} />} title="Settings" />
              </div>

              <div className={`${styles.EndButton}`}>
                <SideBarMenu
                  icon={<LogOut size={40} />}
                  action="Action"
                  title="Logout"
                />
              </div>
            </div>
          </aside>
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
          <main>{children}</main>
        </div>
      </div>
    </div>
  );
}
