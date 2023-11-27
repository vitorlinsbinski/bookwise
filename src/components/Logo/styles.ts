import { styled } from "@/styles/stitches.config";

export const LogoContainer = styled("div", {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "$3",
  width: "100%",
  height: "100%",
});

export const Wordmark = styled("h1", {
  fontWeight: "$bold",
  backgroundImage: "$gradient-horizontal",
  backgroundClip: "text",
  color: "transparent",
  fontSize: "auto",
  zIndex: "5",
});
