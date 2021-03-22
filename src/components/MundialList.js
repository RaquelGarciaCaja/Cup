import React from "react";
import "../stylesheets/MundialList.scss";
import { Link } from "react-router-dom";
import mundialYears from "../data/mundialYears";

const MundialList = (props) => {
  //states
  // const [filterYear, setFilterYear] = useState("");

  // const handlerFilter = (ev) => {
  //   const inputValue = ev.target.value;
  //   setFilterYear(inputValue);
  // };

  // const filteredYears = euroYears.filter((year) => {
  //   year.includes(filterYear);
  // });

  const mundialYear = mundialYears.map((year) => {
    console.log(year.year);
    return (
      <li className="mundialList__list" key={year.id}>
        <Link className="mundialList__buttonText" to={`/Mundial/${year.id}`}>
          <button className="mundialList__button">{year.year}</button>
        </Link>
      </li>
    );
  });

  // const euroYear = props.euroYears.map((year) => {
  //   return (
  //     <li className="mundialList__list" key={year.id}>
  //       <Link className="mundialList__button" to={`/Euro/${year.id}`}>
  //         <button className="mundialList__button">{year.year}</button>
  //       </Link>
  //     </li>
  //   );
  // });

  return (
    <section className="mundialList">
      <h1 className="mundialList__title">Mundial</h1>
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
      <ul className="mundialList__containerYears">{mundialYear}</ul>
    </section>
  );
};
export default MundialList;
