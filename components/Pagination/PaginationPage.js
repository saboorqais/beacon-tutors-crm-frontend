import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import ReactPaginate from "react-paginate";
import styles from "../Pagination/pagination.module.css";

import KeyboardDoubleArrowLeftIcon from "@mui/icons-material/KeyboardDoubleArrowLeft";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { Pagination } from "@mantine/core";
import { usePagination } from "@mantine/hooks";
// Example items, to simulate fetching from another resources.
const items = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
  11, 12, 13, 14, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14.1, 2, 3, 4, 5,
  6, 7, 8, 9, 10, 11, 12, 13, 14.1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13,
  14.1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14,
];

export default function PaginationPage({}) {
  const [activeState, setactiveState] = useState(1);
  const onChange = (event) => {

    setactiveState(event);
  }; // We start with an empty list of items.
  const pagination = usePagination({ total: 10, items, onChange });

  useEffect(() => {
    console.log(activeState);
  }, [activeState]);

  // Invoke when user click to request another page.

  return (
    <div className={styles.ContainerCenter}>
      <div className={styles.MainContainer}>
        <KeyboardDoubleArrowLeftIcon
          onClick={() => {
            setactiveState(pagination.active);
            pagination.first();
          }}
        />
        <KeyboardArrowLeftIcon
          onClick={() => {
            setactiveState(pagination.active);
            pagination.previous();
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
          onClick={() => {
            setactiveState(pagination.active);
            pagination.next();
          }}
        />
        <KeyboardDoubleArrowRightIcon
          onClick={() => {
            setactiveState(pagination.active);
            pagination.last();
          }}
        />
      </div>
    </div>
  );
}
