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
    const ratings = await prisma.rating.findMany({
      include: {
        book: true,
        user: true,
      },
      orderBy: {
        created_at: "desc",
      },
    });

    if (!ratings || ratings.length === 0) {
      return res.status(404).json({ error: "No ratings found." });
    }

    const lastRatings = ratings.slice(0, 3);

    const lastRatingsFormatted = lastRatings.map((rating) => {
      return {
        id: rating.id,
        description: rating.description,
        createdAt: rating.created_at,
        rate: rating.rate,
        user: {
          id: rating.user.id,
          name: rating.user.name,
          avatarUrl: rating.user.avatar_url,
        },
        book: {
          id: rating.book.id,
          name: rating.book.name,
          author: rating.book.author,
          summary: rating.book.summary,
          coverUrl: rating.book.cover_url,
        },
      };
    });

    return res.status(200).json(lastRatingsFormatted);
  } catch (error) {
    console.log("Error fetching last ratings: ", error);

    return res.status(500).json({ error: "Internal Server Error" });
  }
}
