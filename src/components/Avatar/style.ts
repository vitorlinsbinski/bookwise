import { styled } from "@stitches/react";

export const AvatarContainer = styled("div", {
  borderRadius: "50%",
  overflow: "hidden",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  border: "1px solid $gradient-vertical",

  width: "var(--size)",
  height: "var(--size)",

  img: {
    width: "100%",
    height: "100%",
  },
});
