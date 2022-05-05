import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Grid,
  Typography,
} from "@mui/material";
import { useRouter } from "next/router";
import React from "react";
import classes from "./MeetupCard.module.css";

function MeetupCard(props) {
  const router = useRouter();
  const param = props.id;

  const openMeetupHandler = () => {
    console.log("test");
    router.push(`/meetup/${param}`);
  };

  return (
    <Grid item xs={12} sm={6}>
      <Card className={classes.card}>
        <CardContent className={classes.cardContent}>
          <Typography variant="body2">Language: {props.language}</Typography>
          <Typography variant="body2">City: {props.city}</Typography>
          <Typography variant="body2">Adress: {props.location}</Typography>
          <Typography variant="body2">{props.description}</Typography>
          <CardActions>
            <Button size="small" onClick={openMeetupHandler}>
              Learn More & Register
            </Button>
          </CardActions>
        </CardContent>
      </Card>
    </Grid>
  );
}

export default MeetupCard;
