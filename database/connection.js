import mongoose from "mongoose";

export default function connect() {
  console.log("trying");
  mongoose
    .connect(
      "mongodb+srv://cookieweb:aHjZGRmYsgkc5SPS@cluster0.5c2mm.mongodb.net/Meetups",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    )
    .then(() => {
      console.log("inside mongose now!");
    })
    .catch(() => {
      console.log("something is wrong!");
    });
}
