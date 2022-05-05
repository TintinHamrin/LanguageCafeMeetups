import { Box, Grid } from "@mui/material";
import React from "react";
import classes from "./MeetupBox.module.css";

function MeetupBox({ children }) {
  return (
    <div className={classes.body}>
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
