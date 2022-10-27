import React from "react";
import FieldContainer from "../FieldContainer/FieldContainer";
import styles from '../MainContainer/MainContainer.module.css'
import PaginationPage from "../Pagination/PaginationPage";

function MainContainer() {
  return (
    <div className={styles.MainContainer}>
      <div className={styles.HeadingContainer}>
        <div className={styles.Heading}>Demo Processing</div>
        <div className={styles.TabsHeading}>
          <div className={`${styles.IndividualTab} TypographyTabs`}>
            Demo Reminders/Calling
          </div>
          <div className={`${styles.IndividualTab} TypographyTabs`}>Client Formalities</div>
          <div className={`${styles.IndividualTab} TypographyTabs`}>T Formalities</div>
          <div className={`${styles.IndividualTab} TypographyTabs`}>Day-1 Processing</div>
          <div className={`${styles.IndividualTab} TypographyTabs`}>Day-2 Processing</div>
          <div className={`${styles.IndividualTab} TypographyTabs`}>Extended Demo</div>
          <div className={`${styles.IndividualTab} TypographyTabs`}>Client Reviewing</div>
        </div>
      </div>
      <FieldContainer/>
      <PaginationPage/>
    
    </div>
  );
}

export default MainContainer;
