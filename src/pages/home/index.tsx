import { ReactElement } from "react";
import {
  BookCard,
  BookInfo,
  EvaluationCards,
  HomeContainer,
  MostRecentEvaluations,
  PopularBooks,
  PopularBooksHeading,
  SeeMoreButton,
} from "./styles";
import DefaultLayout from "@/components/DefaultLayout";
import { Header } from "@/components/Header";
import { EvaluationCard } from "@/components/EvaluationCard";
import bookImg from "../../../public/assets/Book.png";
import { CaretRight } from "phosphor-react";
import popularBookImg from "../../../public/assets/Book2.png";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Header route="home" title="Início"></Header>

      <HomeContainer>
        <MostRecentEvaluations>
          <span>Avaliações mais recentes</span>

          <EvaluationCards>
            <EvaluationCard
              userName="Jaxson Dias"
              publishedAt={new Date(2023, 2, 26)}
              bookTitle="O Hobbit"
              bookAuthor="J.R.R. Tolkien"
              bookDescription="Semper et sapien proin vitae nisi. Feugiat neque integer donec et aenean posuere amet ultrices. Cras fermentum id pulvinar varius leo a in. Amet libero pharetra nunc elementum fringilla velit ipsum. Sed vulputate massa velit nibh."
              bookImgPath={bookImg.src}
              starsNumber={4}
            />

            <EvaluationCard
              userName="Jaxson Dias"
              publishedAt={new Date(2023, 2, 26)}
              bookTitle="O Hobbit"
              bookAuthor="J.R.R. Tolkien"
              bookDescription="Semper et sapien proin vitae nisi. Feugiat neque integer donec et aenean posuere amet ultrices. Cras fermentum id pulvinar varius leo a in. Amet libero pharetra nunc elementum fringilla velit ipsum. Sed vulputate massa velit nibh."
              bookImgPath={bookImg.src}
              starsNumber={5}
            />

            <EvaluationCard
              userName="Jaxson Dias"
              publishedAt={new Date(2023, 10, 26)}
              bookTitle="O Hobbit"
              bookAuthor="J.R.R. Tolkien"
              bookDescription="Semper et sapien proin vitae nisi. Feugiat neque integer donec et aenean posuere amet ultrices. Cras fermentum id pulvinar varius leo a in. Amet libero pharetra nunc elementum fringilla velit ipsum. Sed vulputate massa velit nibh."
              bookImgPath={bookImg.src}
              starsNumber={3}
            />

            <EvaluationCard
              userName="Jaxson Dias"
              publishedAt={new Date(2023, 8, 26)}
              bookTitle="O Hobbit"
              bookAuthor="J.R.R. Tolkien"
              bookDescription="Semper et sapien proin vitae nisi. Feugiat neque integer donec et aenean posuere amet ultrices. Cras fermentum id pulvinar varius leo a in. Amet libero pharetra nunc elementum fringilla velit ipsum. Sed vulputate massa velit nibh."
              bookImgPath={bookImg.src}
              starsNumber={2}
            />
          </EvaluationCards>
        </MostRecentEvaluations>

        <PopularBooks>
          <PopularBooksHeading>
            <span>Livros populares</span>

            <SeeMoreButton>
              Ver todos <CaretRight size={16} />
            </SeeMoreButton>
          </PopularBooksHeading>

          <BookCard>
            <Image src={popularBookImg.src} alt="" width={64} height={94} />

            <BookInfo>
              <h4>A revolução dos bichos</h4>
              <span>George Orwell</span>
            </BookInfo>
          </BookCard>
        </PopularBooks>
      </HomeContainer>
    </>
  );
}

Home.getLayout = function (page: ReactElement) {
  return <DefaultLayout>{page}</DefaultLayout>;
};
