import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import Nav from "../Nav/Nav";
import { SidePanelList } from "../SidePanelList";
import Link from "next/link";
import { useRouter } from "next/router";
import {
  ChevronsLeft,
  Folder,
  ChevronDown,
  ChevronUp,
  Settings,
  LogOut,
} from "lucide-react";
import MainContainer from "../MainContainer/MainContainer";
import SideBarMenu from "../SideBarMenu/SideBarMenu";
import ListContainer from "../ListContainer/ListContainer";
import { useDispatch, useSelector } from "react-redux";
import {
  selectCloseSlice,
  selectCloseState,
  setCloseState,
} from "../Reducers/CloseState";
import { width } from "@mui/system";
import PaginationPage from "./Pagination/PaginationPage";
export default function Layout({ children }) {
  const router = useRouter();
  const Pattern = dynamic(() =>
    import("../../assets/backgroundPattern.svg").then(
      (module) => module.ReactComponent
    )
  );
  const CloseState = useSelector(selectCloseState);
  const dispatch = useDispatch();

  return (
    <div className="mainContainer">
      <div className="SiderbarFlex">
        {!(router.asPath === "/signin") && (
          <aside
            className="sidebar"
            style={{
              width: CloseState === true ? "300px" : "75px",
            }}
          >
            <div className="CollapseButtonTop">
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
              className="CollapseButtonEnd"
              style={{
                width: CloseState === true ? "300px" : "75px",
              }}
            >
              <div className="EndButton">
                <SideBarMenu icon={<Settings size={40} />} title="Settings" />
              </div>

              <div className="EndButton Action ">
                <SideBarMenu
                  icon={<LogOut size={40} />}
                  action="Action"
                  title="Logout"
                />
              </div>
            </div>
          </aside>
        )}
      </div>
      <div className="LeftOverFlex">
        <div className={"background"}>
          <Pattern width="100%" height="100%" />
        </div>

        <Nav />
        <MainContainer />
        

        <div className={"pageLayout"}>
          <main>{children}</main>
        </div>
      </div>
    </div>
  );
}
