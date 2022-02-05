import { style, keyframes } from "@vanilla-extract/css";

export const root = style({
  textAlign: "center",
});

const logoSpin = keyframes({
  "0%": { transform: "rotate(0deg)" },
  "100%": { transform: "rotate(360deg)" },
});

export const logo = style({
  height: "40vmin",
  pointerEvents: "none",
  "@media": {
    "prefers-reduced-motion: no-preference": {
      animation: `${logoSpin} infinite 20s linear{}`,
    },
  },
});

export const link = style({
  color: "#61dafb",
});

export const button = style({
  fontSize: "calc(10px + 2vmin)",
});
