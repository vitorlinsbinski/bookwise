import { keyframes } from "./stitches.config";

export const SkeletonAnimation = keyframes({
  "0%": {
    backgroundPosition: "-1000px 0",
  },
  "100%": {
    backgroundPosition: "calc(1000px + 100%) 0",
  },
});

export const RightToLeft = keyframes({
  "0%": {
    transform: "translateX(100%)",
  },
  "100%": {
    transform: "translateX(0)",
  },
});

export const LeftToRight = keyframes({
  "0%": {
    transform: "translateX(0)",
  },
  "100%": {
    transform: "translateX(100%)",
  },
});

export const FadeIn = keyframes({
  "0%": {
    opacity: 0,
  },
  "100%": {
    opacity: 1,
  },
});

export const FadeOut = keyframes({
  "100%": {
    opacity: 0,
  },
  "0%": {
    opacity: 1,
  },
});

export const BottomToTop = keyframes({
  "0%": {
    opacity: 0,
    transform: "translate(-50%, -47%)",
  },
  "100%": {
    opacity: 1,
    transform: "translate(-50%, -50%)",
  },
});

export const TopToBottom = keyframes({
  "0%": {
    opacity: 1,
    transform: "translate(-50%, -50%)",
  },
  "100%": {
    opacity: 0,
    transform: "translate(-50%, -47%)",
  },
});

export const Rotate = keyframes({
  from: {
    transform: "rotate(0)",
  },
  to: {
    transform: "rotate(360deg)",
  },
});

export const ZoomInOut = keyframes({
  "0%": {
    transform: "scale(1)",
  },
  "50%": {
    transform: "scale(1.1)",
  },
  "100$": {
    transform: "scale(1)",
  },
});
