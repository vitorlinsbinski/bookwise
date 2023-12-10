import { globalCss } from "./stitches.config";

export const globalStyles = globalCss({
  "*": {
    margin: "0",
    padding: "0",
    boxSizing: "border-box",
    listStyle: "none",
    textDecoration: "none",
  },

  body: {
    backgroundColor: "$gray800",
    color: "$gray100",
    "webkit-font-smoothing": `antialiased`,
    fontFamily: "$default",
  },

  button: {
    border: 0,
    backgroundColor: "transparent",
  },

  "body, input, textarea, button": {
    fontFamily: "$default",
    fontWeight: 400,
  },
});
