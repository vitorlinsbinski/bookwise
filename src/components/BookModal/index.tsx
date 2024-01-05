import bookImg from "../../../public/assets/Book4.png";
import avatarImg from "../../../public/assets/Avatar.png";
import { z } from "zod";
import * as Dialog from "@radix-ui/react-dialog";
import {
  Overlay,
  Content,
  CloseButton,
  BookCard,
  BookCardTop,
  BookCardBottom,
  BookCardTopImage,
  BookCardTopText,
  BookCardTopTextStars,
  BookCardBottomIcon,
  ReviewsArea,
  ReviewsHeading,
  ReviewForm,
  ReviewFormHeading,
  ReviewTextArea,
  ReviewActions,
  ReviewButton,
  Comments,
  Comment,
  CommentHeading,
  CommentHeadingLeft,
  CommentHeadingRight,
  ErrorTextMessage,
  SkeletonCard,
  SkeletonComments,
  SkeletonComment,
  SkeletonImageBook,
} from "./styles";
import {
  BookmarkSimple,
  CaretDown,
  CaretUp,
  Check,
  Star,
  X,
} from "phosphor-react";
import Image from "next/image";
import { Stars } from "../Stars";
import { Avatar } from "../Avatar";
import { useContext, useEffect, useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { api } from "@/lib/axios";
import formatDateFromNow from "@/utils/dateFormatterFromNow";
import { useSession } from "next-auth/react";
import { LoginModal } from "../LogInModal";
import {
  ApplicationContext,
  ApplicationContextProvider,
} from "@/contexts/ApplicationContext";
import { useQuery } from "@tanstack/react-query";

export const userReviewFormSchema = z.object({
  review: z.string().min(1, { message: "Digite sua avaliação" }),
  starsAmount: z
    .number()
    .min(1, { message: "Selecione a quantidade de estrelas" })
    .max(5, { message: "Selecione a quantidade de estrelas" }),
});

export type UserReviewFormData = z.infer<typeof userReviewFormSchema>;

interface BookModalProps {
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

interface Book {
  id: string;
  name: string;
  author: string;
  coverUrl: string;
  totalPages: number;
  categories: Category[];
  ratings: Rating[];
  averageRating: number;
}

export function BookModal({ bookId }: BookModalProps) {
  const [isCommentFormOpen, setIsCommentFormOpen] = useState(false);

  const { isBookModalOpen } = useContext(ApplicationContext);

  console.log(bookId);

  async function fetchBookDetails(bookId: string) {
    try {
      console.log("Fetching book details for bookId: ", bookId);
      const { data } = await api.get<Book>(`/books/${bookId}`);
      console.log("Data from API: ", data);
      return data;
    } catch (error) {
      console.error("Error fetching book details: ", error);
      throw error;
    }
  }

  useEffect(() => {
    if (!isBookModalOpen) {
      setIsCommentFormOpen(false);
    }
  }, [isBookModalOpen]);

  const { data: bookDetails } = useQuery({
    queryKey: ["book-details", bookId],
    queryFn: () => fetchBookDetails(bookId),
  });

  console.log("bookDetails", bookDetails);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    setValue,
    watch,
    reset,
  } = useForm<UserReviewFormData>({
    resolver: zodResolver(userReviewFormSchema),
    defaultValues: {
      starsAmount: 0,
    },
  });

  const session = useSession();

  console.log(session);

  const { closeBookModal } = useContext(ApplicationContext);

  function handleStarClick(stars: number) {
    setValue("starsAmount", stars);
  }

  async function handleUserReviewForm(data: UserReviewFormData) {
    if (session && session.data) {
      try {
        const response = await api.post(
          `/books/ratings/register/${session.data?.user.id}/${bookId}`,
          data
        );

        setIsCommentFormOpen(false);

        fetchBookDetails(bookId);

        reset();
      } catch (error) {
        console.error("An error occurred sending the rating: ", error);
      }
    }
  }

  const isUserAlreadyRated =
    (bookDetails?.ratings &&
      bookDetails.ratings.findIndex(
        (rating) => rating.user.id === session.data?.user.id
      )) ??
    -1;

  return (
    <Dialog.Portal>
      <Overlay />

      <Content>
        <CloseButton>
          <X size={24} />
        </CloseButton>

        {bookDetails && bookDetails.ratings ? (
          <>
            <BookCard>
              <BookCardTop>
                <BookCardTopImage>
                  {bookDetails.coverUrl ? (
                    <Image
                      src={bookDetails.coverUrl}
                      alt=""
                      width={171}
                      height={242}
                    />
                  ) : (
                    <SkeletonImageBook />
                  )}
                </BookCardTopImage>

                <BookCardTopText>
                  <div>
                    <Dialog.Title asChild>
                      <h3>{bookDetails.name}</h3>
                    </Dialog.Title>

                    <span>{bookDetails.author}</span>
                  </div>

                  <BookCardTopTextStars>
                    <Stars amount={bookDetails.averageRating} />
                  </BookCardTopTextStars>

                  <span>
                    {bookDetails.ratings.length}{" "}
                    {bookDetails.ratings.length > 1
                      ? "avaliações"
                      : "avaliação"}
                  </span>
                </BookCardTopText>
              </BookCardTop>

              <BookCardBottom>
                <BookCardBottomIcon>
                  <BookmarkSimple size={24} />

                  <div>
                    <span>Categoria</span>
                    {bookDetails.categories && (
                      <strong>
                        {bookDetails.categories
                          .map((item) => item.category.name)
                          .join(", ")}
                      </strong>
                    )}
                  </div>
                </BookCardBottomIcon>

                <BookCardBottomIcon>
                  <BookmarkSimple size={24} />

                  <div>
                    <span>Páginas</span>
                    <strong>{bookDetails.totalPages}</strong>
                  </div>
                </BookCardBottomIcon>
              </BookCardBottom>
            </BookCard>

            <ReviewsArea>
              <ReviewsHeading>
                <span>Avaliações</span>

                <Dialog.Root>
                  {session.status === "authenticated" ? (
                    isUserAlreadyRated < 0 && (
                      <button
                        onClick={() => setIsCommentFormOpen((state) => !state)}>
                        {isCommentFormOpen ? (
                          <>
                            Fechar <CaretUp size={16} />
                          </>
                        ) : (
                          <>
                            Avaliar <CaretDown size={16} />
                          </>
                        )}
                      </button>
                    )
                  ) : (
                    <Dialog.Trigger asChild>
                      <button>
                        Avaliar <CaretDown size={16} />
                      </button>
                    </Dialog.Trigger>
                  )}

                  <LoginModal />
                </Dialog.Root>
              </ReviewsHeading>

              {isCommentFormOpen && (
                <ReviewForm onSubmit={handleSubmit(handleUserReviewForm)}>
                  <ReviewFormHeading>
                    <div>
                      <Avatar
                        size={40}
                        imgPath={session.data?.user.avatar_url}
                      />

                      <strong>{session.data?.user.name}</strong>
                    </div>

                    <div>
                      {Array.from({ length: 5 }, (_, index) => (
                        <button
                          onClick={() => handleStarClick(index + 1)}
                          type="button"
                          key={index + 1}>
                          <Star
                            size={28}
                            weight={
                              watch("starsAmount") >= index + 1
                                ? "fill"
                                : "regular"
                            }
                          />
                        </button>
                      ))}
                    </div>
                  </ReviewFormHeading>

                  <ReviewTextArea
                    placeholder="Escreva sua avaliação"
                    {...register("review")}
                  />

                  <ReviewActions>
                    <ReviewButton
                      onClick={() => {
                        setIsCommentFormOpen(false);
                        reset();
                      }}>
                      <X size={24} />
                    </ReviewButton>

                    <ReviewButton type="submit">
                      <Check size={24} />
                    </ReviewButton>
                  </ReviewActions>

                  {errors.review && (
                    <ErrorTextMessage>
                      <span>{errors.review.message}</span>
                    </ErrorTextMessage>
                  )}

                  {errors.starsAmount && (
                    <ErrorTextMessage>
                      <span>{errors.starsAmount.message}</span>
                    </ErrorTextMessage>
                  )}
                </ReviewForm>
              )}
              <Comments>
                {bookDetails.ratings &&
                  bookDetails.ratings
                    .sort((a, b) => {
                      if (session.data?.user.id === a.user.id) return -1;
                      if (session.data?.user.id === b.user.id) return 1;
                      return 0;
                    })
                    .map((rating) => (
                      <Comment
                        key={rating.id}
                        isUserComment={
                          rating.user.id === session.data?.user.id
                        }>
                        <CommentHeading>
                          <CommentHeadingLeft>
                            <Avatar
                              size={40}
                              imgPath={rating.user.avatar_url}
                            />

                            <div>
                              <strong>{rating.user.name}</strong>
                              <span>
                                {formatDateFromNow(new Date(rating.created_at))}
                              </span>
                            </div>
                          </CommentHeadingLeft>

                          <CommentHeadingRight>
                            <Stars amount={rating.rate} />
                          </CommentHeadingRight>
                        </CommentHeading>

                        <p>{rating.description}</p>
                      </Comment>
                    ))}
              </Comments>
            </ReviewsArea>
          </>
        ) : (
          <>
            <SkeletonCard />

            <ReviewsHeading>
              <span>Avaliações</span>
            </ReviewsHeading>

            <SkeletonComments>
              <SkeletonComment />
              <SkeletonComment />
              <SkeletonComment />
            </SkeletonComments>
          </>
        )}
      </Content>
    </Dialog.Portal>
  );
}
