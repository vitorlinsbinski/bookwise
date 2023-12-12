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
import { useState } from "react";

export function BookModal() {
  const [starsAmount, setStarsAmount] = useState(0);
  const [isCommentFormOpen, setIsCommentFormOpen] = useState(false);

  console.log(isCommentFormOpen);

  return (
    <Dialog.Portal>
      <Overlay />

      <Content>
        <CloseButton>
          <X size={24} />
        </CloseButton>

        <BookCard>
          <BookCardTop>
            <BookCardTopImage>
              <Image src={bookImg.src} alt="" width={171} height={242} />
            </BookCardTopImage>

            <BookCardTopText>
              <div>
                <Dialog.Title asChild>
                  <h3>14 Hábitos de Desenvolvedores Altamente Produtivos</h3>
                </Dialog.Title>

                <span>Zeno Rocha</span>
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
                <strong>Computação, educação</strong>
              </div>
            </BookCardBottomIcon>

            <BookCardBottomIcon>
              <BookmarkSimple size={24} />

              <div>
                <span>Páginas</span>
                <strong>160</strong>
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
                  Cancelar <CaretUp size={16} />
                </>
              ) : (
                <>
                  Avaliar <CaretDown size={16} />
                </>
              )}
            </button>
          </ReviewsHeading>

          {isCommentFormOpen && (
            <ReviewForm onSubmit={(e) => e.preventDefault()}>
              <ReviewFormHeading>
                <div>
                  <Avatar size={40} imgPath={avatarImg.src} />

                  <strong>Cristofer Rosser</strong>
                </div>

                <div>
                  <button onClick={() => setStarsAmount(1)}>
                    <Star
                      size={28}
                      weight={starsAmount >= 1 ? "fill" : "regular"}
                    />
                  </button>
                  <button onClick={() => setStarsAmount(2)}>
                    <Star
                      size={28}
                      weight={starsAmount >= 2 ? "fill" : "regular"}
                    />
                  </button>
                  <button onClick={() => setStarsAmount(3)}>
                    <Star
                      size={28}
                      weight={starsAmount >= 3 ? "fill" : "regular"}
                    />
                  </button>
                  <button onClick={() => setStarsAmount(4)}>
                    <Star
                      size={28}
                      weight={starsAmount >= 4 ? "fill" : "regular"}
                    />
                  </button>
                  <button onClick={() => setStarsAmount(5)}>
                    <Star
                      size={28}
                      weight={starsAmount >= 5 ? "fill" : "regular"}
                    />
                  </button>
                </div>
              </ReviewFormHeading>

              <ReviewTextArea placeholder="Escreva sua avaliação" />

              <ReviewActions>
                <ReviewButton onClick={() => setIsCommentFormOpen(false)}>
                  <X size={24} />
                </ReviewButton>

                <ReviewButton>
                  <Check size={24} />
                </ReviewButton>
              </ReviewActions>
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
                Elementum lacus enim viverra arcu at ut amet convallis. Maecenas
                ac fringilla blandit risus nibh praesent sagittis dapibus netus.
                Dignissim sed congue sed vel faucibus purus dapibus
                pellentesque.
              </p>
            </Comment>

            <Comment>
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
                Elementum lacus enim viverra arcu at ut amet convallis. Maecenas
                ac fringilla blandit risus nibh praesent sagittis dapibus netus.
                Dignissim sed congue sed vel faucibus purus dapibus
                pellentesque.
              </p>
            </Comment>
          </Comments>
        </ReviewsArea>
      </Content>
    </Dialog.Portal>
  );
}
