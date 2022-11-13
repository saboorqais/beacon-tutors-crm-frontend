import React from "react";
import styles from "../TextField/TextField.module.css";
import { TextInput } from "@mantine/core";
import { createTheme, TextField, ThemeProvider } from "@mui/material";
import { OutlinedInput } from "@mui/material";
function TextFields({type,setData,placeholder,Data}) {
  const theme = createTheme({
    palette: {
      primary: {
        main: "#4fc3b1",
        darker: "#4fc3b1",
      },
    },
  });

  return (
    <div className={type==="Contact" || type==="Whatsapp"?`${styles.ContactRow}`:`${styles.infoRow}`}>
       
    {type==="Contact"|| type==="Whatsapp" ?<div className={styles.CountryCode}>+92</div>:""}
      <TextField
      onChange={(evnt)=>{
       setData({...Data,[type]: evnt.target.value})
      }
}
        variant="standard"
        InputProps={{
          disableUnderline: true,
        }}
        fullWidth
        placeholder={placeholder}
        id="fullWidth"
      />
    </div>
  );
}

export default TextFields;
