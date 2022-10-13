import React from 'react';
import Link from 'next/link';
import styles from './Nav.module.css';
import { ReactComponent as Logo } from '../../assets/beacon-tutors.svg';


export default function Nav() {
  
  return (
    <>
      <div
      style={{boxShadow:"0px 61px 37px rgba(23, 36, 58, 0.02), 0px 27px 27px rgba(23, 36, 58, 0.03), 0px 7px 15px rgba(23, 36, 58, 0.03), 0px 0px 0px rgba(23, 36, 58, 0.03);"}}
        className={`${styles.nav} ${styles.adminNav} ${styles.center}`}
      >
        <div className={styles.logo}>
          <Logo height="25px" width="200px" />
          <Link href="/">Logo</Link>
        </div>
      </div>
    </>
  );
}
