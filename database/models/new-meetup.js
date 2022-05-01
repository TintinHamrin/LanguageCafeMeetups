import mongoose from "mongoose";

const meetupSchema = new mongoose.Schema({
  title: {
    type: "string",
    required: true,
  },
  location: {
    type: "string",
    required: true,
  },
  description: {
    type: "string",
    required: true,
  },
  language: {
    type: "string",
    required: true,
  },
  city: {
    type: "string",
    required: true,
  },
});

const Meetup = mongoose.models.Meetup || mongoose.model("Meetup", meetupSchema);

export default Meetup;
