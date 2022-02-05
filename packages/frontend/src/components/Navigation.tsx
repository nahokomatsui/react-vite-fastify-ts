import { FC } from "react";
import { Link } from "rocon/react";
import { routes } from "~/routes";
import * as styles from "~/styles/Navigation.css";

const Navigation: FC = () => {
  return (
    <nav className={styles.root}>
      <Link className={styles.link} route={routes.exactRoute}>
        Home
      </Link>
      <Link className={styles.link} route={routes._.articles}>
        Articles
      </Link>
    </nav>
  );
};

export default Navigation;
