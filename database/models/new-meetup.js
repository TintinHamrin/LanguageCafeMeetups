import mongoose from "mongoose";

delete mongoose.models["Meetuk`"];

const meetupSchema = new mongoose.Schema({
  name: {
    type: "string",
    required: true,
  },
  age: {
    type: "number",
    required: true,
  },
});

const Meetup = mongoose.models.Meetup || mongoose.model("Meetup", meetupSchema);

export default Meetup;
