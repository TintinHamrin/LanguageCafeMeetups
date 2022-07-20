import * as React from "react";
import MeetupCard from "../../components/ui/MeetupCard";
import MeetupBox from "../../components/ui/MeetupBox";
import moment from "moment";
import { Meetup, PrismaClient } from "@prisma/client";

export default function Index({ meetups }: { meetups: string[] }) {
  //TODO fix to also include today meetup
  const filteredByDate = meetups
    .map((m) => JSON.parse(m) as Meetup)
    .filter((meetup) => {
      const today = moment(Date.now()).format("YYYY-MM-DD");
      return moment(Date.now()).isAfter(meetup.date);
      //TODO change to isBefore
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

  return {
    props: {
      meetups: res.map((meetup) => {
        return JSON.stringify(meetup);
      }),
    },
  };
}
