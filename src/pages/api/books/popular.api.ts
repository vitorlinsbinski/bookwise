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

    const booksSortedByNumberOfRatings = books
      ?.sort((a, b) => {
        return b.ratings.length - a.ratings.length;
      })
      .slice(0, 4)
      .map((book) => {
        const averageRating =
          book.ratings.reduce((acc, cur) => {
            return acc + cur.rate;
          }, 0) / book.ratings.length;
        return {
          ...book,
          averageRating,
        };
      });

    const popularBooksFormatted = booksSortedByNumberOfRatings.map((book) => {
      return {
        id: book.id,
        name: book.name,
        author: book.author,
        coverUrl: book.cover_url,
        summary: book.summary,
        averageRating: book.averageRating,
      };
    });

    return res.status(200).json(popularBooksFormatted);
  } catch (error) {
    console.log("Error fetching books: ", error);

    return res.status(500).json({ error: "Internal Server Error" });
  }
}
