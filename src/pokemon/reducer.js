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
          data: {
            ...payload.data,
            flavor_text_entries: payload.data.flavor_text_entries.filter(
              entry => entry.language.name === "en"
            )
          }
        }
      };
    }
    default:
      return state;
  }
};

export default reducer;
