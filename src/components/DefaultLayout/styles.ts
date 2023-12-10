import { styled } from "@stitches/react";

export const LayoutContainer = styled("div", {
  display: "grid",
  gridTemplateColumns: "auto 1fr",
  padding: "$5",

  "@media(max-width: 540px)": {
    display: "block",
    padding: "$4",
  },
});
