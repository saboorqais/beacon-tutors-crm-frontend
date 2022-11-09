import { useRouter } from "next/router";
import Link from "next/link";
import React, { useRef } from "react";
import { Folder, ChevronDown } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { selectTabState, setTabState } from "./Reducers/SideBarTab";
import { CSSTransition } from "react-transition-group";
import { selectCloseState } from "./Reducers/CloseState";

export function SidePanelList(props) {
 
  const TabState = useSelector(selectTabState);
  const dispatch = useDispatch();
  const CloseState = useSelector(selectCloseState);
  console.log(props)

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
        <div
        style={{
          display:CloseState===true?"block":"none"
        }}
        className="LabelSectionSidebar">{props.sectionName}</div>
        <div 
        style={{
          display:CloseState===true?"block":"none"
        }}
        className="DropDownSideBarArrow">
          <ChevronDown size={30} />
        </div>
      </div>

      <div
        className={
          "DropdownItems"
        }
        style={{height:
          TabState === props.index?((props.rawInquiry.length*75).toString()+"px"):"0px"
        }}
      >
        {
          props.rawInquiry.map(({ href, title }) => (
            <>
              <a style={{display: TabState === props.index? "flex":"none",

            }}
            className="AnchorTag"
            href={href}
            title={title}
              >
                <div className="IconSectionSidebarDropdown">
                  <Folder size={30} />
                </div>
                <div 
                
             
                className="LabelSectionSidebar">{title}</div>
              </a>
            </>
          ))}
      </div>
    </>
  );
}
