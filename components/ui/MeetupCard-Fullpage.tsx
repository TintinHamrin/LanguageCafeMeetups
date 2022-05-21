import { Card, CardActions, CardContent, Typography } from "@mui/material";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import CustomButton, { CustomButtonDisabled } from "./CustomButton";
import classes from "./MeetupCard-Fullpage.module.css";
import Moment from "moment";

export default function MeetupCardFullpage(props) {
  const [formattedString, setFormattedString] = useState("");
  const router = useRouter();
  const openRegisterHandler = () => {
    router.push(`/register/${props.id}`);
  };

  useEffect(() => {
    const d = new Date(props.date);

    console.log("props date", props.date);
    console.log("d", d);

    // const groups = props.date.match(
    //   /(?<day>\w+) (?<month>\w+) (?<date>\d+) (?<year>\d+) (?<time>\d+\:\d+)/
    // );
    //const str = `${groups.groups.day} ${groups.groups.date} of ${groups.groups.month} at ${groups.groups.time}`;
    setFormattedString(Moment(d).format("DD-MM-YYYY"));
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
            <CustomButtonDisabled className={classes.attending}>
              Attending: {props.attendees.length}
            </CustomButtonDisabled>
          </CardActions>
        </CardContent>
      </Card>
    </div>
  );
}
