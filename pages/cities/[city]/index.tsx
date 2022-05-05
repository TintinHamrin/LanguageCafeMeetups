import React from "react";
import { useRouter } from "next/router";
import connect from "../../../database/connection";
import Meetup from "../../../database/models/new-meetup";
import MeetupCard from "../../../components/ui/MeetupCard";
import MeetupBox from "../../../components/ui/MeetupBox";

function City(props) {
  const router = useRouter();
  const city = router.query.city;
  console.log(props.meetups);

  return (
    <>
      <MeetupBox>
        {props.meetups.map((meetup) => (
          <MeetupCard
            language={meetup.language}
            description={meetup.description}
            location={meetup.location}
          />
        ))}
      </MeetupBox>
    </>
  );
}

export default City;

export async function getStaticPaths() {
  return {
    fallback: true,
    paths: [
      {
        params: {
          city: "miami",
        },
      },
      // {
      //   params: {
      //     city: "newyork",
      //   },
      // },

      {
        params: {
          city: "colorado",
        },
      },
    ],
  };
}

export async function getStaticProps(context) {
  let param = context.params.city;
  const capital = param[0].toUpperCase();
  const slice = param.slice(1);
  param = capital.concat(slice);
  console.log(param);
  connect();

  const result = await Meetup.find({ city: param }).lean();

  return {
    props: {
      meetups: result.map((city) => ({
        language: city.language,
        description: city.description,
        location: city.location,
      })),
    },
  };
}
