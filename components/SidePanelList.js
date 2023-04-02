import { useRouter } from "next/router";
import Link from "next/link";
import React, { useRef } from "react";
import { Folder, ChevronDown } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { selectTabState, setTabState } from "./Reducers/SideBarTab";
import { CSSTransition } from "react-transition-group";
import { selectCloseState } from "./Reducers/CloseState";
import styles from "../components/SidePanelList.module.css";
import { selectState, setStateDrawerIPAD } from "./Reducers/IpadViewDrawer";
import { TruckDelivery } from "tabler-icons-react";
export function SidePanelList(props) {
  const TabState = useSelector(selectTabState);
  const dispatch = useDispatch();
  const CloseState = useSelector(selectCloseState);
  const drawerState = useSelector(selectState)
console.log(props.index-1)
  return (
    <>
      <div
        className={`${styles.DropdownSidebar}  ${ TabState === props.index? `${styles.ActiveState}`:"" }     `}
        onClick={() => {
          if (TabState === props.index) {
            dispatch(setTabState(0));
            dispatch(setStateDrawerIPAD(false))
          } else {
            dispatch(setTabState(props.index));
           dispatch(setStateDrawerIPAD(true))
          }
        }}
      >
        <div className={styles.IconSectionSidebar}>
          <Folder size={30} />
        </div>
        <div
          style={{
            display: CloseState === true ? "block" : "none",
          }}
          className={styles.LabelSectionSidebar}
        >
          {props.sectionName}
        </div>
        <div
          style={{
            display:
              CloseState === true
                ? `${styles.Display}`
                : `${styles.DisplayNone}`,
          }}
          className={styles.DropDownSideBarArrow}
        >
          <ChevronDown size={30} />
        </div>
      </div>

      <div
        className={styles.DropdownItems}
        style={{
          height:
            TabState === props.index
              ? (props.rawInquiry.length * 75).toString() + "px"
              : "0px",
        }}
      >
        {props.rawInquiry.map(({ href, title }) => (
          <>
            <a
              style={{ display: TabState === props.index ? "flex" : "none" }}
              className={styles.AnchorTag}
              href={href}
              title={title}
            >
              <div className="IconSectionSidebarDropdown">
                <Folder size={30} />
              </div>
              <div className={styles.LabelSectionSidebar}>{title}</div>
            </a>
          </>
        ))}
      </div>
    </>
  );
}
