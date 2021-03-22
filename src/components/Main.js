import React from "react";
import "../stylesheets/Main.scss";
import { Link } from "react-router-dom";

const Main = (props) => {
  return (
    <main className="main">
      <Link to="/EuroList">
        <button className="main__button">Eurocopa</button>
      </Link>
      <Link to="/MundialList">
        <button className="main__button">Mundial</button>
      </Link>
    </main>
  );
};
export default Main;
