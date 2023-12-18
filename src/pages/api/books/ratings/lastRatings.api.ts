import { prisma } from "@/lib/prisma";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "GET") {
    return res.status(405).end();
  }

  try {
    const lastRatings = await prisma.rating.findMany({
      include: {
        book: true,
        user: true,
      },
    });

    if (!lastRatings || lastRatings.length === 0) {
      return res.status(404).json({ error: "No ratings found." });
    }

    return res.status(200).json(lastRatings);
  } catch (error) {
    console.log("Error fetching last ratings: ", error);

    return res.status(500).json({ error: "Internal Server Error" });
  }
}
