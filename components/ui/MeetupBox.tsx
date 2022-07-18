import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import classes from "./MeetupBox.module.css";

function MeetupBox({ children, city }: { children: any; city: any }) {
  return (
    <div className={classes.body}>
      <Typography className={classes.header} variant="overline">
        Meetups in <span> {city}</span>
      </Typography>
      <Box sx={{ flexGrow: 1 }} className={classes.box}>
        <Grid
          className={classes.cardContainer}
          container
          rowSpacing={5}
          columnSpacing={5}
        >
          {children}
        </Grid>
      </Box>
    </div>
  );
}

export default MeetupBox;
