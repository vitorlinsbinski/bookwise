import { ReactElement, useState } from "react";
import {
  AllReviews,
  CardReview,
  CardReviewBookImage,
  CardReviewBookStars,
  CardReviewBookTitle,
  CardReviewHeading,
  NothingRatedBox,
  ProfileAbout,
  ProfileAboutItem,
  ProfileContainer,
  ProfileHeading,
  ProfileInfo,
  ProfileReviews,
  Review,
  SearchReviewForm,
} from "./styles";
import DefaultLayout from "@/components/DefaultLayout";
import { Header } from "@/components/Header";
import { SearchBookBox, SearchBookInput } from "../explorar/styles";
import {
  Book,
  BookBookmark,
  BookOpen,
  BookmarkSimple,
  Books,
  MagnifyingGlass,
  UserList,
} from "phosphor-react";
import { Stars } from "@/components/Stars";
import Image from "next/image";
import bookImage from "../../../public/assets/Book.png";
import { Avatar } from "@/components/Avatar";
import avatarImage from "../../../public/assets/Avatar2.png";
import * as Dialog from "@radix-ui/react-dialog";
import { BookModal } from "@/components/BookModal";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { getSession, useSession } from "next-auth/react";
import { GetServerSideProps, GetStaticProps } from "next";
import { api } from "@/lib/axios";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth].api";
import formatDateFromNow from "@/utils/dateFormatterFromNow";
import Link from "next/link";
import { NextSeo } from "next-seo";
import { Router } from "next/router";

const searchReviewFormSchema = z.object({
  query: z.string(),
});

type SearchReviewFormData = z.infer<typeof searchReviewFormSchema>;

interface Rating {
  id: string;
  rate: number;
  userId: string;
  createdAt: Date;
  book: {
    id: string;
    name: string;
    author: string;
    summary: string;
    coverUrl: string;
  };
}

interface UserData {
  userData: {
    user: {
      id: string;
      name: string;
      avatarUrl: string;
      createdAt: Date;
    };
    ratings: Rating[];
    numberOfPagesReaded: number | null;
    numberOfBooksRated: number | null;
    numberOfAuthorsReaded: number | null;
    mostReadCategory: string | null;
  };
}

export default function Profile({ userData }: UserData) {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<SearchReviewFormData>({
    resolver: zodResolver(searchReviewFormSchema),
  });

  const session = useSession();

  const [selectedBookId, setSelectedBookId] = useState("");

  const [userRatings, setUserRatings] = useState<Rating[]>(userData.ratings);

  const [userFilteredRatings, setUserFilteredRatings] = useState(
    userData.ratings
  );

  async function handleSearchReviewForm(search: SearchReviewFormData) {
    const params = new URLSearchParams({
      userId: userData.user.id,
      searchQuery: search.query,
    });

    const { data } = await api.get(`/books/ratings/search`, { params });

    console.log(data);

    setUserFilteredRatings(data);
  }

  return (
    <>
      <NextSeo
        title={`Perfil - ${session.data?.user.name}`}
        description="Veja todas as suas últimas avaliações de livros e seus dados"
      />

      <Header route="perfil" title="Perfil"></Header>

      <ProfileContainer>
        <ProfileReviews>
          {userRatings.length > 0 ? (
            <SearchReviewForm onSubmit={handleSubmit(handleSearchReviewForm)}>
              <SearchBookBox>
                <SearchBookInput
                  placeholder="Buscar livro avaliado"
                  {...register("query")}
                />

                <MagnifyingGlass size={20} />
              </SearchBookBox>
            </SearchReviewForm>
          ) : (
            <NothingRatedBox>
              <BookBookmark size={42} />

              <span>Parece que você não avaliou nenhum livro ainda</span>

              <Link href={"/explorar"}>
                <span>Avaliar</span>
              </Link>
            </NothingRatedBox>
          )}

          <Dialog.Root>
            <AllReviews>
              {userFilteredRatings.map((rating) => {
                return (
                  <Review>
                    <span>{formatDateFromNow(new Date(rating.createdAt))}</span>
                    <Dialog.Trigger
                      asChild
                      onClick={() => setSelectedBookId(rating.book.id)}>
                      <CardReview>
                        <CardReviewHeading>
                          <CardReviewBookImage>
                            <Image
                              src={rating.book.coverUrl}
                              alt=""
                              width={98}
                              height={134}
                            />
                          </CardReviewBookImage>

                          <CardReviewBookTitle>
                            <div>
                              <h4>{rating.book.name}</h4>

                              <span>{rating.book.author}</span>
                            </div>

                            <CardReviewBookStars>
                              <Stars amount={rating.rate} />
                            </CardReviewBookStars>
                          </CardReviewBookTitle>
                        </CardReviewHeading>

                        <p>{rating.book.summary}</p>
                      </CardReview>
                    </Dialog.Trigger>
                  </Review>
                );
              })}
            </AllReviews>

            <BookModal bookId={selectedBookId} />
          </Dialog.Root>
        </ProfileReviews>

        <ProfileInfo>
          <ProfileHeading>
            <Avatar size={72} imgPath={userData.user.avatarUrl} />

            <strong>{userData.user.name}</strong>
            <span>
              membro desde {new Date(userData.user.createdAt).getFullYear()}
            </span>
          </ProfileHeading>

          <ProfileAbout>
            <ProfileAboutItem>
              <BookOpen size={32} />

              <div>
                <strong>{userData.numberOfPagesReaded}</strong>
                <span>Páginas lidas</span>
              </div>
            </ProfileAboutItem>

            <ProfileAboutItem>
              <Books size={32} />

              <div>
                <strong>{userData.numberOfBooksRated}</strong>
                <span>Livros avaliados</span>
              </div>
            </ProfileAboutItem>

            <ProfileAboutItem>
              <UserList size={32} />

              <div>
                <strong>{userData.numberOfAuthorsReaded}</strong>
                <span>Autores lidos</span>
              </div>
            </ProfileAboutItem>

            <ProfileAboutItem>
              <BookmarkSimple size={32} />

              <div>
                <strong>
                  {userData.mostReadCategory
                    ? userData.mostReadCategory
                    : "Nenhuma"}
                </strong>
                <span>Categoria mais lida</span>
              </div>
            </ProfileAboutItem>
          </ProfileAbout>
        </ProfileInfo>
      </ProfileContainer>
    </>
  );
}

Profile.getLayout = function (page: ReactElement) {
  return <DefaultLayout>{page}</DefaultLayout>;
};

export const getServerSideProps: GetServerSideProps<UserData> = async (
  context
) => {
  context.res.setHeader(
    "Cache-Control",
    "public, s-maxage=10, stale-while-revalidate=59"
  );

  try {
    const session = await getServerSession(
      context.req,
      context.res,
      authOptions
    );

    if (!session) {
      return {
        redirect: {
          destination: "/login",
          permanent: false,
        },
        props: [],
      };
    }

    const userId = session.user.id;

    const { data } = await api.get(`/users/${userId}`);

    const serializedUserData = {
      ...data,
      headers: data.headers || null,
    };

    return {
      props: {
        userData: serializedUserData,
      },
    };
  } catch (error) {
    console.log("Error fetching user data: ", error);

    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
      props: [],
    };
  }
};
