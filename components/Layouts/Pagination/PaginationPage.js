import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import ReactPaginate from 'react-paginate';
import styles from '../Pagination/pagination.module.css'

import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight'
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight'
// Example items, to simulate fetching from another resources.
const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14,1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14,1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14.1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14.1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14.1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];

function Items({ currentItems }) {
  return (
    <>
      {currentItems &&
        currentItems.map((item) => (
          <div>
            <h3>Item #{item}</h3>
          </div>
        ))}
    </>
  );
}

export default function PaginationPage({ itemsPerPage=4}) {
  // We start with an empty list of items.
  const [currentItems, setCurrentItems] = useState(null);
  const [pageCount, setPageCount] = useState(0);
  // Here we use item offsets; we could also use page offsets
  // following the API or data you're working with.
  const [itemOffset, setItemOffset] = useState(0);

  useEffect(() => {
    // Fetch items from another resources.
    const endOffset = itemOffset + itemsPerPage;
    console.log(`Loading items from ${itemOffset} to ${endOffset}`);
    setCurrentItems(items.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(items.length / itemsPerPage));
  }, [itemOffset, itemsPerPage]);

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % items.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };

  return (
    <>
    
{/*      
      <KeyboardDoubleArrowLeftIcon/>
      <KeyboardArrowLeftIcon/>
      <div className={styles.PaginateButton}>1</div>
      <div className={styles.PaginateButton}>2</div>
      <div className={styles.PaginateButton}>3</div>
      <div>...</div>
      <div className={`${styles.PaginateButton} ${styles.Active}`}>10</div>
      <div className={styles.PaginateButton}>11</div>
      <div className={styles.PaginateButton}>12</div>
      <KeyboardArrowRightIcon/>
      <KeyboardDoubleArrowRightIcon/>
     </div> */}
       <div
       
       className={styles.MainContainer} >
         <KeyboardDoubleArrowLeftIcon/>
       <ReactPaginate 
     className={styles.PaginateContainer}
     containerClassName={styles.PagingContainer}
        breakLabel="..."  
        activeClassName={styles.Active}
        nextLabel={<KeyboardArrowRightIcon/> }  
        onPageChange={handlePageClick}  
        DisplayedPageRange = {1}  
        pageCount={pageCount}  
        previousLabel={<KeyboardArrowLeftIcon/>}  
        renderOnZeroPageCount={null}  
      />  
      <KeyboardDoubleArrowRightIcon/>
        </div>
     
      
    </>
  );
}