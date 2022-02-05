import { FC } from "react";
import { RoconRoot } from "rocon/react";
import Navigation from "~/components/Navigation";
import { Routes } from "~/routes";
import * as styles from "~/styles/App.css";

const App: FC = () => {
  return (
    <RoconRoot>
      <div className={styles.root}>
        <Navigation />
        <main className={styles.main}>
          <Routes />
        </main>
      </div>
    </RoconRoot>
  );
};

export default App;
