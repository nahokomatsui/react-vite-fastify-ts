import { FC, useState } from "react";
import logo from "~/logo.svg";
import * as styles from "~/styles/Home.css";
import useAspidaSWR from "@aspida/swr";
import { apiClient } from "~/api";

const Home: FC = () => {
  const [count, setCount] = useState(0);
  const { data, error } = useAspidaSWR(apiClient.ping);

  return (
    <div className={styles.root}>
      <header>
        <img src={logo} className={styles.logo} alt="logo" />
        <p>Hello Vite + React!</p>
        <p>
          Data from API:{" "}
          {error ? (
            <span style={{ fontWeight: "bold", color: "red" }}>
              [ERROR] {error.toString()}
            </span>
          ) : (
            (
              <span style={{ fontWeight: "bold", color: "greenyellow" }}>
                {data}
              </span>
            ) ?? "Loading..."
          )}
        </p>
        <p>
          <button
            type="button"
            onClick={() => setCount((count) => count + 1)}
            className={styles.button}
          >
            count is: {count}
          </button>
        </p>
        <p>
          Edit <code>App.tsx</code> and save to test HMR updates.
        </p>
        <p>
          <a
            className={styles.link}
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          {" | "}
          <a
            className={styles.link}
            href="https://vitejs.dev/guide/features.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Vite Docs
          </a>
        </p>
      </header>
    </div>
  );
};

export default Home;
