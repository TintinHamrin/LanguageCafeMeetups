import mongoose from "mongoose";
import connect from "../../database/connection";
import Meetup from "../../database/models/new-meetup";

export default async function handler(req, res) {
  if (req.method === "POST") {
    connect();
    const data = req.body;
    const { title, date, location, description, language, city } = data;

    const dbEntry = await Meetup.create({
      //title: title,
      date: date,
      location: location,
      description: description,
      language: language,
      city: city,
    });

    res.status(200).send({ msg: dbEntry });
  }
}
