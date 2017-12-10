import _ from "lodash";
const initialState = [];
const reducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case "team/add": {
      if (state.length > 5) return state;
      let pokemon = payload;
      pokemon.stats = pokemon.stats.map(stat => {
        return {
          ...stat,
          base_stat: String(stat.base_stat),
          current_stat: stat.base_stat
        };
      });
      return state.concat(pokemon);
    }
    case "team/remove": {
      return state.filter(poke => poke.uuid !== payload.uuid);
    }
    case "team/update": {
      return (state = state.map(pokemon => {
        if (pokemon.uuid === payload.uuid)
          return _.merge(pokemon, payload.data);
        else return pokemon;
      }));
    }
    default:
      return state;
  }
};

export default reducer;
