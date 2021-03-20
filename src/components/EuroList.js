import React from "react";
import "../stylesheets/EuroList.scss";
import { Link } from "react-router-dom";
import euroYears from "../data/euroYears";

const EuroList = () => {
  const euroYear = euroYears.map((year) => {
    return (
      <li className="euroList__list" key={year.id}>
        <Link className="euroList__button" to={`/Euro/${year.id}`}>
          <button className="euroList__button">{year.year}</button>
        </Link>
      </li>
    );
  });

  return (
    <section className="euroList">
      <h1 className="euroList__title">EuroCopa</h1>
      <ul className="euroList__containerYears">{euroYear}</ul>
    </section>
  );
};
export default EuroList;
