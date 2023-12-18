import { ReactElement } from "react";
import {
  AllReviews,
  CardReview,
  CardReviewBookImage,
  CardReviewBookStars,
  CardReviewBookTitle,
  CardReviewHeading,
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

const searchReviewFormSchema = z.object({
  query: z.string().min(1, { message: "Digite algum livro ou autor" }),
});

type SearchReviewFormData = z.infer<typeof searchReviewFormSchema>;

export default function Profile() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<SearchReviewFormData>({
    resolver: zodResolver(searchReviewFormSchema),
  });

  function handleSearchReviewForm(data: SearchReviewFormData) {
    console.log(data);
  }

  return (
    <>
      <Header route="perfil" title="Perfil"></Header>

      <ProfileContainer>
        <ProfileReviews>
          <SearchReviewForm onSubmit={handleSubmit(handleSearchReviewForm)}>
            <SearchBookBox>
              <SearchBookInput
                placeholder="Buscar livro avaliado"
                {...register("query")}
              />

              <MagnifyingGlass size={20} />
            </SearchBookBox>
          </SearchReviewForm>

          <Dialog.Root>
            <AllReviews>
              <Review>
                <span>Há dois dias</span>
                <Dialog.Trigger asChild>
                  <CardReview>
                    <CardReviewHeading>
                      <CardReviewBookImage>
                        <Image
                          src={bookImage.src}
                          alt=""
                          width={98}
                          height={134}
                        />
                      </CardReviewBookImage>

                      <CardReviewBookTitle>
                        <div>
                          <h4>Entendendo Algoritmos</h4>

                          <span>Aditya Bhargava</span>
                        </div>

                        <CardReviewBookStars>
                          <Stars amount={4} />
                        </CardReviewBookStars>
                      </CardReviewBookTitle>
                    </CardReviewHeading>

                    <p>
                      Tristique massa sed enim lacinia odio. Congue ut faucibus
                      nunc vitae non. Nam feugiat vel morbi viverra vitae mi.
                      Vitae fringilla ut et suspendisse enim suspendisse vitae.
                      Leo non eget lacus sollicitudin tristique pretium quam.
                      Mollis et luctus amet sed convallis varius massa sagittis.
                      Proin sed proin at leo quis ac sem. Nam donec accumsan
                      curabitur amet tortor quam sit. Bibendum enim sit dui
                      lorem urna amet elit rhoncus ut. Aliquet euismod vitae ut
                      turpis. Aliquam amet integer pellentesque.
                    </p>
                  </CardReview>
                </Dialog.Trigger>
              </Review>

              <Review>
                <span>Há dois dias</span>
                <Dialog.Trigger asChild>
                  <CardReview>
                    <CardReviewHeading>
                      <CardReviewBookImage>
                        <Image
                          src={bookImage.src}
                          alt=""
                          width={98}
                          height={134}
                        />
                      </CardReviewBookImage>

                      <CardReviewBookTitle>
                        <div>
                          <h4>Entendendo Algoritmos</h4>

                          <span>Aditya Bhargava</span>
                        </div>

                        <CardReviewBookStars>
                          <Stars amount={4} />
                        </CardReviewBookStars>
                      </CardReviewBookTitle>
                    </CardReviewHeading>

                    <p>
                      Tristique massa sed enim lacinia odio. Congue ut faucibus
                      nunc vitae non. Nam feugiat vel morbi viverra vitae mi.
                      Vitae fringilla ut et suspendisse enim suspendisse vitae.
                      Leo non eget lacus sollicitudin tristique pretium quam.
                      Mollis et luctus amet sed convallis varius massa sagittis.
                      Proin sed proin at leo quis ac sem. Nam donec accumsan
                      curabitur amet tortor quam sit. Bibendum enim sit dui
                      lorem urna amet elit rhoncus ut. Aliquet euismod vitae ut
                      turpis. Aliquam amet integer pellentesque.
                    </p>
                  </CardReview>
                </Dialog.Trigger>
              </Review>

              <Review>
                <span>Há dois dias</span>
                <Dialog.Trigger asChild>
                  <CardReview>
                    <CardReviewHeading>
                      <CardReviewBookImage>
                        <Image
                          src={bookImage.src}
                          alt=""
                          width={98}
                          height={134}
                        />
                      </CardReviewBookImage>

                      <CardReviewBookTitle>
                        <div>
                          <h4>Entendendo Algoritmos</h4>

                          <span>Aditya Bhargava</span>
                        </div>

                        <CardReviewBookStars>
                          <Stars amount={4} />
                        </CardReviewBookStars>
                      </CardReviewBookTitle>
                    </CardReviewHeading>

                    <p>
                      Tristique massa sed enim lacinia odio. Congue ut faucibus
                      nunc vitae non. Nam feugiat vel morbi viverra vitae mi.
                      Vitae fringilla ut et suspendisse enim suspendisse vitae.
                      Leo non eget lacus sollicitudin tristique pretium quam.
                      Mollis et luctus amet sed convallis varius massa sagittis.
                      Proin sed proin at leo quis ac sem. Nam donec accumsan
                      curabitur amet tortor quam sit. Bibendum enim sit dui
                      lorem urna amet elit rhoncus ut. Aliquet euismod vitae ut
                      turpis. Aliquam amet integer pellentesque.
                    </p>
                  </CardReview>
                </Dialog.Trigger>
              </Review>
            </AllReviews>

            <BookModal bookId="" />
          </Dialog.Root>
        </ProfileReviews>

        <ProfileInfo>
          <ProfileHeading>
            <Avatar size={72} imgPath={avatarImage.src} />

            <strong>Cristofer Rosser</strong>
            <span>membro desde 2019</span>
          </ProfileHeading>

          <ProfileAbout>
            <ProfileAboutItem>
              <BookOpen size={32} />

              <div>
                <strong>3853</strong>
                <span>Páginas lidas</span>
              </div>
            </ProfileAboutItem>

            <ProfileAboutItem>
              <Books size={32} />

              <div>
                <strong>10</strong>
                <span>Livros avaliados</span>
              </div>
            </ProfileAboutItem>

            <ProfileAboutItem>
              <UserList size={32} />

              <div>
                <strong>8</strong>
                <span>Autores lidos</span>
              </div>
            </ProfileAboutItem>

            <ProfileAboutItem>
              <BookmarkSimple size={32} />

              <div>
                <strong>Computação</strong>
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
