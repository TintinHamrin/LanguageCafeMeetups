import mongoose from "mongoose";
import connect from "../../database/connection";
import NewComment from "../../database/models/new-comment";

export default async function handler(req, res) {
  console.log("in api", req);
  if (req.method === "POST") {
    connect();
    const data = req.body;
    const { date, name, comment, meetupId } = data;

    const dbEntry = await NewComment.create({
      //title: title,
      date: date,
      name: name,
      comment: comment,
      meetupId: meetupId,
    });

    res.status(200).send({ msg: dbEntry });
  }
}
