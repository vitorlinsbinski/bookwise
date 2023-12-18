import { styled, keyframes } from "@/styles/stitches.config";
import * as Dialog from "@radix-ui/react-dialog";

const BottomToTop = keyframes({
  "0%": {
    opacity: 0,
    transform: "translate(-50%, -47%)",
  },
  "100%": {
    opacity: 1,
    transform: "translate(-50%, -50%)",
  },
});

const TopToBottom = keyframes({
  "0%": {
    opacity: 1,
    transform: "translate(-50%, -50%)",
  },
  "100%": {
    opacity: 0,
    transform: "translate(-50%, -47%)",
  },
});

const FadeIn = keyframes({
  "0%": {
    opacity: 0,
  },
  "100%": {
    opacity: 1,
  },
});

const FadeOut = keyframes({
  "100%": {
    opacity: 0,
  },
  "0%": {
    opacity: 1,
  },
});

export const Overlay = styled(Dialog.Overlay, {
  width: "100vw",
  height: "100vh",
  position: "fixed",
  inset: 0,
  background: "rgba(0, 0, 0, 0.60)",
  zIndex: 2023,

  "&[data-state='open']": {
    animation: `${FadeIn} .3s`,
  },

  "&[data-state='closed']": {
    animation: `${FadeOut} .3s`,
  },
});

export const Content = styled(Dialog.Content, {
  width: "100%",
  maxWidth: "32.25rem",
  backgroundColor: "$gray700",
  boxShadow: "4px 16px 24px 0px rgba(0, 0, 0, 0.25)",
  padding: "3.5rem 4.5rem",
  zIndex: 2024,

  position: "fixed",
  top: " 50%",
  left: "50%",
  transform: "translate(-50%, -50%)",

  textAlign: "center",
  borderRadius: "$sm",

  h3: {
    fontSize: "$md",
    fontWeight: "$regular",
    lineHeight: "$short",
    color: "$gray200",
  },

  "&[data-state='open']": {
    animation: `${BottomToTop} .3s ease`,
  },

  "&[data-state='closed']": {
    animation: `${TopToBottom} .2s ease`,
  },

  "@media(max-width: 540px)": {
    width: "90vw",
    padding: "3.5rem 1.5rem",
  },
});

export const CloseButton = styled(Dialog.Close, {
  position: "absolute",
  backgroundColor: "transparent",
  border: 0,
  lineHeight: 0,
  top: 16,
  right: 16,
  cursor: "pointer",

  svg: {
    color: "$gray400",
    transition: "color .2s",
  },

  "&:hover": {
    svg: {
      color: "$gray100",
    },
  },
});

export const LoginButtons = styled("div", {
  marginTop: "$10",
  display: "flex",
  flexDirection: "column",
  gap: "$4",

  "@media(max-width: 720px)": {
    marginTop: "$6",
  },
});
