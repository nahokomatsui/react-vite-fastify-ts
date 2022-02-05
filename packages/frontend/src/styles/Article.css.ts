import { style } from "@vanilla-extract/css";

export const root = style({
  minWidth: "400px",
  minHeight: "600px",
});

export const title = style({
  fontWeight: "bold",
});

export const tags = style({
  marginTop: "14px",
  display: "flex",
  flexWrap: "wrap",
});

export const tag = style({
  fontSize: "14px",
  border: "1px solid",
  borderRadius: "12px",
  padding: "4px 8px",
  selectors: {
    "& + &": {
      marginLeft: "10px",
    },
  },
});
