import { useRouter } from "next/router";
import Link from "next/link";
import React from "react";
import { Folder, ChevronDown } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { selectTabState ,setTabState} from "./Reducers/SideBarTab";


export function SidePanelList(props) {
  console.log(props.key)
  const router = useRouter();
  const TabState = useSelector(selectTabState);
  const dispatch = useDispatch();
  return (
    <>
      <div
       onClick={()=>{
        dispatch(setTabState(props.key))
       console.log(TabState)
      }}
      className="DropdownSidebar">
        <div
       
        className="IconSectionSidebar">
          <Folder size={30} />

        </div>
        <div className="LabelSectionSidebar">{props.sectionName}</div>
        <div className="DropDownSideBarArrow">
          <ChevronDown size={30} />
        </div>
      </div>
      <div className={"DropdownItems displayOFF"}>
        {props.rawInquiry.map(({ href, title }) => (
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
