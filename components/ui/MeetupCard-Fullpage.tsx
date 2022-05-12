import { Card, CardActions, CardContent, Typography } from "@mui/material";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import CustomButton from "./CustomButton";
import classes from "./MeetupCard-Fullpage.module.css";

export default function MeetupCardFullpage(props) {
  const [formattedString, setFormattedString] = useState("");
  const router = useRouter();
  const openRegisterHandler = () => {
    router.push(`/register/${props.id}`);
  };

  useEffect(() => {
    const groups = props.date.match(
      /(?<day>\w+) (?<month>\w+) (?<date>\d+) (?<year>\d+) (?<time>\d+\:\d+)/
    );
    const str = `${groups.groups.day} ${groups.groups.date} of ${groups.groups.month} at ${groups.groups.time}`;
    setFormattedString(str);
  }, []);

  return (
    <div className={classes.body}>
      <Card className={classes.card}>
        <CardContent className={classes.cardContent}>
          <Typography variant="h2">{props.location}</Typography>
          <Typography variant="subtitle1">
            {props.city} {props.id}
          </Typography>
          <Typography variant="overline">{props.language}</Typography>
          <Typography variant="overline">{formattedString}</Typography>
          <Typography variant="body1">{props.description}</Typography>
          <CardActions className={classes.cardActions}>
            <CustomButton onClick={openRegisterHandler}>Register</CustomButton>
            <Card className={classes.attending}>
              <CardContent>Attending: {props.attendees.length}</CardContent>
            </Card>
          </CardActions>
        </CardContent>
      </Card>
    </div>
  );
}
