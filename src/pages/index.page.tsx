import { ReactElement, useEffect, useState } from "react";
import {
  BookAbout,
  BookCard,
  BookCards,
  BookInfo,
  BookStars,
  HomeContainer,
  LastReadingArea,
  LastReadingBookImage,
  LastReadingBookInfo,
  LastReadingCard,
  LastReadingCardBottom,
  LastReadingCardMiddle,
  LastReadingCardTop,
  LastReadingHeading,
  MostRecentEvaluations,
  PopularBooks,
  PopularBooksHeading,
  SeeMoreButton,
  ReviewCards,
} from "../styles/home";
import DefaultLayout from "@/components/DefaultLayout";
import { Header } from "@/components/Header";
import bookImg from "../../public/assets/Book.png";
import { CaretRight } from "phosphor-react";
import popularBookImg from "../../public/assets/Book2.png";
import Image from "next/image";
import { Stars } from "@/components/Stars";
import { ReviewCard } from "@/components/ReviewCard";
import * as Dialog from "@radix-ui/react-dialog";
import { BookModal } from "@/components/BookModal/BookModal";
import { GetServerSideProps, GetStaticProps } from "next";
import { api } from "@/lib/axios";
import Link from "next/link";
import { useSession } from "next-auth/react";
import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth].api";
import formatDateFromNow from "@/utils/dateFormatterFromNow";

interface User {
  id: string;
  name: string;
  avatarUrl: string;
}

interface Book {
  id: string;
  name: string;
  author: string;
  coverUrl: string;
  summary: string;
  averageRating?: number;
}

interface Rating {
  id: string;
  rate: number;
  description: string;
  createdAt: Date;
  book: Book;
  user: User;
}

interface HomeProps {
  lastRatings: Rating[];
  popularBooks: Book[];
}

export default function Home({ lastRatings, popularBooks }: HomeProps) {
  const [selectedBookId, setSelectedBookId] = useState("");

  const [userLastReading, setUserLastReading] = useState<Rating>();

  const session = useSession();

  async function fetchLastUserReading() {
    try {
      if (session.status === "unauthenticated") {
        return setUserLastReading({} as Rating);
      }

      const userId = session.data?.user.id;

      const { data } = await api.get(`/users/${userId}`);

      setUserLastReading(data.ratings[0]);
    } catch (error) {
      console.log("Error fetching user data: ", error);

      setUserLastReading({} as Rating);
    }
  }

  const handleClick = () => {};

  useEffect(() => {
    fetchLastUserReading();
  }, []);

  return (
    <>
      <Header route="home" title="Início"></Header>

      <HomeContainer>
        <MostRecentEvaluations>
          {userLastReading &&
            userLastReading.book &&
            userLastReading.book.coverUrl && (
              <LastReadingArea>
                <LastReadingHeading>
                  <span>Sua última leitura</span>

                  <Link href={"/perfil"}>
                    <SeeMoreButton>
                      <span>Ver todas</span> <CaretRight size={16} />
                    </SeeMoreButton>
                  </Link>
                </LastReadingHeading>

                <Dialog.Root>
                  <Dialog.Trigger
                    asChild
                    onClick={() => setSelectedBookId(userLastReading.book.id)}>
                    <LastReadingCard>
                      <LastReadingBookImage>
                        {userLastReading.book.coverUrl ? (
                          <Image
                            src={userLastReading.book.coverUrl}
                            alt=""
                            width={108}
                            height={152}
                          />
                        ) : (
                          <Image
                            src={"/images/books/placeholder.svg"}
                            alt=""
                            width={108}
                            height={152}
                          />
                        )}
                      </LastReadingBookImage>

                      <LastReadingBookInfo>
                        <LastReadingCardTop>
                          <span>
                            {formatDateFromNow(
                              new Date(userLastReading.createdAt)
                            )}
                          </span>

                          <div>
                            <Stars amount={3} />
                          </div>
                        </LastReadingCardTop>

                        <LastReadingCardMiddle>
                          <h4>{userLastReading.book.name}</h4>
                          <span>{userLastReading.book.author}</span>
                        </LastReadingCardMiddle>

                        <LastReadingCardBottom>
                          <p>{userLastReading.book.summary}</p>
                        </LastReadingCardBottom>
                      </LastReadingBookInfo>
                    </LastReadingCard>
                  </Dialog.Trigger>

                  <BookModal bookId={selectedBookId} />
                </Dialog.Root>
              </LastReadingArea>
            )}

          <div>
            <span>Avaliações mais recentes</span>

            <Dialog.Root>
              <ReviewCards>
                {lastRatings?.map((rating) => {
                  return (
                    <Dialog.Trigger
                      asChild
                      key={rating.id}
                      onClick={handleClick}>
                      <ReviewCard
                        userName={rating.user.name}
                        publishedAt={new Date(rating.createdAt)}
                        bookTitle={rating.book.name}
                        bookAuthor={rating.book.author}
                        bookDescription={rating.book.summary}
                        bookImgPath={rating.book.coverUrl}
                        starsNumber={rating.rate}
                        userImagePath={rating.user.avatarUrl}
                      />
                    </Dialog.Trigger>
                  );
                })}
              </ReviewCards>

              <BookModal bookId="" />
            </Dialog.Root>
          </div>
        </MostRecentEvaluations>

        <PopularBooks>
          <PopularBooksHeading>
            <span>Livros populares</span>

            <Link href={"/explorar"}>
              <SeeMoreButton>
                <span>Ver todos</span> <CaretRight size={16} />
              </SeeMoreButton>
            </Link>
          </PopularBooksHeading>

          <Dialog.Root>
            <BookCards>
              {popularBooks?.map((book) => {
                return (
                  <Dialog.Trigger
                    asChild
                    key={book.id}
                    onClick={() => setSelectedBookId(book.id)}>
                    <BookCard>
                      {book.coverUrl ? (
                        <Image
                          src={book.coverUrl}
                          alt=""
                          width={64}
                          height={94}
                        />
                      ) : (
                        <Image
                          src={"/images/books/placeholder.svg"}
                          alt=""
                          width={64}
                          height={94}
                        />
                      )}

                      <BookAbout>
                        <BookInfo>
                          <h4>{book.name}</h4>
                          <span>{book.author}</span>
                        </BookInfo>

                        <BookStars>
                          <Stars amount={book.averageRating ?? 0} />
                        </BookStars>
                      </BookAbout>
                    </BookCard>
                  </Dialog.Trigger>
                );
              })}
            </BookCards>

            <BookModal bookId={selectedBookId} />
          </Dialog.Root>
        </PopularBooks>
      </HomeContainer>
    </>
  );
}

Home.getLayout = function (page: ReactElement) {
  return <DefaultLayout>{page}</DefaultLayout>;
};

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  const fetchLastRatings = async () => {
    try {
      const { data } = await api.get("/books/ratings/last");
      return data;
    } catch (error) {
      console.log("Error fetching last ratings: ", error);

      return [];
    }
  };

  const fetchPopularBooks = async () => {
    try {
      const { data } = await api.get("/books/popular");
      return data;
    } catch (error) {
      console.log("Error fetching last ratings: ", error);

      return [];
    }
  };

  const lastRatings = await fetchLastRatings();
  const popularBooks = await fetchPopularBooks();

  return {
    props: {
      lastRatings,
      popularBooks,
    },
    revalidate: 60 * 60 * 24, // 1 dia
  };
};
