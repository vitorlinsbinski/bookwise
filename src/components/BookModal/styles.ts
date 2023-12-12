import { styled, keyframes, css } from "@/styles/stitches.config";

import * as Dialog from "@radix-ui/react-dialog";

const RightToLeft = keyframes({
  "0%": {
    transform: "translateX(100%)",
  },
  "100%": {
    transform: "translateX(0)",
  },
});

const LeftToRight = keyframes({
  "0%": {
    transform: "translateX(0)",
  },
  "100%": {
    transform: "translateX(100%)",
  },
});

const FadeIn = keyframes({
  "0%": {
    opacity: 0,
  },
  "100%": {
    opacity: 1,
  },
});

const FadeOut = keyframes({
  "100%": {
    opacity: 0,
  },
  "0%": {
    opacity: 1,
  },
});

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
});

export const BookCard = styled("div", {
  width: "100%",
  padding: "$6 $8 $4 $8",
  backgroundColor: "$gray700",
  borderRadius: "$sm",
});

export const BookCardTop = styled("div", {
  display: "flex",
  gap: "$8",
  paddingBottom: "$10",
  borderBottom: "1px solid $gray600",
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
        },
      },
    },
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

export const ReviewButton = styled("div", {
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
});

export const CommentHeadingLeft = styled("div", {
  display: "flex",
  alignItems: "center",
  gap: "$4",

  div: {
    "&:last-child": {
      display: "flex",
      flexDirection: "column",
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
