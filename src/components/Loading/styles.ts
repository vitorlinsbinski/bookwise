import { Rotate, ZoomInOut } from "@/styles/animations";
import { styled } from "@/styles/stitches.config";

export const LoadingContainer = styled("div", {
  position: "absolute",
  width: "100%",
  height: "100%",
  inset: 0,

  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  img: {
    zIndex: 2024,
    position: "fixed",
    animation: `${ZoomInOut} .5s ease-in-out infinite`,
  },
});

export const Overlay = styled("div", {
  width: "100vw",
  height: "100vh",
  position: "fixed",
  inset: 0,
  background: "rgba(24, 28, 42, 0.7)",
  zIndex: 2023,
});

export const Loader = styled("div", {
  width: "4rem",
  height: "4rem",
  borderRight: "3px solid $purple100",
  borderRadius: "$full",
  position: "fixed",
  zIndex: 2025,

  animation: `${Rotate} .5s linear infinite`,
});
