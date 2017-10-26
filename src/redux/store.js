import { createStore, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import { createLogger } from "redux-logger";
import reducer from "./reducer";
import throttle from "lodash/throttle";
import { saveState } from "../util/serializeState";
let loggerMiddleware = createLogger();
export default function configureStore(persistedState) {
  const store = createStore(
    reducer,
    persistedState,
    applyMiddleware(thunkMiddleware, loggerMiddleware)
  );
  store.subscribe(
    throttle(() => {
      saveState({
        pokemon: store.getState().pokemon,
        homepage: store.getState().homepage
      });
    }),
    3000
  );
  return store;
}
