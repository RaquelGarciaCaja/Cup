import React from "react";
import "../stylesheets/Main.scss";
import { Link } from "react-router-dom";

const Main = (props) => {
  return (
    <main className="main">
      <h1 className="main__title">Qué te gusta más</h1>
      <div className="main__container">
        <Link to="/EuroList">
          <button className="main__button">Eurocopa</button>
        </Link>
        <Link to="/MundialList">
          <button className="main__button">Mundial</button>
        </Link>
      </div>
    </main>
  );
};
export default Main;
