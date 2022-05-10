import mongoose from "mongoose";
import connect from "../../database/connection";
import Register from "../../database/models/registering";

export default async function handler(req, res) {
  if (req.method === "POST") {
    connect();
    const data = req.body;
    const { name, phone, mail, meetingId } = data;

    const dbEntry = await Register.create({
      name: name,
      phone: phone,
      mail: mail,
      meetingId: meetingId,
    });

    res.status(200).send({ msg: dbEntry });
  }
}
