import { ObjectId } from "mongodb";
import mongoose from "mongoose";
import { NextApiRequest, NextApiResponse } from "next/types";
import { Comment, PrismaClient } from "@prisma/client";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const data = req.body;
    const { date, name, comment, meetupId } = data;

    const prisma = new PrismaClient();
    const addedComment = await prisma.comment.create({
      data: {
        name: name,
        comment: comment,
        meetupId: meetupId,
      },
    });

    res.status(200).send({ msg: comment });
  }
}
