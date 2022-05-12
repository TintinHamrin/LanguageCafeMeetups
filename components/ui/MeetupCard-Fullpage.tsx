import {
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../store/configStore";
import CustomButton from "./CustomButton";
import classes from "./MeetupCard-Fullpage.module.css";

export default function MeetupCardFullpage(props) {
  const router = useRouter();
  const openRegisterHandler = () => {
    router.push(`/register/${props.id}`);
  };

  return (
    <div className={classes.body}>
      <Card className={classes.card}>
        <CardContent className={classes.cardContent}>
          <Typography variant="h2">{props.location}</Typography>
          <Typography variant="subtitle1">
            {props.city} {props.id}
          </Typography>
          <Typography variant="overline">{props.language}</Typography>
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
