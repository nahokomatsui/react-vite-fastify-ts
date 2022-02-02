import { FC } from "react";
import { RoconRoot } from "rocon/react";
import Navigation from "./components/Navigation";
import { Routes } from "./routes";
import "./styles/App.css";

const App: FC = () => {
  return (
    <RoconRoot>
      <div className="App">
        <Navigation />
        <main className="App-main">
          <Routes />
        </main>
      </div>
    </RoconRoot>
  );
};

export default App;
