import { useRouter } from "next/router";
import Link from "next/link";
import React, { useRef } from "react";
import { Folder, ChevronDown } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { selectTabState, setTabState } from "./Reducers/SideBarTab";
import { CSSTransition } from "react-transition-group";

export function SidePanelList(props) {
  const router = useRouter();
  const TabState = useSelector(selectTabState);
  const dispatch = useDispatch();
  const nodeRef = useRef(null);

  return (
    <>
      <div
        onClick={() => {
          if (TabState === props.index) {
            dispatch(setTabState(0));
          } else {
            dispatch(setTabState(props.index));
          }
        }}
        className="DropdownSidebar"
      >
        <div className="IconSectionSidebar">
          <Folder size={30} />
        </div>
        <div className="LabelSectionSidebar">{props.sectionName}</div>
        <div className="DropDownSideBarArrow">
          <ChevronDown size={30} />
        </div>
      </div>

      <div
        className={
          TabState === props.index
            ? "DropdownItems HeightGrow "
            : "DropdownItems  HeightChange "
        }
      >
        {TabState === props.index &&
          props.rawInquiry.map(({ href, title }) => (
            <>
              <div style={{ display: "flex" }}>
                <div className="IconSectionSidebar">
                  <Folder size={30} />
                </div>
                <div className="LabelSectionSidebar">{title}</div>
              </div>
            </>
          ))}
      </div>
    </>
  );
}
