import Meetup from "../../database/models/new-meetup";
import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { Card, CardContent, Typography } from "@mui/material";

export default function BasicGrid(props) {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        {props.meetups.map((meetup) => (
          <Grid item xs={12} sm={6}>
            <Card>
              <CardContent>
                <Typography>{meetup.title}</Typography>
                <Typography>{meetup.location}</Typography>
                <Typography>{meetup.description}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export async function getStaticProps(context) {
  const res = await Meetup.find({});
  console.log(res);

  return {
    props: {
      meetups: res.map((field) => ({
        title: field.title,
        location: field.location,
        description: field.description,
      })),
    },
  };
}
