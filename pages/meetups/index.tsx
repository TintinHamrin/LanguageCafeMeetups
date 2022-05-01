import Meetup from "../../database/models/new-meetup";
import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";
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
                  <Typography>{meetup.title}</Typography>
                  <Typography>{meetup.language}</Typography>
                  <Typography>{meetup.location}</Typography>
                  <Typography>{meetup.description}</Typography>
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
        title: field.title,
        language: field.language,
        location: field.location,
        description: field.description,
      })),
    },
  };
}
