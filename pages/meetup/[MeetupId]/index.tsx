import { Attendee, Meetup, Comment, PrismaClient } from "@prisma/client";
import { GetStaticPropsContext } from "next/types";
import React from "react";
import MeetupCardFullpage from "../../../components/ui/MeetupCard-Fullpage";

function index({ data }: { data: string }) {
  const deserializedData = JSON.parse(data);

  return (
    <>
      <MeetupCardFullpage
        meetup={deserializedData["meetup"] as Meetup}
        comments={deserializedData["comments"] as Comment[]}
        attendees={deserializedData["attendees"] as Attendee[]}
      />
    </>
  );
}

export default index;

export async function getServerSideProps(context: GetStaticPropsContext) {
  const param = context.params!.MeetupId as string;

  const prisma = new PrismaClient();

  const meetup = await prisma.meetup.findUnique({
    where: {
      id: parseInt(param!),
    },
  });
  const attendees = await prisma.attendee.findMany({
    where: {
      meetingId: parseInt(param),
    },
  });
  const comments = await prisma.comment.findMany({
    where: {
      meetupId: parseInt(param),
    },
  });

  const data = {
    meetup: meetup,
    attendees: attendees,
    comments: comments,
  };

  return {
    props: {
      data: JSON.stringify(data),
    },
  };
}
