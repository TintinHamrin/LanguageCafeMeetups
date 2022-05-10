import {
  Box,
  Card,
  CardActions,
  CardContent,
  Grid,
  Typography,
} from "@mui/material";
import { useRouter } from "next/router";
import React from "react";
import CustomButton from "./CustomButton";
import classes from "./MeetupCard.module.css";

function MeetupCard(props) {
  const router = useRouter();
  const param = props.id;
  console.log(param);

  const openMeetupHandler = () => {
    router.push(`/meetup/${param}`);
  };

  return (
    <Grid item xs={12} sm={6}>
      <Card className={classes.card}>
        <CardContent className={classes.cardContent}>
          <Typography variant="body2">Language: {props.language}</Typography>
          <Typography variant="body2">City: {props.city}</Typography>

          <CardActions>
            <CustomButton onClick={openMeetupHandler}>
              Learn More & Register
            </CustomButton>
          </CardActions>
        </CardContent>
      </Card>
    </Grid>
  );
}

export default MeetupCard;
