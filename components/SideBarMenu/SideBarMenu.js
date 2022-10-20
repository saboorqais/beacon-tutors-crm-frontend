import { ChevronsLeft, LogOut, Settings } from "lucide-react";
import React from "react";
import styles from "../SideBarMenu/SideBarMenu.module.css";

function SideBarMenu(props) {
  return (
    <div
      className={`${styles.CollapseButton} ${
        props.action ? styles.Action : " "
      }`}
    >
      <div
        className={styles.ChevronsLeft}
        onClick={() => {
          if (props.open) {
            props.open(true);
          }
        }}
      >
        {props.icon}
      </div>
      <div className={styles.CollapseText}>{props.title}</div>
    </div>
  );
}

export default SideBarMenu;
