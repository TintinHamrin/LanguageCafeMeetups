//MOVE THE FIRST PAGE TEXT HERE

import { Box, Typography } from "@mui/material";
import React from "react";
import classes from "./index.module.css";

export default function InfoBox() {
  return (
    <div id="id" className={classes.wrapper}>
      <Box className={classes.boxDiv}>
        <Typography
          className={classes.textDiv}
          variant="body1"
          textAlign="center"
          sx={{ margin: "3rem" }}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio vel
          dolore pariatur expedita quod explicabo ipsam assumenda, asperiores
          accusamus nihil laborum mollitia impedit fugiat consequuntur odio
          magnam velit delectus sapiente quibusdam atque id vero repudiandae
          architecto itaque!
        </Typography>
      </Box>
    </div>
  );
}
