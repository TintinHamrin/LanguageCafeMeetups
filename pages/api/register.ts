import { PrismaClient } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next/types";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const data = req.body;
    const { name, phone, mail, meetingId } = data;

    const prisma = new PrismaClient();

    const dbEntry = await prisma.attendee.create({
      data: {
        name: name,
        phone: phone,
        mail: mail,
        meetingId: parseInt(meetingId),
      },
    });

    res.status(200).send({ msg: dbEntry });
  }
}
