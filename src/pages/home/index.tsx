import { ReactElement } from "react";
import {
  BookAbout,
  BookCard,
  BookCards,
  BookInfo,
  BookStars,
  EvaluationCards,
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
} from "./styles";
import DefaultLayout from "@/components/DefaultLayout";
import { Header } from "@/components/Header";
import { EvaluationCard } from "@/components/EvaluationCard";
import bookImg from "../../../public/assets/Book.png";
import { CaretRight } from "phosphor-react";
import popularBookImg from "../../../public/assets/Book2.png";
import Image from "next/image";
import { Stars } from "@/components/Stars";

export default function Home() {
  return (
    <>
      <Header route="home" title="Início"></Header>

      <HomeContainer>
        <MostRecentEvaluations>
          <LastReadingArea>
            <LastReadingHeading>
              <span>Sua última leitura</span>

              <SeeMoreButton>
                <span>Ver todas</span> <CaretRight size={16} />
              </SeeMoreButton>
            </LastReadingHeading>

            <LastReadingCard>
              <LastReadingBookImage>
                <Image src={bookImg} alt="" width={108} height={152} />
              </LastReadingBookImage>

              <LastReadingBookInfo>
                <LastReadingCardTop>
                  <span>Há dois dias</span>

                  <div>
                    <Stars amount={3} />
                  </div>
                </LastReadingCardTop>

                <LastReadingCardMiddle>
                  <h4>Entendendo Algoritmos</h4>
                  <span>Aditya Bhargava</span>
                </LastReadingCardMiddle>

                <LastReadingCardBottom>
                  <p>
                    Nec tempor nunc in egestas. Euismod nisi eleifend at et in
                    sagittis. Penatibus id vestibulum imperdiet a at imperdiet
                    lectu...
                  </p>
                </LastReadingCardBottom>
              </LastReadingBookInfo>
            </LastReadingCard>
          </LastReadingArea>

          <div>
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
          </div>
        </MostRecentEvaluations>

        <PopularBooks>
          <PopularBooksHeading>
            <span>Livros populares</span>

            <SeeMoreButton>
              <span>Ver todos</span> <CaretRight size={16} />
            </SeeMoreButton>
          </PopularBooksHeading>

          <BookCards>
            <BookCard>
              <Image src={popularBookImg.src} alt="" width={64} height={94} />

              <BookAbout>
                <BookInfo>
                  <h4>A revolução dos bichos</h4>
                  <span>George Orwell</span>
                </BookInfo>

                <BookStars>
                  <Stars amount={4} />
                </BookStars>
              </BookAbout>
            </BookCard>

            <BookCard>
              <Image src={popularBookImg.src} alt="" width={64} height={94} />

              <BookAbout>
                <BookInfo>
                  <h4>A revolução dos bichos</h4>
                  <span>George Orwell</span>
                </BookInfo>

                <BookStars>
                  <Stars amount={4} />
                </BookStars>
              </BookAbout>
            </BookCard>

            <BookCard>
              <Image src={popularBookImg.src} alt="" width={64} height={94} />

              <BookAbout>
                <BookInfo>
                  <h4>A revolução dos bichos</h4>
                  <span>George Orwell</span>
                </BookInfo>

                <BookStars>
                  <Stars amount={4} />
                </BookStars>
              </BookAbout>
            </BookCard>

            <BookCard>
              <Image src={popularBookImg.src} alt="" width={64} height={94} />

              <BookAbout>
                <BookInfo>
                  <h4>A revolução dos bichos</h4>
                  <span>George Orwell</span>
                </BookInfo>

                <BookStars>
                  <Stars amount={4} />
                </BookStars>
              </BookAbout>
            </BookCard>
          </BookCards>
        </PopularBooks>
      </HomeContainer>
    </>
  );
}

Home.getLayout = function (page: ReactElement) {
  return <DefaultLayout>{page}</DefaultLayout>;
};
