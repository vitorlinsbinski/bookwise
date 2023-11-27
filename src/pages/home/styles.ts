import { styled } from "@stitches/react";

export const HomeContainer = styled("main", {
  paddingTop: "2.2rem",
  display: "flex",
  alignItems: "flex-start",
  gap: "4rem",

  "@media(max-width: 540px)": {
    marginLeft: "4rem",
    paddingTop: "$2",
  },
});

export const MostRecentEvaluations = styled("section", {
  span: {
    fontSize: "$sm",
    color: "$gray100",
    fontWeight: "$regular",
    lineHeight: "$base",
    marginBottom: "$4",
    display: "inline-block",
  },
});

export const EvaluationCards = styled("div", {
  display: "flex",
  alignItems: "center",
  gap: "$3",
  flexDirection: "column",
});

export const PopularBooks = styled("section", {
  position: "sticky",
  top: "$4",
  left: 0,
});

export const PopularBooksHeading = styled("div", {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
});

export const SeeMoreButton = styled("button", {});

export const BookCard = styled("div", {});

export const BookInfo = styled("div", {});
