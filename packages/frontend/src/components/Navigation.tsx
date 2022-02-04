import { FC } from "react";
import { Link } from "rocon/react";
import { routes } from "~/routes";
import "~/styles/Navigation.css";

const Navigation: FC = () => {
  return (
    <nav className="Nav">
      <Link className="Nav-link" route={routes.exactRoute}>
        Home
      </Link>
      <Link className="Nav-link" route={routes._.articles}>
        Articles
      </Link>
    </nav>
  );
};

export default Navigation;
