import { globalCss } from "./stitches.config";

export const globalStyles = globalCss({
  "*": {
    margin: "0",
    padding: "0",
    boxSizing: "border-box",
    listStyle: "none",
    textDecoration: "none",
  },

  html: {
    "@media(max-width: 720px)": {
      fontSize: "90%",
    },
  },

  body: {
    backgroundColor: "$gray800",
    color: "$gray100",
    "webkit-font-smoothing": `antialiased`,
  },

  button: {
    border: 0,
    backgroundColor: "transparent",
  },

  "body, input, textarea, button": {
    fontWeight: 400,
    fontFamily: "$default",
  },
});
