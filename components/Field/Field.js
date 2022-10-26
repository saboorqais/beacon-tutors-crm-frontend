import React from "react";
import DropDownMenu from "../DropdownMenu/DropDownMenu";
import styles from "../Field/Field.module.css";
import { CalendarTime } from "tabler-icons-react";
import { BrandWhatsapp } from 'tabler-icons-react';
export default function Field() {
  return (
    <div className={styles.Field}>
      <div className={styles.newLabel}>
        <DropDownMenu />
      </div>
      <div className={styles.Heading}>Jessica Williams</div>
      <div className={styles.Date}>
        <div>Submitted 12 minutes ago</div>
        <div
          className={styles.IconWrapperDate}
          style={{
            color: "#F18B97",
          }}
        >
          <CalendarTime color="#F18B97" />
          12:35AM 9/16/22
        </div>
      </div>
<div className={styles.BottomContainer}>
<div className={styles.FieldButtonContainer}>
        <div
        className={styles.MarginLeft12}
        >&lt;</div>
        <div>Move Inquiry</div>
        <div
          className={styles.MarginRight12}
        >&gt;</div>
       
      </div >
      <div className={styles.BottomIconWrapper}>
      <BrandWhatsapp color={"green"}/>
      </div>
    
</div>
     
    </div>
  );
}
