export const addPokemon = pokemon => {
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

export const requestFailurePokemonByName = name => {
  return {
    type: "FETCH_POKEMON_FAIL",
    payload: name
  };
};

export const shouldFetchPokemonByName = (state, name) => {
  const pokemon = state.pokemon[name];
  if (!pokemon) return true;
  if (pokemon.isFetching) return false;
  if (pokemon.data) return false;
  return true;
};

export const fetchPokemonByName = name => {
  return (dispatch, getStore) => {
    if (shouldFetchPokemonByName(getStore(), name)) {
      dispatch(requestPokemonByName(name));
      return Promise.all([
        getStore().api.getPokemonByName(name),
        getStore().api.getPokemonSpeciesByName(name)
      ])
        .then(values => {
          const pokemon = {
            ...values[0],
            ...values[1]
          };
          dispatch(addPokemon(pokemon));
        })
        .catch(() => {
          console.error("fetch failure");
          dispatch(requestFailurePokemonByName(name));
          return Promise.reject();
        });
    } else {
      return Promise.resolve();
    }
  };
};
