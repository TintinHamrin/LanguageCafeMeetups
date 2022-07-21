import { PrismaClient } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next/types";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    //await connect();
    const data = req.body;
    const { location, description, language, city, date } = data;
    console.log("data", location, description, language, city);

    const prisma = new PrismaClient();
    try {
      const meetup = await prisma.meetup.create({
        data: {
          location: location,
          description: description,
          language: language,
          city: city,
          date: date,
        },
      });
      console.log({ meetup });
    } catch (error) {
      console.error(error);
      throw error;
    } finally {
      await prisma.$disconnect();
    }

    res.status(200).send("ok");
  }
}
