import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import classes from "./index.module.css";
import { Button, Typography } from "@mui/material";

interface MeetupData {
  title: string;
  location: string;
  description: string;
}

export default function MultilineTextFields() {
  const [title, setTitle] = React.useState();
  const [location, setLocation] = React.useState();
  const [description, setDescription] = React.useState();
  let meetupData: MeetupData;

  //const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  const handleTitleChange = (event: any) => {
    setTitle(event.target.value);
  };

  const handleLocationChange = (event: any) => {
    setLocation(event.target.value);
  };

  const handleDescriptionChange = (event: any) => {
    setDescription(event.target.value);
  };

  const onSubmitHandler = async () => {
    //TODO refactor
    meetupData = {
      title: title,
      location: location,
      description: description,
    };
    saveToDb();
  };

  const saveToDb = async () => {
    console.log(meetupData);
    const data = await fetch("/api/new-meetup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(meetupData),
    });
    const result = await data.json();
    console.log(result);
  };

  return (
    <Box
      className={classes.formWrapper}
      component="form"
      sx={{
        "& .MuiTextField-root": { m: 1, width: "25ch" },
      }}
      noValidate
      autoComplete="off"
    >
      <Typography variant="h4" sx={{ mb: "15px" }}>
        Add your language Meetup!
      </Typography>
      <TextField
        id="outlined-multiline-flexible"
        label="Title of Event"
        multiline
        maxRows={4}
        onChange={(event) => handleTitleChange(event)}
      />
      <TextField
        id="outlined-textarea"
        label="Location"
        placeholder="Placeholder"
        multiline
        onChange={(event) => handleLocationChange(event)}
      />
      <TextField
        id="outlined-multiline-static"
        label="Description"
        multiline
        onChange={(event) => handleDescriptionChange(event)}
        rows={4}
      />
      <Button sx={{ mt: "15px" }} variant="contained" onClick={onSubmitHandler}>
        Submit
      </Button>
    </Box>
  );
}
