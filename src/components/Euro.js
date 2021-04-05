import React from "react";
import "../stylesheets/Euro.scss";
import { Link } from "react-router-dom";

const Euro = (props) => {
  console.log(props);
  return (
    <section className="euro">
      <div className="euro__containerBack">
        <Link to="/euroList">
          <button className="euroList__backBtn">Volver</button>
        </Link>
      </div>
      <div className="euro__container">
        <h1 className="euro__title">{props.year.year}</h1>
        <h4 className="euro__info">Camapeón: {props.year.champion}</h4>
        <h4 className="euro__info">Subcampeón: {props.year.silverMedal}</h4>
        <h4 className="euro__info">Mejor jugador: {props.year.bestPlayer}</h4>
        <h4 className="euro__info">Pais donde se jugó: {props.year.country}</h4>
      </div>
    </section>
  );
};
export default Euro;
