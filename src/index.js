import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";

import { Provider } from "react-redux";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import configureStore from "./redux/store";
import Pokemon from "./pokemon/components";
import "semantic-ui-css/semantic.min.css";
import HomePage from "./HomePage/components";
import { loadState } from "./util/serializeState";
let store = configureStore(loadState());

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/:pokemon" component={Pokemon} />
        </Switch>
      </App>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
