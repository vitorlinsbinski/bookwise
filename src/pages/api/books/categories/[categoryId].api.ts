import { prisma } from "@/lib/prisma";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "GET") {
    return res.status(405).end();
  }

  const categoryId = String(req.query.categoryId);

  if (!categoryId) {
    return res.status(400).json({ message: "Category ID not provided" });
  }

  if (categoryId === "Tudo" || categoryId === "") {
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

        const { ratings, ...booksWithoutRatings } = book;

        return {
          ...booksWithoutRatings,
          averageRating,
        };
      });

      const booksFormatted = booksWithAverageRating?.map((book) => {
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

  try {
    const data = await prisma.category.findUnique({
      where: {
        id: categoryId,
      },
      include: {
        books: {
          include: {
            book: {
              include: {
                ratings: true,
              },
            },
          },
        },
      },
    });

    const booksOnCategory = data?.books.map((book) => {
      return book.book;
    });

    const booksOnCategoryWithAverageRating = booksOnCategory?.map((book) => {
      let averageRating = 0;

      if (book.ratings.length !== 0) {
        averageRating =
          book.ratings.reduce((acc, cur) => {
            return acc + cur.rate;
          }, 0) / book.ratings.length;
      }

      const { ratings, ...booksWithoutRatings } = book;

      return {
        ...booksWithoutRatings,
        averageRating,
      };
    });

    const booksFormatted = booksOnCategoryWithAverageRating?.map((book) => {
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
