import { styled } from "@/styles/stitches.config";

export const HomeContainer = styled("main", {
  display: "flex",
  paddingLeft: "$4",
  gap: "$10",
  width: " 100%",
  maxWidth: "95%",
  margin: "0 auto",
  alignItems: "start",

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

  div: {
    "&:last-child": {
      span: {
        "&:first-child": {
          fontSize: "$sm",
          color: "$gray100",
          fontWeight: "$regular",
          lineHeight: "$base",

          display: "inline-block",
        },
      },
    },
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
  marginTop: "$4",
});

export const LastReadingArea = styled("div", {
  display: "flex",
  flexDirection: "column",
  gap: "$5",
  marginBottom: "$10",

  "@media(max-width: 720px)": {
    marginTop: "$3",
  },
});

export const LastReadingHeading = styled("div", {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",

  span: {
    fontSize: "$sm",
    fontWeight: "$regular",
    lineHeight: "$base",
    color: "$gray100",
  },
});

export const LastReadingCard = styled("div", {
  width: "100%",
  padding: "$5 $6",
  backgroundColor: "$gray600",
  borderRadius: "$sm",

  display: "flex",
  alignItems: "flex-start",
  gap: "$6",

  "@media(max-width: 720px)": {
    flexDirection: "column",
    alignItems: "center",
  },
});

export const LastReadingBookImage = styled("div", {
  borderRadius: "$xs",
  overflow: "hidden",
  width: "6.75rem",

  img: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },
});

export const LastReadingBookInfo = styled("div", {
  flex: 1,
});

export const LastReadingCardTop = styled("div", {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",

  div: {
    display: "flex",
    alignItems: "center",
    gap: "$1",

    svg: {
      color: "$purple100",
    },
  },
});

export const LastReadingCardMiddle = styled("div", {
  marginTop: "$3",
  marginBottom: "$6",

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

  "@media(max-width: 720px)": {
    marginTop: "$2",
    marginBottom: "$4",
  },
});

export const LastReadingCardBottom = styled("div", {
  p: {
    fontSize: "$sm",
    fontWeight: "$regular",
    lineHeight: "$base",
    color: "$gray300",
  },
});

export const PopularBooks = styled("section", {
  position: "sticky",
  top: "6rem",
  left: 0,
  width: "40%",
  zIndex: 10,

  "@media(max-width: 1200px)": {
    width: "100%",
    position: "inherit",
  },
});

export const PopularBooksHeading = styled("div", {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  marginBottom: "$5",

  "& > span": {
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
  border: "2px solid transparent",

  transition: "all.2s",

  "&:hover": {
    borderColor: "$gray600",
  },
});

export const BookAbout = styled("div", {
  display: "flex",
  flexDirection: "column",
});

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

export const BookStars = styled("div", {
  display: "flex",
  alignItems: "center",
  gap: "$1",
  marginTop: "auto",

  svg: {
    color: "$purple100",
  },
});
