import React from 'react'
import Field from '../Field/Field'
import styles from  '../FieldContainer/FieldContainer.module.css'
export default function FieldContainer() {
  return (
    <div 
    className={styles.Container}
    >
<div className={styles.InnerContainer}>
<Field/>
<Field/>
<Field/>
<Field/>
<Field/>
<Field/>
</div>


    </div>
  )
}
