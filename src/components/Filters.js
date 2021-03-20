import React from "react";
import "../stylesheets/Header.scss";
import { Link } from "react-router-dom";
import { Route, Switch } from "react-router-dom";
import euroYears from "../data/euroYears";
import Euro from "./Euro";

const Filter = () => {
  return (
    <section className="filter">
      <h1>EuroCopa</h1>
      <div>{euroYear}</div>
    </section>
  );
};
export default Filter;
