import React from "react";
import "../stylesheets/Header.scss";

const FilterYear = (props) => {
  const handlerFilterYear = (ev) => {
    const inputValue = ev.target.value;
    const inputName = ev.target.name;
    props.handlerFilter({ value: inputValue, name: inputName });
  };

  const handlerPreventDefault = (ev) => {
    ev.preventDefault();
  };

  return (
    <form className="filter--name" onSubmit={handlerPreventDefault}>
      <label className="name">Año:</label>
      <input
        className="filter--name--input"
        type="number"
        placeholder="Ej: 1992"
        name="year"
        onChange={handlerFilterYear}
      />
    </form>
  );
};
export default FilterYear;
