import { Header } from "@/components/Header";
import {
  Book,
  BookInfo,
  BookStars,
  Books,
  ExploreContainer,
  GenreTags,
  SearchBookBox,
  SearchBookForm,
  SearchBookInput,
  Tag,
} from "./styles";
import { ReactElement, useState } from "react";
import DefaultLayout from "@/components/DefaultLayout";
import { MagnifyingGlass } from "phosphor-react";
import Image from "next/image";
import bookImg from "../../../public/assets/Book3.png";
import { Stars } from "@/components/Stars";

import * as Dialog from "@radix-ui/react-dialog";
import { BookModal } from "@/components/BookModal";

type genres =
  | "Tudo"
  | "Computação"
  | "Educação"
  | "Fantasia"
  | "Ficção Científica"
  | "Horror"
  | "HQs"
  | "Suspense";

const allGenres = [
  {
    id: "0",
    genre: "Tudo",
  },

  {
    id: "1",
    genre: "Computação",
  },

  {
    id: "2",
    genre: "Educação",
  },

  {
    id: "3",
    genre: "Fantasia",
  },

  {
    id: "4",
    genre: "Ficção Científica",
  },
  {
    id: "5",
    genre: "Horror",
  },
  {
    id: "6",
    genre: "HQs",
  },
  {
    id: "7",
    genre: "Suspense",
  },
];

export default function Explore() {
  const [selectedGenre, setSelectedGenre] = useState<genres>("Tudo");

  const searchBookForm = (
    <SearchBookForm>
      <SearchBookBox>
        <SearchBookInput type="text" placeholder="Buscar livro ou autor" />

        <MagnifyingGlass size={20} />
      </SearchBookBox>
    </SearchBookForm>
  );

  return (
    <>
      <Header
        route="explorar"
        title="Explorar"
        children={searchBookForm}></Header>
      <ExploreContainer>
        <GenreTags>
          {allGenres.map((item) => {
            return (
              <Tag
                key={item.id}
                onClick={() => setSelectedGenre(item.genre as genres)}
                active={selectedGenre === item.genre}>
                {item.genre}
              </Tag>
            );
          })}
        </GenreTags>

        <Dialog.Root>
          <Books>
            <Dialog.Trigger asChild>
              <Book>
                <Image src={bookImg} alt="" width={108} height={152} />

                <BookInfo>
                  <h4>Código Limpo</h4>
                  <span>Robert C. Martin</span>

                  <BookStars>
                    <Stars amount={5} />
                  </BookStars>
                </BookInfo>
              </Book>
            </Dialog.Trigger>

            <Dialog.Trigger asChild>
              <Book>
                <Image src={bookImg} alt="" width={108} height={152} />

                <BookInfo>
                  <h4>Código Limpo</h4>
                  <span>Robert C. Martin</span>

                  <BookStars>
                    <Stars amount={5} />
                  </BookStars>
                </BookInfo>
              </Book>
            </Dialog.Trigger>

            <Dialog.Trigger asChild>
              <Book>
                <Image src={bookImg} alt="" width={108} height={152} />

                <BookInfo>
                  <h4>Código Limpo</h4>
                  <span>Robert C. Martin</span>

                  <BookStars>
                    <Stars amount={5} />
                  </BookStars>
                </BookInfo>
              </Book>
            </Dialog.Trigger>

            <Dialog.Trigger asChild>
              <Book>
                <Image src={bookImg} alt="" width={108} height={152} />

                <BookInfo>
                  <h4>Código Limpo</h4>
                  <span>Robert C. Martin</span>

                  <BookStars>
                    <Stars amount={5} />
                  </BookStars>
                </BookInfo>
              </Book>
            </Dialog.Trigger>

            <Dialog.Trigger asChild>
              <Book>
                <Image src={bookImg} alt="" width={108} height={152} />

                <BookInfo>
                  <h4>Código Limpo</h4>
                  <span>Robert C. Martin</span>

                  <BookStars>
                    <Stars amount={5} />
                  </BookStars>
                </BookInfo>
              </Book>
            </Dialog.Trigger>
            <Dialog.Trigger asChild>
              <Book>
                <Image src={bookImg} alt="" width={108} height={152} />

                <BookInfo>
                  <h4>Código Limpo</h4>
                  <span>Robert C. Martin</span>

                  <BookStars>
                    <Stars amount={5} />
                  </BookStars>
                </BookInfo>
              </Book>
            </Dialog.Trigger>
          </Books>

          <BookModal />
        </Dialog.Root>
      </ExploreContainer>
    </>
  );
}

Explore.getLayout = function (page: ReactElement) {
  return <DefaultLayout>{page}</DefaultLayout>;
};
