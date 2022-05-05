import { Card, CardContent, Typography } from "@mui/material";
import React from "react";
import classes from "./MeetupCard-Fullpage.module.css";

export default function MeetupCardFullpage(props) {
  return (
    <div className={classes.body}>
      <Card className={classes.card}>
        <CardContent>
          <Typography></Typography>
        </CardContent>
      </Card>
    </div>
  );
}
