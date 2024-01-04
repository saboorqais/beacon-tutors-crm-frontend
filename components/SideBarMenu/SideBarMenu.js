import React from "react";
import styles from "../SideBarMenu/SideBarMenu.module.css";
import { useDispatch, useSelector } from "react-redux";
import { selectCloseState, setCloseState } from "../Reducers/CloseState";
function SideBarMenu(props) {
  const CloseState = useSelector(selectCloseState);
  const dispatch = useDispatch();
  return (
    <div
      className={` ${props.action
          ? props.action === "Action" ? `${styles.Action} ${styles.ActionButton}` : ` ${styles.ActionButton}`
          : ` ${styles.CollapseButton}`
        }`}
    >
      <div
        className={ CloseState ?styles.ChevronsLeft : styles.rotateRight}
        onClick={() => {
          props.action === "Action" ? "" :
            dispatch(setCloseState(!CloseState))
        }}
      >
        {props.icon}
      </div>
      <div
        style={{
          display: CloseState === true ? `${styles.Display}` : `${styles.NonDisplay}`,
          color: CloseState === true ? "#FFFFFF" : "none",
        }}
        className={`${props.title === "Collapse" ? `${styles.CollapseText}` : `${styles.NoCollapseText}`}`}
      >
        {props.title}
      </div>
    </div>
  );
}

export default SideBarMenu;
