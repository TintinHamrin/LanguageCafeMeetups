//import mongoose from "mongoose";
import Papr, { schema, types } from "papr";
import { MongoClient } from "mongodb";
import { papr } from "./paprModels";

export let client: MongoClient;
//export const papr = new Papr();

export default async function connect(): Promise<void> {
  //const connection = await MongoClient.connect("mongodb+srv://meetups:FCsf45mxauKGr6nB@cluster0.5c2mm.mongodb.net/Meetups");

  client = await MongoClient.connect(
    "mongodb+srv://meetups:FCsf45mxauKGr6nB@cluster0.5c2mm.mongodb.net/Meetups"
    // { directConnection: true }
  );

  papr.initialize(client.db("Meetups"));

  await papr.updateSchemas();
}
