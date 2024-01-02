import { prisma } from "@/lib/prisma";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "GET") {
    return res.status(405).end();
  }

  const bookId = String(req.query.bookId);

  if (!bookId) {
    return res.status(400).json({ message: "Book ID not provided" });
  }

  try {
    const book = await prisma.book.findUniqueOrThrow({
      where: {
        id: bookId,
      },
      include: {
        categories: {
          include: {
            category: true,
          },
        },
        ratings: {
          include: {
            user: true,
          },
        },
      },
    });

    let averageRating = 0;

    if (book?.ratings && book?.ratings.length !== 0) {
      averageRating =
        book.ratings.reduce((cur, acc) => {
          return cur + acc.rate;
        }, 0) / book.ratings.length;
    }

    const { created_at, cover_url, total_pages, ...rest } = book;

    const bookFormatted = {
      ...rest,
      createdAt: book.created_at,
      coverUrl: book.cover_url,
      totalPages: book.total_pages,
    };

    return res.status(200).json({ ...bookFormatted, averageRating });
  } catch (error) {
    console.log("Error fetching books: ", error);

    return res.status(500).json({ error: "Internal Server Error" });
  }
}
