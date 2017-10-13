import PokemonReducer from "../pokemon/reducer";
import HomePageReducer from "../HomePage/reducer";
import { combineReducers } from "redux";
import Pokedex from "pokedex-promise-v2";
export default combineReducers({
  pokemon: PokemonReducer,
  homepage: HomePageReducer,
  api: () => new Pokedex({ protocol: "https" })
});
