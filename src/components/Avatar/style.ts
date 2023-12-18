import { styled } from "@/styles/stitches.config";

export const AvatarContainer = styled("div", {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  width: "var(--size)",

  height: "var(--size)",

  position: "relative",
  zIndex: 1,

  img: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    borderRadius: "$full",
    position: "relative",
    zIndex: 1,
  },

  "&::after": {
    content: "",
    position: "absolute",
    top: -2.3,
    left: -1.7,
    width: "calc(var(--size) + 4px)",
    height: "calc(var(--size) + 4px)",
    background: "$gradient-vertical",
    borderRadius: "$full",
    zIndex: 0,
  },
});
