import Meetup from "../../database/models/new-meetup";
import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import classes from "./index.module.css";
import connect from "../../database/connection";

export default function BasicGrid(props) {
  return (
    <div className={classes.body}>
      <Box sx={{ flexGrow: 1 }} className={classes.box}>
        <Grid
          className={classes.cardContainer}
          container
          rowSpacing={5}
          columnSpacing={5}
        >
          {props.meetups.map((meetup) => (
            <Grid item xs={12} sm={6}>
              <Card className={classes.card}>
                <CardContent className={classes.cardContent}>
                  <Typography variant="body2">
                    Language: {meetup.language}
                  </Typography>
                  <Typography variant="body2">City: {meetup.city}</Typography>
                  <Typography variant="body2">
                    Adress: {meetup.location}
                  </Typography>
                  <Typography variant="body2">{meetup.description}</Typography>
                  <CardActions>
                    <Button size="small">Learn More & Register</Button>
                  </CardActions>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </div>
  );
}

export async function getStaticProps() {
  connect();
  console.log("in x");
  const res = await Meetup.find({});
  console.log("after x");

  return {
    props: {
      meetups: res.map((field) => ({
        language: field.language,
        location: field.location,
        description: field.description,
        city: field.city,
      })),
    },
  };
}
