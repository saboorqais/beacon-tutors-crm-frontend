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
import FieldContainer from "./FieldContainer/FieldContainer";
export default function Layout({ children }) {
  const router = useRouter();
  const [dropdownState, setdropdownState] = useState("displayOFF");
  const Pattern = dynamic(() =>
    import("../../assets/backgroundPattern.svg").then(
      (module) => module.ReactComponent
    )
  );

  return (
    <div className="mainContainer">
      <div className="SiderbarFlex">
        {!(router.asPath === "/signin") && (
          <aside className="sidebar">
            <SideBarMenu icon={<ChevronsLeft size={40} />} title="Collapse" />
            <ListContainer />

            <div className="CollapseButtonEnd">
              <div className="EndButton ">
                <SideBarMenu icon={<Settings size={40} />} title="Settings" />
              </div>
              <div className="EndButton Action">
                <div className="EndButton Action ">
                  <SideBarMenu
                    icon={<LogOut size={40} />}
                    action="Action"
                    title="Logout"
                  />
                </div>
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
