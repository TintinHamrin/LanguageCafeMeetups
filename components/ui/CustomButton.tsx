import { Button } from "@mui/material";
import React from "react";
//import  {Button}  from "@mui/material";
import classes from "./Button.module.css";

function CustomButton(props) {
  return (
    <Button className={classes.button} size="small" onClick={props.onClick}>
      {props.children}
    </Button>
  );
}

export default CustomButton;
