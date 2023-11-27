import { styled } from "@/styles/stitches.config";

export const ProfileContainer = styled("main", {
  paddingTop: "2.2rem",

  "@media(max-width: 540px)": {
    marginLeft: "4rem",
    paddingTop: "$2",
  },
});
