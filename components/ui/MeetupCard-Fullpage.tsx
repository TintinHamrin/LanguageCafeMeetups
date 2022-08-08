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
import { Attendee, Comment, Meetup } from "@prisma/client";
import CommentsCard from "./CommentsCard";
import { useSession } from "next-auth/react";

export default function MeetupCardFullpage({
  meetup,
  comments,
  attendees,
}: {
  meetup: Meetup;
  comments: Comment[];
  attendees: Attendee[];
}) {
  const { data: session, status } = useSession();
  const [formattedString, setFormattedString] = useState("");
  const router = useRouter();
  let isAdmin = false;
  const openRegisterHandler = () => {
    router.push(`/register/${meetup.id}`);
  };

  const openMeetupHandler = () => {
    console.log("openMeetupHandler");
    router.push("/add-meetup");
  };

  if (session?.id === meetup.createdBy) isAdmin = true;

  useEffect(() => {
    const date = new Date(meetup.date);
    setFormattedString(Moment(date).format("DD-MM-YYYY HH:MM"));
  }, []);

  return (
    <div className={classes.body}>
      <Card className={classes.card}>
        <CardContent className={classes.cardContent}>
          <div className={classes.header}>
            <Typography variant="h5">
              {meetup.location}, {meetup.city}
            </Typography>
            <div className={classes.buttonsDiv}>
              {isAdmin && (
                <CustomButton
                  className={classes.registerButton}
                  onClick={openMeetupHandler}
                >
                  Edit meetup
                </CustomButton>
              )}
              <CustomButtonDisabled className={classes.attending}>
                Attending: {attendees.length}
              </CustomButtonDisabled>
            </div>
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
              Register!
            </CustomButton>
          </CardActions>
          <CommentsCard comments={comments} meetupId={meetup.id} />
        </CardContent>
      </Card>
    </div>
  );
}
