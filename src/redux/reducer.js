import PokemonReducer from "../pokemon/reducer";
import PokemonsPageReducer from "../PokemonsPage/reducer";
import TeamReducer from "../Team/reducer";
import { combineReducers } from "redux";
import Pokedex from "pokedex-promise-v2";
export default combineReducers({
  pokemon: PokemonReducer,
  pokemonsPage: PokemonsPageReducer,
  team: TeamReducer,
  api: () => new Pokedex({ protocol: "https" })
});
