const reducer = (state = {}, action) => {
  const { type, payload } = action;

  switch (type) {
    case "FETCH_POKEMON_START": {
      return {
        ...state,
        [payload]: {
          isFetching: true,
          didInvalidate: false,
          lastUpdated: Date.now(),
          data: undefined
        }
      };
    }
    case "FETCH_POKEMON_FAIL": {
      state = { ...state };
      delete state[payload];
      return state;
    }
    case "ADD_POKEMON": {
      return {
        ...state,
        [payload.name]: {
          isFetching: false,
          didInvalidate: false,
          lastUpdated: Date.now(),
          data: payload.data
        }
      };
    }
    default:
      return state;
  }
};

const PokemonReducer = reducer;
export default PokemonReducer;
