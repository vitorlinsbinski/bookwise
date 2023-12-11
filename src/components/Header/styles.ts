import { styled } from "@/styles/stitches.config";

export const HeaderContainer = styled("header", {
  width: " 100%",
  padding: "2rem 0 2rem 3rem",
  backgroundColor: "$gray800",
  position: "sticky",
  top: 0,
  zIndex: "20",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  flexWrap: "wrap",
  gap: "$5",

  "@media(max-width: 540px)": {
    margin: 0,
    padding: "$4 0 $4 4rem",
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
