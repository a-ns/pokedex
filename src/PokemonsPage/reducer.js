export const initialState = {
  pokemon: [],
  baseURL: "https://pokeapi.co/api/v2/pokemon/?offset=",
  page: 0,
  error: null
};

const reducer = (state = initialState, action) => {
  if (!action) return state;
  const { type, payload } = action;
  switch (type) {
    case "ADD_NEXT_PAGE": {
      state = { ...state };
      state.pokemon = [...state.pokemon, ...payload];
      state.page += 1;
      return state;
    }
    case "FETCH_NEXT_PAGE_START": {
      // don't know if i need this right now
      return state;
    }
    case "FETCH_ERROR": {
      return { ...state, error: payload.error };
    }
    default: {
      return state;
    }
  }
};

export default reducer;
