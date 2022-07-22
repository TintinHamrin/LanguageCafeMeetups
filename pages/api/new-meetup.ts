import { PrismaClient } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next/types";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    //check up
    const data = req.body;
    const { location, description, language, city, date } = data;
    console.log({ location, description, language, city });

    const prisma = new PrismaClient();

    const meetup = await prisma.meetup.create({
      data: {
        location,
        description,
        language,
        city,
        date,
      },
    });
    console.log({ meetup });

    res.json("ok");
  }
}
