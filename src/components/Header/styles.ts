import { styled } from "@/styles/stitches.config";

export const HeaderContainer = styled("header", {
  paddingTop: "2.2rem",

  "@media(max-width: 540px)": {
    marginLeft: "4rem",
    paddingTop: "$2",
  },
});

export const Title = styled("div", {
  display: "flex",
  alignItems: "center",
  gap: "$3",

  svg: {
    color: "$green100",
    width: "2rem",
    height: "2rem",
  },

  h1: {
    fontSize: "$2xl",
    color: "$gray100",
    fontWeight: "$bold",
    lineHeight: "$short",
  },
});
