import { convertLength } from "@mui/material/styles/cssUtils";
import moment from "moment";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import MeetupBox from "../../../components/ui/MeetupBox";
import MeetupCard from "../../../components/ui/MeetupCard";
import MeetupCardFullpage from "../../../components/ui/MeetupCard-Fullpage";
import connect from "../../../database/connection";
import NewComment from "../../../database/models/new-comment";
import Meetup from "../../../database/models/new-meetup";
import Register from "../../../database/models/registering";
import { getAttendees } from "../../../store/attendingSlice";

function index(props) {
  const [attendees, setAttendees] = useState({});
  const dispatch = useDispatch();

  useEffect(() => {
    setAttendees(props.attending);
  }, []);

  return (
    <>
      {props.meetup.map((meetup) => (
        <MeetupCardFullpage
          language={meetup.language}
          city={meetup.city}
          description={meetup.description}
          location={meetup.location}
          id={meetup.id}
          date={meetup.date}
          attendees={attendees}
          comments={props.comments}
        />
      ))}
    </>
  );
}

export default index;

export async function getStaticPaths() {
  return {
    paths: [
      {
        params: {
          MeetupId: "626f9adfc01edfa1c65dd1db",
        },
      },
      {
        params: {
          MeetupId: "626f9cc8c01edfa1c65dd1e5",
        },
      },
    ],
    fallback: true,
  };
}

export async function getStaticProps(context) {
  const param = context.params.MeetupId;
  console.log("param", param);
  connect();

  const meetupResult = await Meetup.find({ _id: param });
  const attendingResult = await Register.find({ meetingId: param });
  const commentResult = await NewComment.find({ meetupId: param });

  return {
    props: {
      meetup: meetupResult.map((meetup) => ({
        id: meetup._id.toString(),
        city: meetup.city,
        location: meetup.location,
        description: meetup.description,
        language: meetup.language,
        date: meetup.date.toString(),
      })),
      attending: attendingResult.map((attending) => ({
        name: attending.name,
        mail: attending.mail,
        phone: attending.phone,
      })),
      comments: commentResult.map((comment) => ({
        name: comment.name,
        comment: comment.comment,
        meetingId: comment.meetupId,
        date: comment.date.toString(),
        written: moment(Date.now()).diff(comment.date.toString(), "days"),
      })),
    },
  };
}
