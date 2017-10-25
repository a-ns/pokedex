import { createStore, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import { createLogger } from "redux-logger";
import reducer from "./reducer";
let loggerMiddleware = createLogger();
export default function configureStore() {
  const store = createStore(
    reducer,
    undefined,
    applyMiddleware(thunkMiddleware, loggerMiddleware)
  );
  return store;
}
