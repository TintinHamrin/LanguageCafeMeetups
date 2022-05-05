import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Grid,
  Typography,
} from "@mui/material";
import React from "react";
import classes from "./MeetupCard.module.css";

function MeetupCard(props) {
  return (
    <Card className={classes.card}>
      <CardContent className={classes.cardContent}>
        <Typography variant="body2">Language: {props.language}</Typography>
        <Typography variant="body2">City: {props.city}</Typography>
        <Typography variant="body2">Adress: {props.location}</Typography>
        <Typography variant="body2">{props.description}</Typography>
        <CardActions>
          <Button size="small">Learn More & Register</Button>
        </CardActions>
      </CardContent>
    </Card>
  );
}

export default MeetupCard;
