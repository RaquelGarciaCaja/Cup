import React from "react";
import "../stylesheets/Header.scss";
import FilterYear from "./FilterYear";

const Filter = (props) => {
  return (
    <section className="filter">
      <FilterYear handlerFilter={props.handlerFilter} />
    </section>
  );
};
export default Filter;
