import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { Card, CardContent, Typography } from "@mui/material";
import classes from "./index.module.css";
import { useRouter } from "next/router";

// if (process.browser) {
//   const parallax = document.getElementById("id");
//   window.addEventListener("scroll", () => {
//     let offset = window.pageYOffset;
//     parallax.style.backgroundPositionY = offset * 0.2 + "px";
//   });
// }

// if (process.browser) {
//   const parallax = document.getElementById("id2");
//   window.addEventListener("scroll", () => {
//     let offset = window.pageYOffset + 5000;
//     parallax.style.backgroundPositionY = offset * 0.7 + "px";
//   });
// }

export default function BasicSelect() {
  const router = useRouter();

  const handleChange = (event: SelectChangeEvent) => {
    console.log(event.target.value);
    router.push("/cities/" + event.target.value);
  };

  return (
    <>
      <Box className={classes.selectionDiv}></Box>

      <div id="id" className={classes.wrapper}>
        <Box className={classes.boxDiv}>
          <div className={classes.x}>
            <Typography variant="h5" textAlign="center">
              Select your city:
            </Typography>
            <FormControl className={classes.formControl}>
              <InputLabel className={classes.inputLabel}>City</InputLabel>
              <Select value={""} label="City" onChange={handleChange}>
                <MenuItem value={"newyork"}>New York</MenuItem>
                <MenuItem value={"miami"}>Miami</MenuItem>
                <MenuItem value={"colorado"}>Colorado</MenuItem>
              </Select>
            </FormControl>
          </div>
        </Box>

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
            architecto itaque
          </Typography>
        </Box>
      </div>
      <div id="id" className={classes.wrapper}>
        <Box className={classes.boxDiv}>
          <Typography
            className={classes.textDiv}
            variant="body1"
            textAlign="center"
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio vel
            dolore pariatur expedita quod explicabo ipsam assumenda, asperiores
            accusamus nihil laborum mollitia impedit fugiat consequuntur odio
            magnam velit delectus sapiente quibusdam atque id vero repudiandae
            architecto itaque!
          </Typography>
        </Box>
      </div>
      <div id="id" className={classes.wrapper}>
        <Box className={classes.boxDiv}>
          <Typography
            className={classes.textDiv}
            variant="body1"
            textAlign="center"
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio vel
            dolore pariatur expedita quod explicabo ipsam assumenda, asperiores
            accusamus nihil laborum mollitia impedit fugiat consequuntur odio
            magnam velit delectus sapiente quibusdam atque id vero repudiandae
            architecto itaque!
          </Typography>
        </Box>
      </div>
      <div className={classes.wrapper}>
        <Box className={classes.smallBoxDiv}>
          <Typography
            className={classes.textDiv}
            variant="h3"
            textAlign="center"
          >
            Keep discovering and learning...
          </Typography>
        </Box>
      </div>
      <div id="id2" className={classes.wrapper}>
        <Box className={classes.boxDiv}>
          <Typography
            className={classes.textDiv}
            variant="body1"
            textAlign="center"
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio vel
            dolore pariatur expedita quod explicabo ipsam assumenda, asperiores
            accusamus nihil laborum mollitia impedit fugiat consequuntur odio
            magnam velit delectus sapiente quibusdam atque id vero repudiandae
            architecto itaque!
          </Typography>
        </Box>
      </div>
    </>
  );
}
