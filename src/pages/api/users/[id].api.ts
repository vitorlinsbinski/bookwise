import { prisma } from "@/lib/prisma";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "GET") {
    return res.status(405).end();
  }

  const id = String(req.query.id);

  if (!id) {
    return res.status(400).json({ message: "User ID not provided" });
  }

  try {
    const user = await prisma.user.findUniqueOrThrow({
      where: {
        id,
      },
      include: {
        ratings: {
          include: {
            book: {
              include: {
                categories: {
                  include: {
                    category: true,
                  },
                },
              },
            },
          },
          orderBy: {
            created_at: "desc",
          },
        },
      },
    });

    const numberOfPagesReaded = user.ratings.reduce((acc, cur) => {
      return acc + cur.book.total_pages;
    }, 0);

    const numberOfBooksRated = user.ratings.length;

    const authorsReaded = new Set<string>();

    user.ratings.forEach((rating) => {
      const author = rating.book.author;

      authorsReaded.add(author);
    });

    const numberOfAuthorsReaded = authorsReaded.size;

    const categoryCounts = new Map<string, number>();

    user.ratings.forEach((rating) => {
      const book = rating.book;

      book.categories.forEach((category) => {
        const categoryName = category.category.name; // Use the category name

        categoryCounts.set(
          categoryName,
          (categoryCounts.get(categoryName) || 0) + 1
        );
      });
    });

    let mostReadCategory: string | null = null;
    let maxCount = 0;

    const categoryEntries = Array.from(categoryCounts.entries());

    for (const [categoryName, count] of categoryEntries) {
      if (count > maxCount) {
        mostReadCategory = categoryName;
        maxCount = count;
      }
    }

    const ratingsFormatted = user.ratings.map((rating) => {
      return {
        id: rating.id,
        rate: rating.rate,
        userId: rating.user_id,
        createdAt: rating.created_at,
        book: {
          id: rating.book.id,
          name: rating.book.name,
          author: rating.book.author,
          summary: rating.book.summary,
          coverUrl: rating.book.cover_url,
        },
      };
    });

    const userData = {
      user: {
        id: user.id,
        name: user.name,
        avatarUrl: user.avatar_url,
        createdAt: user.created_at,
      },
      ratings: ratingsFormatted,
      numberOfPagesReaded,
      numberOfBooksRated,
      numberOfAuthorsReaded,
      mostReadCategory,
    };

    return res.status(200).json(userData);
  } catch (error) {
    console.log("Error fetching user: ", error);

    return res.status(500).json({ error: "Internal Server Error" });
  }
}
