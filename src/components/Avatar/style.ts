import { styled } from "@/styles/stitches.config";

export const AvatarContainer = styled("div", {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  width: "calc(var(--size) + 2px)",

  height: "calc(var(--size) + 2px)",
  borderRadius: "$full",
  background: "$gradient-vertical",
  padding: 2,

  img: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    borderRadius: "$full",
    position: "relative",
    zIndex: 1,
  },
});
