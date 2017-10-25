import _ from "lodash";
const initialState = [];
const reducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case "team/add": {
      return state.concat(payload);
    }
    case "team/remove": {
      return state.filter(poke => poke.uuid !== payload.uuid);
    }
    case "team/update": {
      state = state.map(pokemon => {
        if (pokemon.uuid === payload.uuid)
          return _.merge(pokemon, payload.data);
        else return pokemon;
      });
    }
    default:
      return state;
  }
};

export default reducer;
