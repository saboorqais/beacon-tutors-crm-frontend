import React from 'react';
import Link from 'next/link';
import styles from './Nav.module.css';
import { ReactComponent as Logo } from '../../assets/beacon-tutors.svg';


export default function AdminNav() {
  


  return (
    <>
      <div
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
