import { Button, ButtonClasses } from "@mui/material";
import React, { FormEvent, MouseEventHandler, ReactNode } from "react";
//import  {Button}  from "@mui/material";
import classes from "./Button.module.css";

// TODO why do i have to do this?
type Props = {
  onClick?: MouseEventHandler<HTMLButtonElement>;
  children: ReactNode;
  className?: string;
};

function CustomButton({ children, onClick }: Props) {
  return (
    <Button className={classes.button} size="small" onClick={onClick}>
      {children}
    </Button>
  );
}

export function CustomButtonDisabled({ children, onClick }: Props) {
  return (
    <Button disabled className={classes.button} size="small" onClick={onClick}>
      {children}
    </Button>
  );
}

export default CustomButton;
