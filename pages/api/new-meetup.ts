import mongoose from "mongoose";
const dotenv = require("dotenv");
import connect from "../../database/connection";
import Meetup from "../../database/models/new-meetup";

dotenv.config();

export default async function handler(req, res) {
  if (req.method === "POST") {
    connect();
    const data = req.body;
    const { title, image, address, description } = data;

    const pet = await Meetup.create({
      name: "matta" + Math.random(),
      age: 65,
    });

    res.status(200).send({ msg: pet });
  }
}
