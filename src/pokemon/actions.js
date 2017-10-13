/*
    {
        [pokemon]: {},
        api
    }
*/

const addPokemon = pokemon => {
  return {
    type: "ADD_POKEMON",
    payload: {
      name: pokemon.name,
      data: pokemon
    }
  };
};

export const requestPokemonByName = name => {
  return {
    type: "FETCH_POKEMON_START",
    payload: name
  };
};

const requestFailurePokemonByName = name => {
  return {
    type: "FETCH_POKEMON_FAIL",
    payload: name
  };
};

const shouldFetchPokemonByName = (state, name) => {
  const pokemon = state.pokemon[name];
  if (!pokemon) return true;
  if (pokemon.isFetching) return false;
  return true;
};

export const fetchPokemonByName = name => {
  return (dispatch, getStore) => {
    if (shouldFetchPokemonByName(getStore(), name)) {
      dispatch(requestPokemonByName(name));
      return getStore()
        .api.getPokemonByName(name)
        .then(pokemon => {
          dispatch(addPokemon(pokemon));
        })
        .catch(() => {
          dispatch(requestFailurePokemonByName(name));
          return Promise.reject();
        });
    } else {
      return Promise.resolve();
    }
  };
};
