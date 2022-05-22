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

export default function MeetupCardFullpage(props) {
  const [formattedString, setFormattedString] = useState("");
  const router = useRouter();
  const openRegisterHandler = () => {
    router.push(`/register/${props.id}`);
  };

  useEffect(() => {
    const d = new Date(props.date);
    setFormattedString(Moment(d).format("DD-MM-YYYY HH:MM"));
  }, []);

  return (
    <div className={classes.body}>
      <Card className={classes.card}>
        <CardContent className={classes.cardContent}>
          <div className={classes.header}>
            <Typography variant="h5">
              {props.location}, {props.city}
            </Typography>

            <CustomButtonDisabled className={classes.attending}>
              Attending: {props.attendees.length}
            </CustomButtonDisabled>
          </div>
          <Divider></Divider>
          <Typography variant="subtitle1">{props.language}</Typography>
          <Divider></Divider>
          <Typography variant="subtitle1">{formattedString}</Typography>
          <Divider></Divider>
          <Typography variant="body1">{props.description}</Typography>
          <Divider></Divider>
          <CardActions className={classes.cardActions}>
            <CustomButton
              className={classes.registerButton}
              onClick={openRegisterHandler}
            >
              Register
            </CustomButton>
          </CardActions>
          <CommentsCard />
        </CardContent>
      </Card>
    </div>
  );
}
