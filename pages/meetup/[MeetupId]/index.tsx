import React from "react";
import MeetupBox from "../../../components/ui/MeetupBox";
import MeetupCard from "../../../components/ui/MeetupCard";
import MeetupCardFullpage from "../../../components/ui/MeetupCard-Fullpage";
import connect from "../../../database/connection";
import Meetup from "../../../database/models/new-meetup";

function index(props) {
  console.log(props);
  return (
    <>
      <MeetupCardFullpage />
      {/* <MeetupBox>
        {props.meetup.map((meetup) => (
          <MeetupCard
            language={meetup.language}
            city={meetup.city}
            description={meetup.description}
            location={meetup.location}
            id={meetup.id}
          />
        ))}
      </MeetupBox> */}
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
  console.log(param);
  connect();

  const result = await Meetup.find({ _id: param });

  return {
    props: {
      meetup: result.map((meetup) => ({
        id: meetup._id.toString(),
        city: meetup.city,
        location: meetup.location,
        description: meetup.description,
        language: meetup.language,
      })),
    },
  };
}
