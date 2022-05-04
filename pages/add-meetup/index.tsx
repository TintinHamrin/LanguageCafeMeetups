import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import classes from "./index.module.css";
import {
  Button,
  Card,
  CardContent,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";

interface MeetupData {
  location: string;
  description: string;
  language: string;
  city: string;
}

export default function MultilineTextFields() {
  const [location, setLocation] = React.useState();
  const [description, setDescription] = React.useState();
  const [language, setLanguage] = React.useState("");
  const [city, setCity] = React.useState("");
  let meetupData: MeetupData;

  //const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  const handleLocationChange = (event: any) => {
    setLocation(event.target.value);
  };

  const handleDescriptionChange = (event: any) => {
    setDescription(event.target.value);
  };

  const handleLanguageChange = (event: any) => {
    setLanguage(event.target.value);
  };

  const handleCityChange = (event: any) => {
    setCity(event.target.value);
  };

  const onSubmitHandler = async () => {
    //TODO refactor
    meetupData = {
      location: location,
      description: description,
      language: language,
      city: city,
    };
    saveToDb();
  };

  const saveToDb = async () => {
    console.log("saving data");
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
              Add your language Meetup!
            </Typography>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Language</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={language}
                label="Age"
                onChange={handleLanguageChange}
              >
                <MenuItem value="Spanish">Spanish</MenuItem>
                <MenuItem value="French">French</MenuItem>
                <MenuItem value="Korean">Korean</MenuItem>
              </Select>
            </FormControl>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">City</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={city}
                label="Age"
                onChange={handleCityChange}
              >
                <MenuItem value="New York">New York</MenuItem>
                <MenuItem value="Miami">Miami</MenuItem>
                <MenuItem value="Colorado">Colorado</MenuItem>
              </Select>
            </FormControl>
            <TextField
              fullWidth
              id="outlined-textarea"
              label="Location"
              placeholder="Placeholder"
              onChange={(event) => handleLocationChange(event)}
            />
            <TextField
              fullWidth
              multiline
              id="outlined-multiline-static"
              label="Description"
              onChange={(event) => handleDescriptionChange(event)}
              rows={5}
            />
            <Button fullWidth variant="contained" onClick={onSubmitHandler}>
              Submit
            </Button>
          </Box>
        </CardContent>
      </Card>
    </div>
  );
}
