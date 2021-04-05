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
        <div className="mundial__containerInfo">
          <h4 className="mundial__info">Camapeón:</h4>{" "}
          <p className="mundial__infoP mundial__info">{props.year.champion}</p>
        </div>
        <div className="mundial__containerInfo">
          <h4 className="mundial__info">Subcampeón:</h4>
          <p className="mundial__infoP mundial__info"> {props.year.silverMedal}</p>
        </div>
        <div className="mundial__containerInfo">
          <h4 className="mundial__info">Mejor jugador:</h4>{" "}
          <p className="mundial__infoP mundial__info">{props.year.bestPlayer}</p>
        </div>
        <div className="mundial__containerInfo">
          <h4 className="mundial__info">Pais donde se jugó: </h4>{" "}
          <p className="mundial__infoP mundial__info"> {props.year.country}</p>
        </div>
      </div>
    </div>
  );
};
export default Mundial;
