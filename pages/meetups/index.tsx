import * as React from "react";
import MeetupCard from "../../components/ui/MeetupCard";
import MeetupBox from "../../components/ui/MeetupBox";
import moment from "moment";
import { Meetup, PrismaClient } from "@prisma/client";

export default function Index({ meetups }: { meetups: string[] }) {
  const filteredByDate = meetups
    .map((m) => JSON.parse(m) as Meetup)
    .filter((meetup) => {
      const today = moment(Date.now()).format("YYYY-MM-DD");
      return moment(Date.now()).isSameOrBefore(meetup.date);
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
  //const comments = await prisma.comment.findMany();
  prisma.$disconnect();

  return {
    props: {
      meetups: res.map((meetup) => {
        return JSON.stringify(meetup);
      }),
    },
  };
}
