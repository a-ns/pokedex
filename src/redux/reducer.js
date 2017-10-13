import reducer from "../pokemon/reducer";
import { combineReducers } from "redux";
import Pokedex from "pokedex-promise-v2";
export default combineReducers({
  pokemon: reducer,
  api: () => new Pokedex({ protocol: "https" })
});
