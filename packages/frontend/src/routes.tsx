import { FC } from "react";
import Rocon, { useLocation, useRoutes } from "rocon/react";
import Articles from "./pages/Articles";
import Home from "./pages/Home";

export const routes = Rocon.Path()
  .exact({
    action: () => <Home />,
  })
  .routes({
    articles: {
      action: () => <Articles />,
    },
  });

export const Routes: FC = () => {
  const location = useLocation();
  return useRoutes(routes);
};
