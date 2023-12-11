import { styled } from "@/styles/stitches.config";

import sidebarBg from "../../../public/assets/sidebar-bg.png";

export const SidebarContainer = styled("aside", {
  width: "4rem",
  height: "61.75rem",
  maxHeight: "93vh",

  backgroundColor: "$gray800",
  borderRadius: "$md",

  position: "sticky",
  top: 20,
  left: 20,
  overflow: "hidden",
  zIndex: 1000,
  padding: "$5 $8 $6 $8",

  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",

  transition: "width .3s ease-out",

  "&::before": {
    content: "",
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    opacity: 0.9,
    backgroundImage: `url(${sidebarBg.src})`,
    backgroundSize: "cover",
    zIndex: 0,
  },

  variants: {
    isOpen: {
      true: {
        width: "14.5rem",
      },
    },
  },

  "@media(max-width: 540px)": {
    position: "fixed",
    top: 0,
    left: 0,
    borderRadius: "0 $md $md 0",
    maxHeight: "100%",
  },
});

export const SidebarToggle = styled("button", {
  zIndex: 1,
  margin: "0",
  marginBottom: "$5",
  cursor: "pointer",
  padding: "$1",

  svg: {
    color: "$gray100",
  },

  variants: {
    isOpen: {
      true: {
        marginLeft: "auto",
      },
    },
  },
});

export const LogoContainer = styled("div", {
  zIndex: 1,
  position: "relative",
});

export const Navbar = styled("nav", {
  marginTop: "4rem",
  zIndex: 1,
});

export const NavList = styled("ul", {
  display: "flex",
  flexDirection: "column",
  gap: "$6",
});

export const NavItem = styled("li", {});

export const NavButton = styled("button", {
  display: "flex",
  alignItems: "center",
  gap: "$3",

  cursor: "pointer",
  backgroundColor: "transparent",
  border: 0,
  position: "relative",

  svg: {
    color: "$gray400",
    transition: "all .2s",
  },

  span: {
    color: "$gray400",
    fontSize: "$md",
    fontWeight: "$regular",
    lineHeight: "$base",

    transition: "all .2s",

    opacity: 0,
    position: "absolute",
  },

  "&::before": {
    content: "",
    position: "absolute",
    width: "4px",
    height: "0%",
    top: 0,
    left: "-1.1rem",
    background: "$gradient-vertical",
    borderRadius: "$sm",
    transform: "scale(0) ",
    transition: "all .3s ease",
  },

  "&:hover": {
    svg: {
      color: "$gray100",
    },

    span: {
      color: "$gray100",
    },
  },

  "&.active": {
    "&::before": {
      height: "100%",
      transform: "scale(1)",
    },

    svg: {
      color: "$gray100",
    },

    span: {
      color: "$gray100",

      fontWeight: "$bold",
    },
  },

  variants: {
    isOpen: {
      true: {
        "&::before": {
          left: "-1rem",
        },

        span: {
          opacity: 1,
          position: "inherit",
        },
      },
    },
  },
});

export const LogInButton = styled("button", {
  marginTop: "auto",
  display: "flex",
  alignItems: "center",
  gap: "$3",
  backgroundColor: "transparent",
  border: 0,
  zIndex: 1,
  cursor: "pointer",

  span: {
    fontSize: "$md",
    color: "$gray200",
    fontWeight: "$bold",
    lineHeight: "$base",
    transition: "color .2s",
    position: "absolute",
    opacity: 0,
  },

  svg: {
    color: "$green100",
  },

  "&:hover": {
    span: {
      color: "$green100",
    },
  },

  variants: {
    isOpen: {
      true: {
        span: {
          position: "inherit",
          opacity: 1,
        },
      },
    },
  },
});

export const LogOutButton = styled("button", {
  marginTop: "auto",
  backgroundColor: "transparent",
  border: 0,
  zIndex: 1,
  cursor: "pointer",
  display: "flex",
  alignItems: "center",
  gap: "$3",

  span: {
    fontSize: "$sm",
    color: "$gray200",
    fontWeight: "$regular",
    lineHeight: "$base",
    transition: "all .2s",
    position: "absolute",
    opacity: 0,
  },

  svg: {
    color: "#F75A68",
    position: "absolute",
    opacity: 0,
  },

  "&:hover": {
    span: {
      color: "#F75A68",
    },
  },

  variants: {
    isOpen: {
      true: {
        span: {
          position: "inherit",
          opacity: 1,
        },

        svg: {
          position: "inherit",
          opacity: 1,
        },
      },
    },
  },
});
