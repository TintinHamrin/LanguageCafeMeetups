import { NextApiRequest, NextApiResponse } from "next/types";
import connect from "../../database/connection";
import { Meetup, MeetupDocument } from "../../database/paprModels";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    await connect();
    const data = req.body;
    const { date, location, description, language, city, id } =
      data as MeetupDocument;
    console.log("data", location, description, language, city, id);

    const dbEntry = await Meetup.insertOne({
      id: id,
      date: new Date(date!),
      location: location,
      description: description,
      language: language,
      city: city,
    });

    res.status(200).send({ msg: dbEntry });
  }
}
