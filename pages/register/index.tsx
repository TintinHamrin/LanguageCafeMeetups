import {
  Box,
  Button,
  Card,
  CardContent,
  TextField,
  Typography,
} from "@mui/material";
import React, { useRef, useState } from "react";
import classes from "./index.module.css";

export default function index() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [mail, setMail] = useState("");

  const handleNameChange = (event) => {
    setName(event.target.value);
    console.log(name);
  };

  const handlePhoneChange = (event) => {
    setPhone(event.target.value);
  };

  const handleMailChange = (event) => {
    setMail(event.target.value);
  };

  return (
    <div className={classes.body}>
      <Card className={classes.card}>
        <CardContent>
          <Box
            className={classes.formWrapper}
            component="form"
            noValidate
            autoComplete="off"
          >
            <Typography variant="h4" sx={{ mb: "15px" }}>
              Register for meetup
            </Typography>
            <TextField
              fullWidth
              id="outlined-textarea"
              label="First and last name"
              onChange={(event) => handleNameChange(event)}
            />
            <TextField
              fullWidth
              id="outlined-multiline-static"
              label="Phone number"
              onChange={(event) => handlePhoneChange(event)}
            />
            <TextField
              fullWidth
              id="outlined-multiline-static"
              label="Email"
              onChange={(event) => handleMailChange(event)}
            />
            <Button fullWidth variant="contained">
              Submit
            </Button>
          </Box>
        </CardContent>
      </Card>
    </div>
  );
}
