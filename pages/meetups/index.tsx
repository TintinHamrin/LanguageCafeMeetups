import * as React from "react";
import MeetupCard from "../../components/ui/MeetupCard";
import MeetupBox from "../../components/ui/MeetupBox";
import { Meetup, PrismaClient } from "@prisma/client";
import { getCookies, getCookie, setCookie, deleteCookie } from "cookies-next";

export default function Index({ meetups }: { meetups: string[] }) {
  const parsedMeetups = meetups.map((m) => JSON.parse(m) as Meetup);

  return (
    <>
      <MeetupBox city="NYC, Colorado and Miami">
        {parsedMeetups.map((meetup) => (
          <MeetupCard meetup={meetup} />
        ))}
      </MeetupBox>
    </>
  );
}

export async function getStaticProps() {
  setCookie("test", "value");
  getCookie("test");

  const prisma = new PrismaClient();
  const res = await prisma.meetup.findMany({
    where: {
      date: {
        gte: new Date(),
      },
    },
  });

  return {
    props: {
      meetups: res.map((meetup) => {
        return JSON.stringify(meetup);
      }),
    },
  };
}
