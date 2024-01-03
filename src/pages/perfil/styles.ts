import { styled } from "@/styles/stitches.config";

export const ProfileContainer = styled("main", {
  width: "100%",
  maxWidth: 1500,
  paddingLeft: "3rem",
  display: "flex",
  gap: "4rem",
  paddingBottom: "1rem",

  "@media(max-width: 1200px)": {
    flexDirection: "column-reverse",
    alignItems: "center",
    padding: "0 $8",
    margin: "0 auto",
  },

  "@media(max-width: 720px)": {
    gap: "3rem",
  },

  "@media(max-width: 540px)": {
    padding: 0,
    margin: 0,
    paddingLeft: "4rem",
    paddingTop: "$2",
  },
});

export const ProfileReviews = styled("section", {
  width: "100%",
  maxWidth: 624,
});

export const SearchReviewForm = styled("form", {
  width: "100%",
  height: "3rem",

  "&:focus-within": {
    "& > label": {
      borderColor: "$green100",

      svg: {
        color: "$green100",
      },
    },
  },

  "@media(max-width: 720px)": {
    position: "sticky",
    top: "4.5rem",
    backgroundColor: "$gray800",
  },
});

export const SearchReviewBox = styled("label", {
  width: "100%",
  height: "100%",
  border: "1px solid $purple100",
  borderRadius: "$xs",

  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: "$3 $5",
  gap: "$2",

  svg: {
    color: "$purple100",
  },
});

export const SearchReviewInput = styled("input", {
  backgroundColor: "transparent",
  border: 0,
  outline: 0,
  flex: 1,
  fontSize: "$sm",
  fontWeight: "$regular",
  lineHeight: "$base",
  color: "$gray200",
  width: "100%",

  "&:placeholder": {
    fontSize: "$sm",
    fontWeight: "$regular",
    lineHeight: "$base",
    color: "$gray400",
  },
});

export const AllReviews = styled("div", {
  display: "flex",
  flexDirection: "column",
  gap: "$6",
  marginTop: "$8",
});

export const Review = styled("div", {
  "& > span": {
    fontSize: "$sm",
    fontWeight: "$regular",
    lineHeight: "$base",
    color: "$gray300",
  },
});

export const CardReview = styled("div", {
  marginTop: "$2",
  width: "100%",
  padding: "$6",
  backgroundColor: "$gray700",
  borderRadius: "$sm",
  cursor: "pointer",
  transition: "all .2s",
  border: "1px solid transparent",

  p: {
    fontSize: "$sm",
    fontWeight: "$regular",
    lineHeight: "$base",
    color: "$gray300",
  },

  "&:hover": {
    borderColor: "$gray500",
  },
});

export const CardReviewHeading = styled("div", {
  display: "flex",
  gap: "$6",
  marginBottom: "$6",

  "@media(max-width: 720px)": {
    flexDirection: "column",
    alignItems: "center",
  },
});

export const CardReviewBookImage = styled("div", {
  width: "6.125rem",
  height: "8.375rem",
  borderRadius: "$xs",
  overflow: "hidden",

  img: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },
});

export const CardReviewBookTitle = styled("div", {
  display: "flex",
  flexDirection: "column",
  width: "100%",

  div: {
    "&:first-child": {
      h4: {
        fontSize: "$lg",
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
    },
  },
});

export const CardReviewBookStars = styled("div", {
  marginTop: "auto",
  display: "flex",
  alignItems: "center",
  gap: "$1",

  svg: {
    color: "$purple100",
  },
});

export const ProfileInfo = styled("section", {
  width: "100%",
  maxWidth: 308,
  padding: "0 3rem",
  position: "sticky",
  top: "7rem",
  borderLeft: "1px solid $gray700",
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-start",
  flexDirection: "column",

  "@media(max-width: 1200px)": {
    border: 0,
    position: "inherit",
  },
});

export const ProfileHeading = styled("div", {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
  position: "relative",

  div: {
    marginBottom: "$5",
  },

  strong: {
    fontSize: "$lg",
    fontWeight: "$bold",
    lineHeight: "$short",
    color: "$gray100",
    textAlign: "center",
  },

  span: {
    fontSize: "$sm",
    fontWeight: "$regular",
    lineHeight: "$base",
    color: "$gray400",
  },

  "&::after": {
    content: "",
    position: "absolute",
    bottom: "-2rem",
    width: "2rem",
    height: "0.25rem",
    borderRadius: "$full",
    background: "$gradient-horizontal",
  },
});

export const ProfileAbout = styled("ul", {
  display: "flex",
  alignItems: "start",
  justifyContent: "center",
  flexDirection: "column",
  gap: "$10",
  marginTop: "calc(2 * $8)",

  "@media(max-width: 1200px)": {
    display: "grid",
    gridTemplateColumns: "repeat(2,1fr)",
  },

  "@media(max-width: 720px)": {
    display: "grid",
    gridTemplateColumns: "repeat(2,1fr)",
    gap: "2rem",
  },
});

export const ProfileAboutItem = styled("li", {
  display: "flex",
  alignItems: "center",

  gap: "$5",

  svg: {
    color: "$green100",
  },

  div: {
    strong: {
      fontSize: "$md",
      fontWeight: "$bold",
      lineHeight: "$short",
      color: "$gray200",
      display: "block",
    },

    span: {
      fontSize: "$sm",
      fontWeight: "$regular",
      lineHeight: "$base",
      color: "$gray300",
    },
  },
});

export const NothingRatedBox = styled("div", {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  textAlign: "center",
  width: "100%",
  maxWidth: "15rem",
  margin: "auto",
  height: "100%",
  flex: 1,

  svg: {
    marginBottom: "$4",
    color: "$purple100",
  },

  span: {
    fontSize: "$md",
    fontWeight: "$regular",
    lineHeight: "$short",
    color: "$gray200",
  },

  a: {
    marginTop: "$6",
    padding: "0.5rem 1.2rem",
    border: "1px solid $purple100",
    borderRadius: "$sm",
    transition: "background-color .2s",

    span: {
      color: "$purple100",
      transition: "color .2s",
    },

    "&:hover": {
      backgroundColor: "rgba(80, 178, 192, 0.2)",
      borderColor: "$green100",

      span: {
        color: "$green100",
      },
    },
  },

  "@media(max-width: 720px)": {
    borderTop: "1px solid $gray700",
    paddingTop: "$8",
  },
});
