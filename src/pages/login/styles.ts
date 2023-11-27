import { styled } from "@/styles/stitches.config";
import bgHero from "../../../public/assets/bg-login-page.png";
import purpleBg from "../../../public/assets/linear-bg-hero.png";

export const LoginContainer = styled("section", {
  width: "100%",
  maxWidth: "calc(1400px - 2 * 20px)",
  padding: "20px",
  margin: "0 auto",
  height: "100vh",

  display: "flex",
  justifyContent: "space-between",

  "@media(max-width: 1100px)": {
    flexDirection: "column",
    justifyContent: "center",
    gap: "$8",
  },
});

export const Hero = styled("div", {
  width: "100%",
  maxWidth: "41.5rem",
  height: "100%",
  backgroundImage: `url(${bgHero.src})`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  borderRadius: "$md",

  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  position: "relative",

  overflow: "hidden",

  "&::after": {
    position: "absolute",
    top: "0",
    left: "0",
    content: "",
    backgroundImage: `url(${purpleBg.src})`,
    backgroundSize: "cover",
    width: "100%",
    height: "100%",
    zIndex: 0,
    opacity: 0.9,
  },

  "@media(max-width: 1100px)": {
    width: "100%",
    maxWidth: "28rem",
    height: "50%",
    margin: "0 auto",
  },
});

export const LogoContainer = styled("div", {
  zIndex: 1,
});

export const LoginArea = styled("div", {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",

  h2: {
    color: "$gray100",
    fontSize: "$2xl",
    fontWeight: "$bold",
    lineHeight: "$short",
  },

  p: {
    color: "$gray200",
    fontSize: "$md",
    fontWeight: "$regular",
    lineHeight: "$base",
  },

  "@media(max-width: 1100px)": {
    margin: "0 auto",
  },

  "@media(max-width: 720px)": {
    margin: 0,
    textAlign: "center",
  },
});

export const ButtonsContainer = styled("div", {
  marginTop: "$10",

  display: "flex",
  flexDirection: "column",

  gap: "$4",
});
