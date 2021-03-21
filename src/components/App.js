import React from "react";
import { Route, Switch } from "react-router-dom";
import Header from "./Header";
import Main from "./Main";
import EuroList from "./EuroList";
import Euro from "./Euro";
import MundialList from "./MundialList";
import "../stylesheets/App.scss";
import euroYears from "../data/euroYears";

function App() {
  const renderUserDetails = (props) => {
    const yearId = parseInt(props.match.params.id);
    const foundYearEuro = euroYears.find((year) => {
      return year.id === yearId;
    });

    if (foundYearEuro !== undefined) {
      return <Euro year={foundYearEuro} />;
    }
  };

  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={Main} />

        <Route path="/EuroList">
          <EuroList />
        </Route>

        <Route path="/Euro/:id" render={renderUserDetails} />
        <Route path="/Mundial" component={MundialList} />
      </Switch>
    </div>
  );
}

export default App;
