import {
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";
import { useRouter } from "next/router";
import React from "react";
import CustomButton from "./CustomButton";
import classes from "./MeetupCard-Fullpage.module.css";

export default function MeetupCardFullpage(props) {
  const router = useRouter();
  const openRegisterHandler = () => {
    router.push("/register");
    //set meetup id in global state
  };

  const openMeetupHandler = () => {};

  return (
    <div className={classes.body}>
      <Card className={classes.card}>
        <CardContent className={classes.cardContent}>
          <Typography variant="h2">{props.location}</Typography>
          <Typography variant="subtitle1">{props.city}</Typography>
          <Typography variant="overline">{props.language}</Typography>
          <Typography variant="body1">{props.description}</Typography>
          <CardActions>
            <CustomButton submitHandler={openMeetupHandler}>
              Learn More & Register
            </CustomButton>
          </CardActions>
        </CardContent>
      </Card>
    </div>
  );
}
