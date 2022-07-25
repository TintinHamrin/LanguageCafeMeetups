import { Button } from "@mui/material";
import React, { MouseEventHandler, ReactNode } from "react";
import classes from "./Button.module.css";

type Props = {
  onClick?: MouseEventHandler<HTMLButtonElement>;
  children: ReactNode;
  className?: string;
};

function CustomButton({ children, onClick, className }: Props) {
  return (
    <Button
      className={className || classes.button}
      size="small"
      onClick={onClick}
    >
      {children}
    </Button>
  );
}

export function CustomButtonDisabled({ children, onClick, className }: Props) {
  return (
    <Button
      disabled
      className={className || classes.button}
      size="small"
      onClick={onClick}
    >
      {children}
    </Button>
  );
}

export default CustomButton;
