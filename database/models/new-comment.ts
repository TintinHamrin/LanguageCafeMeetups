import mongoose from "mongoose";

//delete mongoose.connection.models["Meetup"];

const newCommentSchema = new mongoose.Schema({
  date: {
    type: Date,
    required: true,
  },
  name: {
    type: "string",
    required: true,
  },
  comment: {
    type: "string",
    required: true,
  },
  meetupId: {
    type: "string",
    required: true,
  },
});

const NewComment =
  mongoose.models.NewComment || mongoose.model("NewComment", newCommentSchema);

export default NewComment;
