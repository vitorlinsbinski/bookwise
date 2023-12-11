import { styled } from "@/styles/stitches.config";

export const Button = styled("button", {
  width: "23.25rem",
  padding: "$5 $6",
  backgroundColor: "$gray600",
  cursor: "pointer",

  display: "flex",
  alignItems: "center",
  gap: "$5",
  border: 0,
  borderRadius: "$sm",

  transition: "all .3s",

  svg: {
    width: "2rem",
    height: "2rem",
    color: "$purple100",
  },

  span: {
    color: "$gray200",
    fontSize: "$lg",
    lineHeight: "$base",
    fontWeight: "$bold",
  },

  "&:hover": {
    backgroundColor: "$gray500",
  },

  "@media(max-width: 720px)": {
    width: "100%",
  },
});
