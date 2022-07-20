//import Meetup from "../../database/models/new-meetup";
import * as React from "react";
import connect from "../../database/connection";
import MeetupCard from "../../components/ui/MeetupCard";
import classes from "./index.module.css";
import { Box, Grid } from "@mui/material";
import MeetupBox from "../../components/ui/MeetupBox";
import moment from "moment";
import { Meetup, MeetupDocument } from "../../database/paprModels";

import { PrismaClient } from "@prisma/client";
//const prisma = new PrismaClient()

export default function Index({ meetups }: { meetups: string[] }) {
  //TODO fix to also include today meetup
  const filteredByDate = meetups
    .map((m) => JSON.parse(m) as MeetupDocument)
    .filter((meetup) => {
      //console.log(meetup);
      //console.log(meetup.date);
      const today = moment(Date.now()).format("YYYY-MM-DD");
      return moment(Date.now()).isAfter(meetup.date);
    });

  return (
    <>
      <MeetupBox city="NYC, Colorado and Miami">
        {filteredByDate.map((meetup) => (
          <MeetupCard meetup={meetup} />
        ))}
      </MeetupBox>
    </>
  );
}

export async function getStaticProps() {
  const prisma = new PrismaClient();

  const res = await prisma.meetup.findMany();
  console.log("from gsp", res);

  prisma.$disconnect();

  // await connect();
  // const res = await Meetup.find({});

  return {
    props: {
      meetups: res.map((meetup) => {
        return JSON.stringify(meetup);
      }),
    },
  };
}
