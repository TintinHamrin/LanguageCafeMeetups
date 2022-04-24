import mongoose from "mongoose";

export default function connect() {
  mongoose
    .connect(xxx, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("inside mongose now!");
    })
    .catch(() => {
      console.log("something is wrong!");
    });
}
