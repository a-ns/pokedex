import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";

import { Provider } from "react-redux";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import configureStore from "./redux/store";
import Pokemon from "./pokemon/components";
import Team from "./Team/components/";
import Error500 from "./common/ErrorPages/500";
import PokemonsPage from "./PokemonsPage/components";
import SearchNotFound from "./common/ErrorPages/SearchNotFound";
import Homepage from "./Homepage/components/";
import "semantic-ui-css/semantic.min.css";
import { loadState } from "./util/serializeState";

let store = configureStore(loadState());

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App>
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route path="/pokemon/:pokemon" component={Pokemon} />
          <Route exact path="/pokemon" component={PokemonsPage} />
          <Route exact path="/team" component={Team} />
          <Route exact path="/500" component={Error500} />
          <Route exact path="/search-not-found" component={SearchNotFound} />
        </Switch>
      </App>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
