
import React from "react";
import styles from "../SideBarMenu/SideBarMenu.module.css";
import { useDispatch, useSelector } from "react-redux";
import { selectCloseState,setCloseState } from "../Reducers/CloseState";
function SideBarMenu(props) {
  const CloseState = useSelector(selectCloseState);
  const dispatch = useDispatch();
  console.log(CloseState)
  return (
    <div
      className={`${styles.CollapseButton} ${
        props.action ? styles.Action : " "
      }`}
    >
      <div
        className={styles.ChevronsLeft}
        onClick={() => {
          dispatch(setCloseState(!CloseState))
        }}
      >
        {props.icon}
      </div>
      <div 
      style={{
        display:CloseState===true?"block":"none",
        color:CloseState===true?"#FFFFFF":"none"
      }}
      className={styles.CollapseText}>{props.title}</div>
    </div>
  );
}

export default SideBarMenu;
