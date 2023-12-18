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
import bookImg from "../../../public/assets/Book4.png";
import { Stars } from "../Stars";
import { Avatar } from "../Avatar";
import avatarImg from "../../../public/assets/Avatar.png";
import { useEffect, useState } from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { api } from "@/lib/axios";

const userReviewFormSchema = z.object({
  review: z.string().min(1, { message: "Digite sua avaliação" }),
  starsAmount: z
    .number()
    .min(1, { message: "Selecione a quantidade de estrelas" })
    .max(5, { message: "Selecione a quantidade de estrelas" }),
});

type UserReviewFormData = z.infer<typeof userReviewFormSchema>;

interface BookModalProps {
  bookId: string;
}

interface Rating {
  id: string;
  created_at: Date;
  description: string;
  rate: number;
  user: {
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
  cover_url: string;
  total_pages: number;
  categories: Category[];
  ratings: Rating[];
}

export function BookModal({ bookId }: BookModalProps) {
  const [isCommentFormOpen, setIsCommentFormOpen] = useState(false);

  const [bookDetails, setBookDetails] = useState<Book>();

  async function fetchBookDetails(bookId: string) {
    try {
      const { data } = await api.get<Book>(`/books/${bookId}`);

      setBookDetails(data);
    } catch (error) {
      console.log("Error fetching books: ", error);
      setBookDetails({} as Book);
    }
  }

  useEffect(() => {
    setBookDetails({} as Book);
    fetchBookDetails(bookId);
  }, [bookId]);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    setValue,
    watch,
  } = useForm<UserReviewFormData>({
    resolver: zodResolver(userReviewFormSchema),
    defaultValues: {
      starsAmount: 0,
    },
  });

  function handleStarClick(stars: number) {
    setValue("starsAmount", stars);
  }

  function handleUserReviewForm(data: UserReviewFormData) {
    console.log(data);
  }

  return (
    <Dialog.Portal>
      <Overlay />

      <Content>
        <CloseButton>
          <X size={24} />
        </CloseButton>

        {bookDetails && (
          <>
            <BookCard>
              <BookCardTop>
                <BookCardTopImage>
                  <Image
                    src={bookDetails.cover_url}
                    alt=""
                    width={171}
                    height={242}
                  />
                </BookCardTopImage>

                <BookCardTopText>
                  <div>
                    <Dialog.Title asChild>
                      <h3>{bookDetails.name}</h3>
                    </Dialog.Title>

                    <span>{bookDetails.author}</span>
                  </div>

                  <BookCardTopTextStars>
                    <Stars amount={4} />
                  </BookCardTopTextStars>

                  <span>3 avaliações</span>
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
                    <strong>{bookDetails.total_pages}</strong>
                  </div>
                </BookCardBottomIcon>
              </BookCardBottom>
            </BookCard>

            <ReviewsArea>
              <ReviewsHeading>
                <span>Avaliações</span>

                <button onClick={() => setIsCommentFormOpen((state) => !state)}>
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
              </ReviewsHeading>

              {isCommentFormOpen && (
                <ReviewForm onSubmit={handleSubmit(handleUserReviewForm)}>
                  <ReviewFormHeading>
                    <div>
                      <Avatar size={40} imgPath={avatarImg.src} />

                      <strong>Cristofer Rosser</strong>
                    </div>

                    <div>
                      {Array.from({ length: 5 }, (_, index) => (
                        <button
                          onClick={() => handleStarClick(index + 1)}
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
                    <ReviewButton onClick={() => setIsCommentFormOpen(false)}>
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
                <Comment isUserComment>
                  <CommentHeading>
                    <CommentHeadingLeft>
                      <Avatar size={40} imgPath={avatarImg.src} />

                      <div>
                        <strong>Cristofer Rosser</strong>
                        <span>Hoje</span>
                      </div>
                    </CommentHeadingLeft>

                    <CommentHeadingRight>
                      <Stars amount={3} />
                    </CommentHeadingRight>
                  </CommentHeading>

                  <p>
                    Tortor sed elementum dolor sed nunc elementum enim viverra.
                    Massa tempus ac a adipiscing at cursus senectus dui libero.
                    Elementum lacus enim viverra arcu at ut amet convallis.
                    Maecenas ac fringilla blandit risus nibh praesent sagittis
                    dapibus netus. Dignissim sed congue sed vel faucibus purus
                    dapibus pellentesque.
                  </p>
                </Comment>

                {bookDetails.ratings &&
                  bookDetails.ratings.map((rating) => (
                    <Comment key={rating.id}>
                      <CommentHeading>
                        <CommentHeadingLeft>
                          <Avatar size={40} imgPath={rating.user.avatar_url} />

                          <div>
                            <strong>Cristofer Rosser</strong>
                            <span>Hoje</span>
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
        )}
      </Content>
    </Dialog.Portal>
  );
}
