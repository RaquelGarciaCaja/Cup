import React, { useState } from "react";
import "../stylesheets/EuroList.scss";
import { Link } from "react-router-dom";
// import Filters from "./Filters";
import euroYears from "../data/euroYears";

const EuroList = (props) => {
  //states
  const [filterYear, setFilterYear] = useState("");

  const handlerFilter = (ev) => {
    const inputValue = ev.target.value;
    setFilterYear(inputValue);
  };

  // const filteredYears = euroYears.filter((year) => {
  //   year.includes(filterYear);
  // });

  const euroYear = euroYears.map((year) => {
    return (
      <li className="euroList__list" key={year.id}>
        <Link to={`/Euro/${year.id}`}>
          <button className="euroList__button">{year.year}</button>
        </Link>
      </li>
    );
  });

  // const euroYear = props.euroYears.map((year) => {
  //   return (
  //     <li className="euroList__list" key={year.id}>
  //       <Link className="euroList__button" to={`/Euro/${year.id}`}>
  //         <button className="euroList__button">{year.year}</button>
  //       </Link>
  //     </li>
  //   );
  // });

  return (
    <section className="euroList__container">
      <h1 className="euroList__title">EuroCopa</h1>
      {/* <form className="filter--name">
        <label className="name">Año:</label>
        <input
          className="filter--name--input"
          type="number"
          placeholder="Ej: 1992"
          name="year"
          onChange={handlerFilter}
        />
      </form>{" "} */}
      <ul className="euroList__containerYears">{euroYear}</ul>
    </section>
  );
};
export default EuroList;
