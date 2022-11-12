import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Addform from "../Addform/Addform";
import FieldContainer from "../FieldContainer/FieldContainer";
import { HeaderMapping, MappingList } from "../ListContainer/ListContainer";
import Loading from "../Loading/Loading";
import styles from "../MainContainer/MainContainer.module.css";
import PaginationPage from "../Pagination/PaginationPage";
import { getAllInquiries, selectInquiries } from "../Reducers/Inquiries";
import { selectLoadingState, setLoadingState } from "../Reducers/Loading";
import { selectPageState } from "../Reducers/Pagination";

function MainContainer({ selectedSubSection, selectedSection }) {
  const Inquiries = useSelector(selectInquiries);
  const PageState = useSelector(selectPageState);
  const LoadingState = useSelector(selectLoadingState);
  const router = useRouter();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllInquiries(PageState));
  }, [PageState]);


  return (
    <div className={styles.MainContainer}>
      <div className={styles.HeadingContainer}>
        <div className={styles.Heading}>{HeaderMapping[selectedSection]}</div>
        <div className={styles.TabsHeading}>
          {MappingList[selectedSection]?.map((item) => (
            <Link href={item.href}>
              <div
                className={`${styles.IndividualTab} TypographyTabs `}
                style={{
                  backgroundColor:
                    item.key === selectedSubSection ? "#061537" : "white",
                  color: item.key === selectedSubSection ? "white" : "black",
                }}
              >
                {item.title}
              </div>
            </Link>
          ))}
        </div>
      </div>
      {router.asPath === "/addInquiry" ? (
        
          <Addform />
        
      ) : (
        <>
          <FieldContainer />
          <PaginationPage />
        </>
      )}

      {LoadingState && <Loading loading={true} />}
    </div>
  );
}

export default MainContainer;
