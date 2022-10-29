import React from "react";
import DropDownMenu from "../DropdownMenu/DropDownMenu";
import styles from "../Field/Field.module.css";

export default function Field({ name, setopened, opened }) {
  return (
    <div className={styles.Field}>
      <div className={styles.newLabel}>
        <DropDownMenu />
      </div>
      <div
      className={styles.Container}
        onClick={() => {
          setopened(!opened);
        }}
      >
        <div className={styles.Heading}>{name}</div>
        <div className={styles.Date}>
          <div>Submitted 12 minutes ago</div>
        </div>
        <div className={styles.BottomContainer}>
          <div className={styles.FieldButtonContainer}>
            <div className={styles.MarginLeft12}>&lt;</div>
            <div>Move Inquiry</div>
            <div className={styles.MarginRight12}>&gt;</div>
          </div>
        </div>
      </div>
    </div>
  );
}
