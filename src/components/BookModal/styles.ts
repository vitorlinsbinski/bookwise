import { styled, keyframes, css } from "@/styles/stitches.config";
import {
  FadeIn,
  FadeOut,
  LeftToRight,
  RightToLeft,
  SkeletonAnimation,
} from "@/styles/animations";

import * as Dialog from "@radix-ui/react-dialog";

export const Overlay = styled(Dialog.Overlay, {
  width: "100vw",
  height: "100vh",
  position: "fixed",
  inset: 0,
  background: "rgba(0, 0, 0, 0.60)",
  zIndex: 2023,

  "&[data-state='open']": {
    animation: `${FadeIn} .3s`,
  },

  "&[data-state='closed']": {
    animation: `${FadeOut} .3s`,
  },
});

export const Content = styled(Dialog.Content, {
  width: "41.25rem",
  height: "100%",
  backgroundColor: "$gray800",
  boxShadow: "-4px 0px 30px 0px rgba(0, 0, 0, 0.50)",
  padding: "4rem 3rem",
  zIndex: 2024,

  position: "fixed",
  top: 0,
  right: 0,

  overflowY: "auto",

  "&::-webkit-scrollbar": {
    width: 6,
    borderRadius: "$full",
  },

  "&::-webkit-scrollbar-thumb": {
    backgroundColor: "$gray600",
    borderRadius: "$full",
  },

  "&::-webkit-scrollbar-track": {
    backgroundColor: "$gray700",
  },

  "&[data-state='open']": {
    animation: `${RightToLeft} .3s ease`,
  },

  "&[data-state='closed']": {
    animation: `${LeftToRight} .2s ease`,
  },

  "@media(max-width: 720px)": {
    width: "100%",
    padding: "2rem 1.5rem",
  },
});

export const CloseButton = styled(Dialog.Close, {
  position: "absolute",
  backgroundColor: "transparent",
  border: 0,
  lineHeight: 0,
  top: 24,
  right: 48,
  cursor: "pointer",

  svg: {
    color: "$gray400",
    transition: "color .2s",
  },

  "&:hover": {
    svg: {
      color: "$gray100",
    },
  },

  "@media(max-width: 720px)": {
    top: 10,
    right: 20,
    backgroundColor: "$gray600",
    padding: "$3",
    borderRadius: "$sm",
    position: "fixed",
  },
});

export const BookCard = styled("div", {
  width: "100%",
  padding: "$6 $8 $4 $8",
  backgroundColor: "$gray700",
  borderRadius: "$sm",

  "@media(max-width: 720px)": {
    marginTop: "3rem",
  },
});

export const BookCardTop = styled("div", {
  display: "flex",
  gap: "$8",
  paddingBottom: "$10",
  borderBottom: "1px solid $gray600",

  "@media(max-width: 720px)": {
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
  },
});

export const BookCardTopImage = styled("div", {
  width: "10.72rem",
  height: "15.13rem",
  borderRadius: "$xs",
  overflow: "hidden",

  img: {
    width: "100%",
    objectFit: "cover",
  },
});

export const BookCardTopText = styled("div", {
  display: "flex",
  flexDirection: "column",
  flex: "1",

  div: {
    "&:first-child": {
      h3: {
        fontSize: "$lg",
        color: "$gray100",
        lineHeight: "$short",
        fontWeight: "$bold",
        marginBottom: "$2",
      },

      span: {
        fontSize: "$md",
        color: "$gray300",
        lineHeight: "$base",
        fontWeight: "$regular",
      },
    },
  },

  span: {
    "&:last-child": {
      fontSize: "$sm",
      color: "$gray400",
      lineHeight: "$base",
      fontWeight: "$regular",
    },
  },

  "@media(max-width: 720px)": {
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
  },
});

export const BookCardTopTextStars = styled("div", {
  marginTop: "auto",
  display: "flex",
  alignItems: "center",
  gap: "$1",
  marginBottom: "$1",

  svg: {
    color: "$purple100",
    width: "1.25rem",
    height: "1.25rem",
  },

  "@media(max-width: 720px)": {
    margin: "0.7rem auto",
  },
});

export const BookCardBottom = styled("div", {
  padding: "$6 0",

  display: "flex",
  alignItems: "center",
  gap: "3.5rem",
});

export const BookCardBottomIcon = styled("div", {
  display: "flex",
  alignItems: "center",
  gap: "$4",

  svg: {
    color: "$green100",
  },

  div: {
    display: "flex",
    flexDirection: "column",

    span: {
      fontSize: "$sm",
      color: "$gray300",
      lineHeight: "$base",
      fontWeight: "$regular",
    },

    strong: {
      fontSize: "$md",
      color: "$gray200",
      lineHeight: "$short",
      fontWeight: "$bold",
    },
  },
});

export const ReviewsArea = styled("div", {
  marginTop: "3.8rem",
});

export const ReviewsHeading = styled("div", {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  marginBottom: "1.37rem",

  span: {
    fontSize: "$sm",
    color: "$gray200",
    lineHeight: "$base",
    fontWeight: "$regular",
  },

  button: {
    border: 0,
    backgroundColor: "transparent",
    fontSize: "$md",
    color: "$purple100",
    lineHeight: "$base",
    fontWeight: "$regular",
    cursor: "pointer",
    transition: "color .2s",
    display: "flex",
    alignItems: "center",
    gap: "$2",

    "&:hover": {
      color: "$green100",
    },
  },
});

export const ReviewForm = styled("form", {
  padding: "$6",
  backgroundColor: "$gray700",
  borderRadius: "$sm",
});

export const ReviewFormHeading = styled("div", {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  marginBottom: "$6",

  div: {
    "&:first-child": {
      display: "flex",
      alignItems: "center",
      gap: "$4",

      strong: {
        fontSize: "$ld",
        color: "$gray100",
        lineHeight: "$short",
        fontWeight: "$bold",
      },
    },

    "&:last-child": {
      display: "flex",
      alignItems: "center",
      gap: "$1",

      button: {
        cursor: "pointer",

        svg: {
          color: "$purple100",
          position: "relative",
        },
      },
    },
  },

  "@media(max-width: 720px)": {
    flexDirection: "column",
    alignItems: "start",
    gap: "$4",
  },
});

export const ReviewTextArea = styled("textarea", {
  width: "100%",
  height: "10.25rem",
  resize: "vertical",
  backgroundColor: "$gray800",
  borderRadius: "$sm",
  border: 0,
  outline: "1px solid $gray500",
  padding: "$3 $5",
  fontSize: "$sm",
  fontWeight: "$regular",
  lineHeight: "$base",
  color: "$gray200",

  "&:focus": {
    outlineColor: "$green100",
  },

  "&:placeholder": {
    fontSize: "$sm",
    fontWeight: "$regular",
    lineHeight: "$base",
    color: "$gray400",
  },
});

export const ReviewActions = styled("div", {
  marginTop: "$3",
  display: "flex",
  alignItems: "center",
  justifyContent: "end",
  gap: "$2",
});

export const ReviewButton = styled("button", {
  width: "2.5rem",
  height: "2.5rem",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  backgroundColor: "$gray600",
  borderRadius: "$sm",

  transition: "background-color .2s",
  cursor: "pointer",

  "&:first-child": {
    svg: {
      color: "$purple100",
    },
  },

  "&:last-child": {
    svg: {
      color: "$green100",
    },
  },

  "&:hover": {
    backgroundColor: "$gray500",
  },
});

export const Comments = styled("div", {
  display: "flex",
  flexDirection: "column",
  gap: "$3",
  marginTop: "$4",
});

export const Comment = styled("div", {
  width: "100%",
  padding: "$6",
  backgroundColor: "$gray700",
  borderRadius: "$sm",

  p: {
    fontSize: "$sm",
    fontWeight: "$regular",
    lineHeight: "$base",
    color: "$gray300",
  },

  variants: {
    isUserComment: {
      true: {
        backgroundColor: "$gray600",
      },
    },
  },
});

export const CommentHeading = styled("div", {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",

  marginBottom: "$5",

  "@media(max-width: 720px)": {
    flexDirection: "column",
    alignItems: "start",
    gap: "$5",
  },
});

export const CommentHeadingLeft = styled("div", {
  display: "flex",
  alignItems: "center",
  gap: "$4",

  div: {
    "&:last-child": {
      display: "flex",
      flexDirection: "column",

      strong: {
        fontSize: "$md",
        color: "$gray100",
        lineHeight: "$short",
        fontWeight: "$bold",
      },

      span: {
        fontSize: "$sm",
        color: "$gray400",
        lineHeight: "$base",
        fontWeight: "$regular",
      },
    },
  },
});

export const CommentHeadingRight = styled("div", {
  display: "flex",
  alignItems: "center",
  gap: "$1",

  svg: {
    color: "$purple100",
    width: "1rem",
    height: "1rem",
  },
});

export const ErrorTextMessage = styled("div", {
  span: {
    fontSize: "$sm",
    color: "$gray400",
    lineHeight: "$base",
    fontWeight: "$regular",
  },
});

export const SkeletonCard = styled("div", {
  width: "100%",
  padding: "$6 $8 $4 $8",
  backgroundColor: "$gray700",
  backgroundImage:
    "linear-gradient(90deg, #181C2A 0%, #262C42 48.63%, #181C2A 100%)",
  backgroundSize: "900px 100%",
  backgroundRepeat: "no-repeat",
  borderRadius: "$sm",
  animation: `${SkeletonAnimation} .8s ease-in-out infinite`,
  height: "25rem",
  marginBottom: "5.5rem",

  "@media(max-width: 720px)": {
    marginTop: "3rem",
  },
});

export const SkeletonComments = styled("div", {
  display: "flex",
  flexDirection: "column",
  gap: "$6",
  marginTop: "2rem",

  span: {
    fontSize: "$sm",
    color: "$gray200",
    lineHeight: "$base",
    fontWeight: "$regular",
  },
});

export const SkeletonComment = styled("div", {
  width: "100%",
  padding: "$6",
  backgroundColor: "$gray700",
  borderRadius: "$sm",
  backgroundImage:
    "linear-gradient(90deg, #181C2A 0%, #262C42 48.63%, #181C2A 100%)",
  backgroundSize: "900px 100%",
  backgroundRepeat: "no-repeat",
  animation: `${SkeletonAnimation} .8s ease-in-out infinite`,
  height: "4rem",
});

export const SkeletonImageBook = styled("div", {
  width: "10.72rem",
  height: "15.13rem",
  borderRadius: "$sm",
  overflow: "hidden",
  backgroundColor: "$gray700",
  backgroundImage:
    "linear-gradient(90deg, #181C2A 0%, #262C42 48.63%, #181C2A 100%)",
  backgroundSize: "700px 100%",
  backgroundRepeat: "no-repeat",
  animation: `${SkeletonAnimation} 1s ease-in-out infinite`,
});
