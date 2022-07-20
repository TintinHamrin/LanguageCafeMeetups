import { Attendee, Meetup, Comment, PrismaClient } from "@prisma/client";
import React from "react";
import MeetupCardFullpage from "../../../components/ui/MeetupCard-Fullpage";

function index({
  data,
  meetup,
}: {
  data: string;
  meetup: Meetup;
  attendees: Attendee[];
  comments: Comment[];
}) {
  //TODO why??
  //const dispatch = useDispatch();
  // props.comments.written.map((comment) => {
  //   console.log(comment);
  // });

  const deserializedData = JSON.parse(data);

  return (
    <>
      <MeetupCardFullpage
        meetup={meetup}
        comments={deserializedData["comments"]}
        attendees={deserializedData["attendees"]}
      />
    </>
  );
}

export default index;

// TODO necessary?
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

// TODO fix type for context
export async function getStaticProps(context: any) {
  const param = context.params.MeetupId;

  const prisma = new PrismaClient();

  const meetup = await prisma.meetup.findUnique({
    where: {
      id: parseInt(param),
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
  // console.log("from gsp2", res);

  const data = {
    meetup: meetup,
    attendees: attendees,
    comments: comments,
  };

  prisma.$disconnect();

  return {
    props: {
      data: data,
      meetup: meetup,
      attendees: attendees,
      comments: comments,
    },
  };
}
