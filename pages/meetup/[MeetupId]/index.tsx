import { convertLength } from "@mui/material/styles/cssUtils";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import MeetupBox from "../../../components/ui/MeetupBox";
import MeetupCard from "../../../components/ui/MeetupCard";
import MeetupCardFullpage from "../../../components/ui/MeetupCard-Fullpage";
import connect from "../../../database/connection";
import Meetup from "../../../database/models/new-meetup";
import Register from "../../../database/models/registering";
import { getAttendees } from "../../../store/attendingSlice";

function index(props) {
  const [attendees, setAttendees] = useState({});
  const dispatch = useDispatch();

  // props.attending.map((attending) => {
  //   dispatch(getAttendees([]));
  //   dispatch(getAttendees(attending.name));
  //   console.log("index", attending.name);
  // });

  useEffect(() => {
    setAttendees(props.attending);
  }, []);

  return (
    <>
      {props.meetup.map((meetup, attending) => (
        <MeetupCardFullpage
          language={meetup.language}
          city={meetup.city}
          description={meetup.description}
          location={meetup.location}
          id={meetup.id}
          attendees={attendees}
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
  console.log(attendingResult);

  return {
    props: {
      meetup: meetupResult.map((meetup) => ({
        id: meetup._id.toString(),
        city: meetup.city,
        location: meetup.location,
        description: meetup.description,
        language: meetup.language,
      })),
      attending: attendingResult.map((attending) => ({
        name: attending.name,
        mail: attending.mail,
        phone: attending.phone,
      })),
    },
  };
}
