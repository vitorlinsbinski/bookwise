import Image from "next/image";
import {
  AboutBook,
  BookArea,
  CardContainer,
  ImageBookContainer,
  Persona,
  PersonaInfo,
  ProfileArea,
  RatingContainer,
  Title,
} from "./styles";
import { Avatar } from "../Avatar";

import bookImg from "../../../public/assets/Book.png";
import avatarImg from "../../../public/assets/Avatar.png";
import { Star } from "phosphor-react";

import { format, formatDistanceToNow } from "date-fns";
import { ptBR } from "date-fns/locale";

interface EvaluationCardProps {
  userName: string;
  publishedAt: Date;
  starsNumber: number;

  bookTitle: string;
  bookAuthor: string;
  bookDescription: string;
  bookImgPath: string;
}

export function EvaluationCard({
  userName,
  publishedAt,
  starsNumber,
  bookTitle,
  bookAuthor,
  bookDescription,
  bookImgPath,
}: EvaluationCardProps) {
  const publishedDate = format(publishedAt, "d 'de' LLL 'às' HH:mm'h'", {
    locale: ptBR,
  });

  const publishedDateFormatted = formatDistanceToNow(publishedAt, {
    addSuffix: true,
    locale: ptBR,
  });

  const publishedDateCapitalized =
    publishedDateFormatted.charAt(0).toUpperCase() +
    publishedDateFormatted.slice(1);

  const filledStars = Array(starsNumber).fill(<Star size={16} weight="fill" />);

  const emptyStars = Array(5 - starsNumber).fill(<Star size={16} />);

  const allStars = filledStars.concat(emptyStars);

  return (
    <CardContainer>
      <ProfileArea>
        <Persona>
          <Avatar imgPath={avatarImg.src} size={40} />
          <PersonaInfo>
            <h4>{userName}</h4>
            <time title={publishedDate} dateTime={publishedAt.toISOString()}>
              {publishedDateCapitalized}
            </time>
          </PersonaInfo>
        </Persona>

        <RatingContainer>{allStars}</RatingContainer>
      </ProfileArea>

      <BookArea>
        <ImageBookContainer>
          <Image src={bookImg} alt="" width={108} height={152} />
        </ImageBookContainer>

        <AboutBook>
          <Title>
            <h3>O Hobbit</h3>
            <span>J.R.R. Tolkien</span>
          </Title>

          <p>
            Semper et sapien proin vitae nisi. Feugiat neque integer donec et
            aenean posuere amet ultrices. Cras fermentum id pulvinar varius leo
            a in. Amet libero pharetra nunc elementum fringilla velit ipsum. Sed
            vulputate massa velit nibh
          </p>
        </AboutBook>
      </BookArea>
    </CardContainer>
  );
}
