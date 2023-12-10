import { styled } from "@stitches/react";

export const HomeContainer = styled("main", {
  display: "flex",
  paddingLeft: "$4",
  gap: "$6",
  width: " 100%",
  maxWidth: "95%",
  margin: "0 auto",

  "@media(max-width: 1200px)": {
    maxWidth: "100%",
    flexDirection: "column",
    paddingRight: 0,
    paddingLeft: "$5",
  },

  "@media(max-width: 540px)": {
    margin: 0,
    paddingLeft: "4rem",
  },
});

export const MostRecentEvaluations = styled("section", {
  width: "100%",
  maxWidth: "50rem",

  span: {
    fontSize: "$sm",
    color: "$gray100",
    fontWeight: "$regular",
    lineHeight: "$base",
    marginBottom: "$4",
    display: "inline-block",
  },

  "@media(max-width: 1200px)": {
    maxWidth: "100%",
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
  width: "40%",

  "@media(max-width: 1200px)": {
    width: "100%",
  },
});

export const PopularBooksHeading = styled("div", {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  marginBottom: "$5",

  span: {
    fontSize: "$sm",
    fontWeight: "$regular",
    lineHeight: "$base",
    color: "$gray100",
  },
});

export const SeeMoreButton = styled("button", {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  cursor: "pointer",
  gap: "$2",

  span: {
    fontSize: "$sm",
    fontWeight: "$bold",
    lineHeight: "$base",
    color: "$purple100",
    transition: "color .2s",
  },

  svg: {
    color: "$purple100",
    transition: "color .2s",
  },

  "&:hover": {
    span: {
      color: "$green100",
    },

    svg: {
      color: "$green100",
    },
  },
});

export const BookCards = styled("div", {
  display: "flex",
  flexWrap: "wrap",
  gap: "$3",
});

export const BookCard = styled("div", {
  width: "minmax(49%, 100%)",
  maxWidth: "100%",
  padding: "$4 $5",
  backgroundColor: "$gray700",

  display: "flex",
  gap: "$5",

  flex: "1 1 auto",

  cursor: "pointer",
  borderRadius: "$sm",

  transition: "background-color .2s",

  "&:hover": {
    backgroundColor: "$gray600",
  },
});

export const BookAbout = styled("div", {});

export const BookInfo = styled("div", {
  marginBottom: "auto",

  h4: {
    fontSize: "$md",
    fontWeight: "$bold",
    lineHeight: "$short",
    color: "$gray100",
  },

  span: {
    fontSize: "$sm",
    fontWeight: "$regular",
    lineHeight: "$base",
    color: "$gray400",
  },
});

export const BookStars = styled("div", {});
