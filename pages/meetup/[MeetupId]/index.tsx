import { ObjectId } from "mongodb";
import React from "react";
import MeetupCardFullpage from "../../../components/ui/MeetupCard-Fullpage";
import connect from "../../../database/connection";
import {
  Meetup,
  Comment,
  MeetupDocument,
  Registered,
  RegisteredDocument,
  CommentDocument,
} from "../../../database/paprModels";

function index({
  meetup,
  attendees,
  comments,
  data,
}: {
  meetup: string;
  attendees: string;
  comments: string;
  data: string;
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
        meetup={deserializedData["meetup"]}
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
  await connect();

  const meetupResult = await Meetup.findOne({
    _id: new ObjectId(param),
  });
  const attendingResult = await Registered.find({ meetingId: param });
  const commentsResult = await Comment.find({ meetupId: param });

  const data = {
    meetup: meetupResult,
    attendees: attendingResult,
    comments: commentsResult,
  };

  return {
    props: {
      data: JSON.stringify(data),
    },
  };
}
