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
    const books = await prisma.book.findMany({
      include: {
        ratings: true,
      },
    });

    if (!books || books.length === 0) {
      return res.status(404).json({ error: "No books found." });
    }

    const booksWithAverageRating = books?.map((book) => {
      let averageRating = 0;

      if (book.ratings.length !== 0) {
        averageRating =
          book.ratings.reduce((acc, cur) => {
            return acc + cur.rate;
          }, 0) / book.ratings.length;
      }

      const {
        ratings,
        cover_url,
        total_pages,
        created_at,
        ...booksWithoutRatings
      } = book;

      return {
        ...booksWithoutRatings,
        averageRating,
        coverUrl: cover_url,
        totalPages: total_pages,
      };
    });

    return res.status(200).json(booksWithAverageRating);
  } catch (error) {
    console.log("Error fetching books: ", error);

    return res.status(500).json({ error: "Internal Server Error" });
  }
}
