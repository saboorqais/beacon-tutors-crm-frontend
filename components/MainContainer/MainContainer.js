import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import FieldContainer from "../FieldContainer/FieldContainer";
import Loading from "../Loading/Loading";
import styles from "../MainContainer/MainContainer.module.css";
import PaginationPage from "../Pagination/PaginationPage";
import { getAllInquiries, selectInquiries } from "../Reducers/Inquiries";
import { selectLoadingState, setLoadingState } from "../Reducers/Loading";
import { selectPageState } from "../Reducers/Pagination";

function MainContainer() {
  const Inquiries = useSelector(selectInquiries);
  const PageState = useSelector(selectPageState);
  const LoadingState = useSelector(selectLoadingState);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllInquiries(PageState))  
  }, [PageState]);
  {
    console.log(Inquiries);
  }

  return (
    <div className={styles.MainContainer}>
      <div className={styles.HeadingContainer}>
        <div className={styles.Heading}>Demo Processing</div>
        <div className={styles.TabsHeading}>
          <div className={`${styles.IndividualTab} TypographyTabs`}>
            Demo Reminders/Calling
          </div>
          <div className={`${styles.IndividualTab} TypographyTabs`}>
            Client Formalities
          </div>
          <div className={`${styles.IndividualTab} TypographyTabs`}>
            T Formalities
          </div>
          <div className={`${styles.IndividualTab} TypographyTabs`}>
            Day-1 Processing
          </div>
          <div className={`${styles.IndividualTab} TypographyTabs`}>
            Day-2 Processing
          </div>
          <div className={`${styles.IndividualTab} TypographyTabs`}>
            Extended Demo
          </div>
          <div className={`${styles.IndividualTab} TypographyTabs`}>
            Client Reviewing
          </div>
        </div>
      </div>
      <FieldContainer />
      <PaginationPage />
      {LoadingState && <Loading loading={true} />}
    </div>
  );
}

export default MainContainer;
