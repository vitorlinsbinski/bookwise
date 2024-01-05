import { SkeletonAnimation } from "@/styles/animations";
import { styled } from "@/styles/stitches.config";

export const ExploreContainer = styled("main", {
  width: "100%",
  maxWidth: 1500,
  paddingLeft: "3rem",

  "@media(max-width: 540px)": {
    paddingLeft: "4rem",
  },
});

export const SearchBookForm = styled("form", {
  width: "100%",
  maxWidth: "27.06rem",
  height: "3rem",

  "&:focus-within": {
    "& > label": {
      borderColor: "$green100",

      svg: {
        color: "$green100",
      },
    },
  },
});

export const SearchBookBox = styled("label", {
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

export const SearchBookInput = styled("input", {
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

export const GenreTags = styled("section", {
  width: "100%",
  display: "flex",
  alignItems: "center",
  gap: "$3",
  flexWrap: "wrap",
  paddingBottom: "$4",
  maxWidth: "100%",

  scrollbarWidth: "thin",
  scrollbarColor: "$purple100",

  "&::-webkit-scrollbar": {
    height: 3,
    borderRadius: "$xs",
  },

  "&::-webkit-scrollbar-thumb": {
    backgroundColor: "$purple100",
    borderRadius: "$xs",
  },

  "&::-webkit-scrollbar-track": {
    backgroundColor: "$purple200",
    borderRadius: "$xs",
  },

  "@media(max-width: 540px)": {
    overflowX: "auto",
    flexWrap: "nowrap",
    marginTop: "$4",
  },
});

export const Tag = styled("div", {
  height: "2.125rem",
  padding: "0 $4",
  border: "1px solid $purple100",
  borderRadius: "$full",
  fontSize: "$md",
  fontWeight: "$regular",
  lineHeight: "$base",
  color: "$purple100",
  transition: "all .2s",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  cursor: "pointer",
  flexShrink: 0,

  "&:hover": {
    backgroundColor: "$purple200",
    color: "$gray100",
  },

  variants: {
    active: {
      true: {
        backgroundColor: "$purple200",
        color: "$gray100",
        borderColor: "transparent",
      },
    },
  },
});

export const Books = styled("section", {
  display: "flex",
  alignItems: "center",
  gap: "$5",
  flexWrap: "wrap",

  marginTop: "$8",
});

export const Book = styled("div", {
  flex: "1 1 auto",
  backgroundColor: "$gray700",
  width: "100%",
  maxWidth: "19.92rem",
  borderRadius: "$sm",
  padding: "$4 $5",

  display: "flex",
  gap: "$5",

  cursor: "pointer",

  transition: "background-color .2s",

  "&:hover": {
    backgroundColor: "$gray600",
  },

  "@media(max-width: 1120px)": {
    maxWidth: "48%",
  },

  "@media(max-width: 720px)": {
    maxWidth: "100%",
  },
});

export const BookImage = styled("div", {
  width: "6.75rem",
  height: "9.5rem",
  borderRadius: "$xs",
  overflow: "hidden",

  img: {
    width: "100%",
    objectFit: "cover",
  },
});

export const BookInfo = styled("div", {
  display: "flex",
  flexDirection: "column",

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

export const SkeletonBook = styled("div", {
  flex: "1 1 auto",
  backgroundColor: "$gray700",
  width: "100%",
  maxWidth: "19.92rem",
  borderRadius: "$sm",
  height: "11.5rem",
  display: "flex",
  backgroundImage:
    "linear-gradient(90deg, #181C2A 0%, #262C42 48.63%, #181C2A 100%)",
  backgroundSize: "600px 100%",
  backgroundRepeat: "no-repeat",
  animation: `${SkeletonAnimation} .6s ease-in-out infinite`,

  "@media(max-width: 1120px)": {
    maxWidth: "48%",
  },

  "@media(max-width: 720px)": {
    maxWidth: "100%",
  },
});
