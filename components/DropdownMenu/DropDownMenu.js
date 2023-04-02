import * as React from "react";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MoreVertIcon from "@mui/icons-material/MoreVert";

const options = [
  "View Inquiry",
  "View Track",
  "Set Reminder",
  "Delete Inquiry",
];

const CustomButton = (color,key)=>{

return {color:color}

}

const ITEM_HEIGHT = 48;

export default function DropDownMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <IconButton
        aria-label="more"
        id="long-button"
        aria-controls={open ? "long-menu" : undefined}
        aria-expanded={open ? "true" : undefined}
        aria-haspopup="true"
        onClick={handleClick}
      >
        <MoreVertIcon />
      </IconButton>
      <Menu
        id="long-menu"
        MenuListProps={{
          "aria-labelledby": "long-button",
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        PaperProps={{
          style: {
            maxHeight: ITEM_HEIGHT * 4.5,
            
            background: "#FFFFFF",
            border: "1px solid #C1C4CD",
            boxShadow:
              "37px 56px 27px rgba(0, 0, 0, 0.01), 21px 32px 23px rgba(0, 0, 0, 0.02), 9px 14px 17px rgba(0, 0, 0, 0.04), 2px 4px 9px rgba(0, 0, 0, 0.04), 0px 0px 0px rgba(0, 0, 0, 0.04)",
            borderRadius: "10px",
            fontFamily: "Poppins",
            fontStyle: "normal",
            fontWeight: "500",
            fontSize: "16px",
            lineHeight: "18px",
            /* identical to box height */
            marginLeft: "8px",
            marginRight: "8px",
            textAlign: "right",

            color: "#A0A0A1",
          },
        }}
      >
        {options.map((option,key) => (
          <MenuItem
            key={option}
            selected={option === "Pyxis"}
            onClick={handleClose}
            style={key===options.length-1?CustomButton("#F18B97",key):{}}
           
          >

            {option}
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
}
