import Meetup from "../../database/models/new-meetup";
import * as React from "react";
import connect from "../../database/connection";
import MeetupCard from "../../components/ui/MeetupCard";
import classes from "./index.module.css";
import { Box, Grid } from "@mui/material";
import MeetupBox from "../../components/ui/MeetupBox";
import moment from "moment";

export default function Index(props) {
  const today = moment(Date.now()).format("YYYY-MM-DD");
  const meetupDate = moment(props.meetups[0].date).format("YYYY-MM-DD");
  const x = moment(today).isBefore(meetupDate);
  console.log(today, meetupDate, x);
  // const filteredByDate = props.meetups.filter((meetup) => {
  //   moment(Date.now()).isAfter(props.meetups.date);
  // });
  return (
    <>
      <MeetupBox>
        {props.meetups.map((meetup) => (
          <MeetupCard
            language={meetup.language}
            city={meetup.city}
            description={meetup.description}
            location={meetup.location}
            id={meetup.id}
          />
        ))}
      </MeetupBox>
    </>
  );
}

export async function getStaticProps() {
  connect();
  console.log("in x");
  const res = await Meetup.find({});
  console.log("after x");

  return {
    props: {
      meetups: res.map((field) => ({
        language: field.language,
        location: field.location,
        description: field.description,
        date: field.date.toString(),
        city: field.city,
        id: field._id.toString(),
      })),
    },
  };
}
