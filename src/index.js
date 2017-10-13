import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";

import { Provider } from "react-redux";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import configureStore from "./redux/store";
import Pokemon from "./pokemon/components";
import { loadState, saveState } from "./redux/statePersist";

let store = configureStore(loadState());

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App>
        <Switch>
          <Route
            exact
            path="/"
            component={() => (
              <div>
                goto /:pokemon ie. <Link to="/charizard">/charizard</Link>
              </div>
            )}
          />
          <Route path="/:pokemon" component={Pokemon} />
        </Switch>
      </App>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
