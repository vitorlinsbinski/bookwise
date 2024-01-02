import { keyframes } from "./stitches.config";

export const SkeletonAnimation = keyframes({
  "0%": {
    backgroundPosition: "-1000px 0",
  },
  "100%": {
    backgroundPosition: "calc(1000px + 100%) 0",
  },
});
