import { style } from "@vanilla-extract/css";

export const articles = style({
  display: "flex",
  flexWrap: "wrap",
  margin: "-20px",
  maxWidth: "900px",
});

export const article = style({
  width: "33.3%",
});

export const articleCard = style({
  display: "block",
  color: "#fff",
  textDecoration: "none",
  borderRadius: "4px",
  margin: "10px",
  backgroundColor: "rgba(255, 255, 255, 0.1)",
  padding: "20px",
});

export const articleTitle = style({
  fontSize: "20px",
  fontWeight: "bold",
  textOverflow: "ellipsis",
  whiteSpace: "nowrap",
  overflow: "hidden",
});

export const articleTags = style({
  marginTop: "14px",
  display: "flex",
  flexWrap: "wrap",
});

export const articleTag = style({
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
