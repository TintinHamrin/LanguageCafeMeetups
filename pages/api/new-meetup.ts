import mongoose from "mongoose";
import connect from "../../database/connection";
import Meetup from "../../database/models/new-meetup";

export default async function handler(req, res) {
  if (req.method === "POST") {
    connect();
    const data = req.body;
    const { title, location, description } = data;
    console.log(title, location, description);

    const dbEntry = await Meetup.create({
      title: title,
      location: location,
      description: description,
    });

    res.status(200).send({ msg: dbEntry });
  }
}
