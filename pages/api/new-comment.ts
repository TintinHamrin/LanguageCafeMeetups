import { ObjectId } from "mongodb";
import mongoose from "mongoose";
import { NextApiRequest, NextApiResponse } from "next/types";
import connect from "../../database/connection";
import { Comment } from "../../database/paprModels";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    await connect();
    const data = req.body;
    const { date, name, comment, meetupId } = data;
    console.log("data", date, name, comment, meetupId);

    const dbEntry = await Comment.insertOne({
      _id: new ObjectId(),
      date: new Date(Date.now()),
      name: name,
      comment: comment,
      meetupId: meetupId,
    });

    res.status(200).send({ msg: dbEntry });
  }
}
