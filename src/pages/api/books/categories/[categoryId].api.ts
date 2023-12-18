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
      const books = await prisma.book.findMany();

      if (!books || books.length === 0) {
        return res.status(404).end();
      }
      return res.status(200).json(books);
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
            book: true,
          },
        },
      },
    });

    const booksOnCategory = data?.books.map((book) => {
      return book.book;
    });

    return res.status(200).json(booksOnCategory);
  } catch (error) {
    console.log("Error fetching books: ", error);

    return res.status(500).json({ error: "Internal Server Error" });
  }
}
