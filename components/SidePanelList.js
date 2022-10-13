import {useRouter} from "next/router";
import Link from "next/link";
import React from "react";
import {  Folder, ChevronDown,  } from "lucide-react";
export function SidePanelList(props) {

    const router = useRouter();

    return <>
                <div
                        className="DropdownSidebar">
                        <div className="IconSectionSidebar">
                          <Folder size={30} />
                        </div>
                        <div className="LabelSectionSidebar">{props.sectionName}</div>
                        <div className="DropDownSideBarArrow">
                          <ChevronDown size={30} />
                        </div>
                      </div>
                      <div className={"DropdownItems " }>
                    {props.rawInquiry.map(({href, title}) => (
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
        ;
}