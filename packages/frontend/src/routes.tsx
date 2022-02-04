import { FC } from "react";
import Rocon, { useRoutes } from "rocon/react";
import Articles from "~/pages/Articles";
import Article from "~/pages/Article";
import Home from "~/pages/Home";

export const articlesRoutes = Rocon.Path()
  .exact({
    action: () => <Articles />,
  })
  .any("id", { action: ({ id }) => <Article id={id} /> });

export const routes = Rocon.Path()
  .exact({
    action: () => <Home />,
  })
  .route("articles", (route) => route.attach(articlesRoutes));

export const Routes: FC = () => {
  return useRoutes(routes);
};
