import React from 'react'
import styles from  '../SelectionBox/SelectionBox.module.css'
function SelectionBox(props) {
  return (
    <div 
    onClick={()=>{
        props.setcity(props.id)
        props.setData({...props.Data,"City":props.value})
    }}
    className={`${props.active===true?`${styles.MainContainer} ${styles.SelectedChoice} `:`${styles.MainContainer} `}`}>
     {props.value}
    </div>
  )
}

export default SelectionBox
