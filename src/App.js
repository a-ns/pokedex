import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { connect } from "react-redux";
import { Route, Switch } from "react-router-dom";
import Pokemon from "./pokemon/components/";

class App extends Component {
  render() {
    return (
      <main>
        <Switch>
          <Route
            exact
            path="/"
            component={() => <div>goto /:pokemon ie. /charizard</div>}
          />
          <Route exact path="/:pokemon" component={Pokemon} />
        </Switch>
      </main>
    );
  }
}

const mapStateToProps = state => {
  return {
    pokemon: state.pokemon
  };
};
export default connect(mapStateToProps)(App);
