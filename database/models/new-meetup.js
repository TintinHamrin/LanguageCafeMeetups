import mongoose from "mongoose";

//delete mongoose.connection.models["Meetup"];

const meetupSchema = new mongoose.Schema({
  date: {
    type: Date,
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
