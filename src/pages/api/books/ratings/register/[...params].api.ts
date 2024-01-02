import { prisma } from "@/lib/prisma";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    return res.status(405).end();
  }

  const params = req.query.params as string[];

  if (params.length < 2) {
    return res.status(400).json({ message: "Insufficient params provided" });
  }

  const [userId, bookId] = params;

  const { review, starsAmount } = req.body;

  if (!userId && bookId) {
    return res.status(400).json({ message: "User ID or Book Id not provided" });
  }

  try {
    const isUserAlreadyRated = await prisma.rating.findUnique({
      where: {
        id: bookId,
        user_id: userId,
      },
    });

    if (isUserAlreadyRated) {
      return res.status(400).json({ message: "User already rated this book" });
    }

    const rating = await prisma.rating.create({
      data: {
        rate: starsAmount,
        description: review,
        created_at: new Date(),
        book: {
          connect: { id: bookId },
        },
        user: {
          connect: { id: userId },
        },
      },
    });

    return res.status(201).json(rating);
  } catch (error) {
    console.log("Error fetching user: ", error);

    return res.status(500).json({ error: "Internal Server Error" });
  }
}
