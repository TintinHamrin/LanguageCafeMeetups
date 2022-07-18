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
import { MeetupDocument } from "../../database/paprModels";
import CustomButton from "./CustomButton";
import classes from "./MeetupCard.module.css";

function MeetupCard({ meetup }: { meetup: MeetupDocument }) {
  const router = useRouter();
  //const param = props.id;
  console.log(meetup._id);

  const openMeetupHandler = () => {
    router.push(`/meetup/${meetup._id}`);
  };

  return (
    <Grid item xs={12} sm={6}>
      <Card className={classes.card}>
        <CardContent className={classes.cardContent}>
          <Typography variant="body2">Language: {meetup.language}</Typography>
          <Typography variant="body2">City: {meetup.city}</Typography>

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
