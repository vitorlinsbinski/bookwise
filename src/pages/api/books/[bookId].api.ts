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
    const book = await prisma.book.findUnique({
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

    return res.status(200).json(book);
  } catch (error) {
    console.log("Error fetching books: ", error);

    return res.status(500).json({ error: "Internal Server Error" });
  }
}
