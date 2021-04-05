import React from "react";
import "../stylesheets/Mundial.scss";
import { Link } from "react-router-dom";

const Mundial = (props) => {
  return (
    <div className="mundial">
      <div className="mundial__containerBack">
        <Link to="/MundialList">
          <button className="mundialList__backBtn">Volver</button>
        </Link>
      </div>
      <div className="mundial__container">
        <h1 className="mundial__title">{props.year.year}</h1>
        <h4 className="mundial__info">Camapeón: {props.year.champion}</h4>
        <h4 className="mundial__info">Subcampeón: {props.year.silverMedal}</h4>
        <h4 className="mundial__info">Mejor jugador: {props.year.bestPlayer}</h4>
        <h4 className="mundial__info">Pais donde se jugó: {props.year.country}</h4>
      </div>
    </div>
  );
};
export default Mundial;
