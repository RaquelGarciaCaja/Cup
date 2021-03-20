import React from "react";
import "../stylesheets/Header.scss";

const FilterYear = () => {
  return (
    <form className="filterYear">
      <label htmlFor="">
        Año:
        <input type="radio" />
      </label>
    </form>
  );
};
export default FilterYear;
