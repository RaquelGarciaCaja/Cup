import React from "react";
import "../stylesheets/Header.scss";

const FilterYear = (props) => {
  const handlerFilterYear = (ev) => {
    const inputValue = ev.target.value;
    props.handlerFilter(inputValue);
  };

  const handlerPreventDefault = (ev) => {
    ev.preventDefault();
  };

  return (
    <form className="filter__name" onSubmit={handlerPreventDefault}>
      <label className="name">Año:</label>
      <input
        className="filter__name--input"
        type="text"
        placeholder="Ej: 1992"
        name="year"
        onChange={handlerFilterYear}
      />
    </form>
  );
};
export default FilterYear;
