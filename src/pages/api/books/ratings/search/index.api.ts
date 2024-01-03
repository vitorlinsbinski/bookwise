import { prisma } from "@/lib/prisma";
import { NextApiRequest, NextApiResponse } from "next";

interface Book {
  id: string;
  name: string;
  author: string;
  summary: string;
  cover_url: string;
  total_pages: number;
  created_at: Date;
}

interface Rating {
  id: string;
  rate: number;
  description: string;
  created_at: Date;
  book: Book;
  user_id: string;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "GET") {
    return res.status(405).end();
  }

  const userId = String(req.query.userId);
  const searchQuery = String(req.query.searchQuery);

  if (!userId) {
    return res.status(400).json({ message: "User ID not provided" });
  }

  try {
    let ratings: Rating[];

    if (searchQuery) {
      ratings = await prisma.rating.findMany({
        where: {
          user_id: userId,
          book: {
            name: {
              contains: searchQuery,
            },
          },
        },
        include: {
          book: true,
        },
      });
    } else {
      ratings = await prisma.rating.findMany({
        where: {
          user_id: userId,
        },
        include: {
          book: true,
        },
      });
    }

    const formattedRatings = ratings.map((rating) => {
      const {
        book: { cover_url, total_pages, ...bookRest },
        created_at,
        user_id,
        ...restRating
      } = rating;

      const ratingFormatted = {
        ...restRating,
        createdAt: created_at,
        userId: user_id,
        book: {
          ...bookRest,
          coverUrl: cover_url,
        },
      };

      return ratingFormatted;
    });

    return res.status(201).json(formattedRatings);
  } catch (error) {
    console.log("Error fetching user: ", error);

    return res.status(500).json({ error: "Internal Server Error" });
  }
}
