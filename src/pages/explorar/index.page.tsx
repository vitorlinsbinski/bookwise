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
import { ReactElement } from "react";
import DefaultLayout from "@/components/DefaultLayout";
import { MagnifyingGlass } from "phosphor-react";
import Image from "next/image";
import bookImg from "../../../public/assets/Book3.png";
import { Stars } from "@/components/Stars";

export default function Explore() {
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
          <Tag>Tudo</Tag>
          <Tag>Computação</Tag>
          <Tag>Educação</Tag>
          <Tag>Fantasia</Tag>
          <Tag>Ficção Científica</Tag>
          <Tag>Horror</Tag>
          <Tag>HQs</Tag>
          <Tag>Suspense</Tag>
        </GenreTags>

        <Books>
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
        </Books>
      </ExploreContainer>
    </>
  );
}

Explore.getLayout = function (page: ReactElement) {
  return <DefaultLayout>{page}</DefaultLayout>;
};
