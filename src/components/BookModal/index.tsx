import bookImg from "../../../public/assets/Book4.png";
import avatarImg from "../../../public/assets/Avatar.png";
import { z } from "zod";

export const userReviewFormSchema = z.object({
  review: z.string().min(1, { message: "Digite sua avaliação" }),
  starsAmount: z
    .number()
    .min(1, { message: "Selecione a quantidade de estrelas" })
    .max(5, { message: "Selecione a quantidade de estrelas" }),
});

export type UserReviewFormData = z.infer<typeof userReviewFormSchema>;

export interface BookModalProps {
  bookId: string;
}

interface Rating {
  id: string;
  created_at: Date;
  description: string;
  rate: number;
  user: {
    id: string;
    avatar_url: string;
    name: string;
  };
}

interface Category {
  category: {
    name: string;
  };
}

export interface Book {
  id: string;
  name: string;
  author: string;
  coverUrl: string;
  totalPages: number;
  categories: Category[];
  ratings: Rating[];
  averageRating: number;
}
