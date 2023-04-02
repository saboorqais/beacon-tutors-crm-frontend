import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import ReactPaginate from "react-paginate";
import styles from "../PaginationPage/pagination.module.css";

import KeyboardDoubleArrowLeftIcon from "@mui/icons-material/KeyboardDoubleArrowLeft";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { Pagination } from "@mantine/core";
import { usePagination } from "@mantine/hooks";
import { useSelect } from "@mui/base";
import { selectInquiries } from "../Reducers/Inquiries";
import { useDispatch, useSelector } from "react-redux";
import { selectPageState, setPositiontate } from "../Reducers/Pagination";
import { GetTotal } from "../Services/InquiriesService";
// Example items, to simulate fetching from another resources.
const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 1, 2, 3, 4, ,];

export default function PaginationPage({}) {
  const Inquiries = useSelector(selectInquiries);
  const [activeState, setactiveState] = useState(1);
  const [total, settotal] = useState();
  const onChange = (event) => {
    console.log("Change run")
    setactiveState(event);
  };
  // We start with an empty list of items.
  const dispatch = useDispatch();
  const PageState = useSelector(selectPageState);
  const pagination = usePagination({
    total: Math.ceil(
      parseInt(
        total ? (total % 9 == 0 ? total / 9 : parseInt(total / 9) + 1) : 0
      )
    ),
    Inquiries,
    setactiveState,
  });
  console.log(PageState)
  useEffect(() => {
   
    console.log("USeEffect")
    const request = GetTotal();
    request.then((res) => {
      settotal(res.data.length);
    });
  }, [Inquiries, PageState,pagination.range]);

 



  // Invoke when user click to request another page.

  return (
    <div className={styles.ContainerCenter}>
      <div className={styles.MainContainer}>
        <KeyboardDoubleArrowLeftIcon
         style={{
          color:" #17243A"
        }}
          onClick={() => {
          
            pagination.first();
    
            dispatch(setPositiontate(pagination.range.at(0)));
          }}
        />
        <KeyboardArrowLeftIcon
         style={{
          color:" #17243A"
        }}
          onClick={() => {
            pagination.previous();
            
            dispatch(setPositiontate(pagination.active));
          }}
        />

        {pagination.range.map((value, index) =>
          value === "dots" ? (
            <div className={`${styles.PaginateButton}}`}>...</div>
          ) : (
            <div
              onClick={() => {
                pagination.setPage(value);
                setactiveState(value);
                dispatch(setPositiontate(value));
              }}
              className={`${styles.PaginateButton}  ${
                activeState === value ? styles.Active : ""
              }`}
            >
              {value}
            </div>
          )
        )}

        <KeyboardArrowRightIcon
        style={{
          color:" #17243A"
        }}
          onClick={() => {
            console.log(pagination.active)
            pagination.next();
            console.log(pagination.range)
            console.log(pagination.active)

            dispatch(setPositiontate(pagination.active));
          }}
        />
      
        <KeyboardDoubleArrowRightIcon
         style={{
          color:" #17243A"
        }}
          onClick={() => {
            pagination.last(); 
            console.log(pagination.range)
            console.log(pagination.active)
            dispatch(setPositiontate(pagination.range.at(-1)));
          }}
        />
    
        
      </div>
    </div>
  );
}
