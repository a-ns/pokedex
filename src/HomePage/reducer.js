const initialState = {
  pokemon: [],
  baseURL: "https://pokeapi.co/api/v2/pokemon/?offset=",
  page: 0
};

const reducer = (state = initialState, action) => {
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
    default: {
      return state;
    }
  }
};

const HomePageReducer = reducer;
export default HomePageReducer;
