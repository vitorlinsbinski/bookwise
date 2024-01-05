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

import { format, formatDistanceToNow } from "date-fns";
import { ptBR } from "date-fns/locale";
import { Stars } from "../Stars";
import formatDateFromNow from "@/utils/dateFormatterFromNow";
import formatDate from "@/utils/dateFormatter";

interface ReviewCardProps {
  userName: string;
  userImagePath: string;

  publishedAt: Date;
  starsNumber: number;

  bookTitle: string;
  bookAuthor: string;
  bookDescription: string;
  bookImgPath: string;
}

export function ReviewCard({
  userName,
  publishedAt,
  starsNumber,
  bookTitle,
  bookAuthor,
  bookDescription,
  bookImgPath,
  userImagePath,
}: ReviewCardProps) {
  const publishDate = formatDate(publishedAt);

  const publishDateDifferenceFromNow = formatDateFromNow(publishedAt);

  return (
    <CardContainer>
      <ProfileArea>
        <Persona>
          <Avatar imgPath={userImagePath} size={40} />

          <PersonaInfo>
            <h4>{userName}</h4>
            <time title={publishDate} dateTime={publishedAt.toISOString()}>
              {publishDateDifferenceFromNow}
            </time>
          </PersonaInfo>
        </Persona>

        <RatingContainer>
          <Stars amount={starsNumber} />
        </RatingContainer>
      </ProfileArea>

      <BookArea>
        <ImageBookContainer>
          <Image src={bookImgPath} alt="" width={108} height={152} />
        </ImageBookContainer>

        <AboutBook>
          <Title>
            <h3>{bookTitle}</h3>
            <span>{bookAuthor}</span>
          </Title>

          <p>{bookDescription}</p>
        </AboutBook>
      </BookArea>
    </CardContainer>
  );
}
