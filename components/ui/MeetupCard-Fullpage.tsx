import {
  Card,
  CardActions,
  CardContent,
  Divider,
  Typography,
} from "@mui/material";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import CustomButton, { CustomButtonDisabled } from "./CustomButton";
import classes from "./MeetupCard-Fullpage.module.css";
import Moment from "moment";
import CommentsCard from "./CommentsCard";
import {
  CommentDocument,
  MeetupDocument,
  RegisteredDocument,
} from "../../database/paprModels";

export default function MeetupCardFullpage({
  meetup,
  comments,
  attendees,
}: {
  meetup: any;
  comments: any;
  attendees: any;
}) {
  const [formattedString, setFormattedString] = useState("");
  const router = useRouter();
  const openRegisterHandler = () => {
    router.push(`/register/${meetup._id}`);
  };

  // useEffect(() => {
  //   const date = new Date(meetup.date);
  //   setFormattedString(Moment(date).format("DD-MM-YYYY HH:MM"));
  //   //console.log(meetup.comments[0]);
  // }, []);

  return (
    <div className={classes.body}>
      <Card className={classes.card}>
        <CardContent className={classes.cardContent}>
          <div className={classes.header}>
            <Typography variant="h5">
              {meetup.location}, {meetup.city}
            </Typography>

            <CustomButtonDisabled className={classes.attending}>
              Attending: x
            </CustomButtonDisabled>
          </div>
          <Divider></Divider>
          <Typography variant="subtitle1">{meetup.language}</Typography>
          <Divider></Divider>
          <Typography variant="subtitle1">{formattedString}</Typography>
          <Divider></Divider>
          <Typography variant="body1">{meetup.description}</Typography>
          <Divider></Divider>
          <CardActions className={classes.cardActions}>
            <CustomButton
              className={classes.registerButton}
              onClick={openRegisterHandler}
            >
              Register
            </CustomButton>
          </CardActions>
          {/* <CommentsCard comments={comments} /> */}
        </CardContent>
      </Card>
    </div>
  );
}
