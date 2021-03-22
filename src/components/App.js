import React from "react";
import { Route, Switch } from "react-router-dom";
import "../stylesheets/App.scss";
import Header from "./Header";
import Main from "./Main";
import EuroList from "./EuroList";
import Euro from "./Euro";
import MundialList from "./MundialList";
import Mundial from "./Mundial";
import euroYears from "../data/euroYears";
import mundialYears from "../data/mundialYears";

function App() {
  const renderEuroDetails = (props) => {
    const yearId = parseInt(props.match.params.id);
    const foundYearEuro = euroYears.find((year) => {
      return year.id === yearId;
    });

    if (foundYearEuro !== undefined) {
      return <Euro year={foundYearEuro} />;
    }
  };

  const renderMundialDetails = (props) => {
    console.log(props);
    const yearId = parseInt(props.match.params.id);
    const foundYearMundial = mundialYears.find((year) => {
      return year.id === yearId;
    });

    if (foundYearMundial !== undefined) {
      return <Mundial year={foundYearMundial} />;
    }
  };

  return (
    <div className="App">
      <Header />
      <Switch>
        {/* main */}
        <Route exact path="/" component={Main} />
        {/* euro */}
        <Route path="/EuroList">
          <EuroList />
        </Route>
        <Route path="/Euro/:id" render={renderEuroDetails} />
        {/* mundial */}
        <Route path="/MundialList">
          <MundialList />
        </Route>
        <Route path="/Mundial/:id" render={renderMundialDetails} />
      </Switch>
    </div>
  );
}

export default App;
