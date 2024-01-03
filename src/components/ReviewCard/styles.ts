import { styled } from "@/styles/stitches.config";

export const CardContainer = styled("div", {
  width: "100%",
  backgroundColor: "$gray700",
  padding: "$6",
  borderRadius: "$sm",
});

export const ProfileArea = styled("div", {
  display: "flex",
  alignItems: "flex-start",
  justifyContent: "space-between",

  marginBottom: "$8",

  "@media(max-width: 720px)": {
    flexDirection: "column",
    gap: "$4",
  },
});

export const Persona = styled("div", {
  display: "flex",
  alignItems: "center",
  gap: "$4",
});

export const PersonaInfo = styled("div", {
  h4: {
    fontSize: "$md",
    color: "$gray100",
    fontWeight: "$regular",
    lineHeight: "$base",
  },

  span: {
    fontSize: "$sm",
    color: "$gray400",
    fontWeight: "$regular",
    lineHeight: "$base",
  },
});

export const RatingContainer = styled("div", {
  display: "flex",
  alignItems: "center",
  gap: "$1",

  svg: {
    color: "$purple100",
  },
});

export const BookArea = styled("div", {
  display: "flex",
  alignItems: "flex-start",
  gap: "$5",

  "@media(max-width: 720px)": {
    flexDirection: "column",
    alignItems: "center",
  },
});

export const ImageBookContainer = styled("div", {
  width: "100%",
  maxWidth: "6.75rem",
  height: "9.5rem",
  borderRadius: "$sm",
  overflow: "hidden",

  img: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },
});

export const AboutBook = styled("div", {
  p: {
    fontSize: "$sm",
    color: "$gray300",
    fontWeight: "$regular",
    lineHeight: "$base",
  },
});

export const Title = styled("div", {
  h3: {
    fontSize: "$md",
    color: "$gray100",
    fontWeight: "$regular",
    lineHeight: "$short",
  },

  span: {
    fontSize: "$sm",
    color: "$gray400",
    fontWeight: "$regular",
    lineHeight: "$base",
  },
});
