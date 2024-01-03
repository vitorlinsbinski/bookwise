import { BottomToTop, FadeIn, FadeOut, TopToBottom } from "@/styles/animations";
import { styled } from "@/styles/stitches.config";
import * as Dialog from "@radix-ui/react-dialog";

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
  maxWidth: "24.62rem",
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

  h2: {
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

export const Buttons = styled("div", {
  marginTop: "$6",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "$3",
});

const BaseButton = styled("button", {
  padding: "1rem 2.25rem",
  borderRadius: "$sm",

  fontSize: "$md",
  fontWeight: "$bold",
  lineHeight: "$short",

  cursor: "pointer",

  transition: "all .2s",
});

export const CancelButton = styled(BaseButton, {
  backgroundColor: "$gray600",

  color: "$gray100",

  "&:hover": {
    backgroundColor: "$gray500",
  },
});

export const LogOutButton = styled(BaseButton, {
  backgroundColor: "transparent",
  border: "1px solid $gray600",
  color: "$gray300",

  "&:hover": {
    borderColor: "$gray200",
    color: "$gray200",
  },
});
