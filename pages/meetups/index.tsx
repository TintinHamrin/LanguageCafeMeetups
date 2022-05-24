import Meetup from "../../database/models/new-meetup";
import * as React from "react";
import connect from "../../database/connection";
import MeetupCard from "../../components/ui/MeetupCard";
import classes from "./index.module.css";
import { Box, Grid } from "@mui/material";
import MeetupBox from "../../components/ui/MeetupBox";
import moment from "moment";

export default function Index(props) {
  //TODO fix to also include today meetup
  const filteredByDate = props.meetups.filter((meetup) => {
    const today = moment(Date.now()).format("YYYY-MM-DD");
    const meetupDate = moment(meetup.date).format("YYYY-MM-DD");
    return moment(today).isBefore(meetupDate);
  });

  return (
    <>
      <MeetupBox>
        {filteredByDate.map((meetup) => (
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
