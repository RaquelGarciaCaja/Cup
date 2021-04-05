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
        <div className="euro__containerInfo">
          <h4 className="euro__info">Camapeón:</h4>{" "}
          <p className="euro__infoP euro__info">{props.year.champion}</p>
        </div>
        <div className="euro__containerInfo">
          <h4 className="euro__info">Subcampeón:</h4>
          <p className="euro__infoP euro__info"> {props.year.silverMedal}</p>
        </div>
        <div className="euro__containerInfo">
          <h4 className="euro__info">Mejor jugador:</h4>{" "}
          <p className="euro__infoP euro__info">{props.year.bestPlayer}</p>
        </div>
        <div className="euro__containerInfo">
          <h4 className="euro__info">Pais donde se jugó: </h4>{" "}
          <p className="euro__infoP euro__info"> {props.year.country}</p>
        </div>
      </div>
    </section>
  );
};
export default Euro;
