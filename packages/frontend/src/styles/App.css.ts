import { style } from "@vanilla-extract/css";

export const root = style({
  backgroundColor: "#282c34",
  minHeight: "100vh",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  fontSize: "calc(10px + 2vmin)",
  color: "white",
});

export const main = style({
  flexGrow: 1,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
});
