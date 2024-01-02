import { prisma } from "@/lib/prisma";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "GET") {
    return res.status(405).end();
  }

  const querySearch = String(req.query.querySearch);
  const categoryId = String(req.query.categoryId);

  if (!querySearch) {
    return res.status(400).json({ message: "Query search not provided" });
  }

  try {
    const books = await prisma.book.findMany({
      where: {
        name: {
          contains: querySearch,
        },
        ...(categoryId !== "Tudo" && {
          categories: {
            some: {
              categoryId: {
                equals: categoryId,
              },
            },
          },
        }),
      },
      include: {
        ratings: {
          select: {
            rate: true,
          },
        },
      },
    });

    const booksWithAverageRating = books.map((book) => {
      const { ratings = [] } = book;

      const averageRating =
        ratings.length > 0
          ? ratings.reduce((acc, cur) => acc + cur.rate, 0) / ratings.length
          : 0;

      const { ratings: _, ...booksWithoutRatings } = book;

      return {
        ...booksWithoutRatings,
        averageRating,
      };
    });

    const booksFormatted = booksWithAverageRating.map((book) => {
      return {
        ...book,
        coverUrl: book.cover_url,
        totalPages: book.total_pages,
        createdAt: book.created_at,
      };
    });

    return res.status(200).json(booksFormatted);
  } catch (error) {
    console.log("Error fetching books: ", error);

    return res.status(500).json({ error: "Internal Server Error" });
  }
}
