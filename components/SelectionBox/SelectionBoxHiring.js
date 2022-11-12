import React from 'react'
import styles from  '../SelectionBox/SelectionBox.module.css'

function SelectionBoxHiring(props) {
  return (
    <div
    onClick={()=>{
        props.sethiring(props.id)
        props.setData({...props.Data,"Hiring":props.value})
    }}
    
    className={`${props.active===true?`${styles.MainContainer} ${styles.SelectedChoice} `:`${styles.MainContainer} `}`}>
     {props.value}
    </div>
  )
}

export default SelectionBoxHiring
