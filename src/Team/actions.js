import uuid from "uuid/v4";

export const addPokemonToTeam = pokemon => {
  return {
    type: "team/add",
    payload: {
      ...pokemon,
      uuid: uuid(),
      flavor_text_entries: pokemon.flavor_text_entries.filter(
        entry => entry.language.name === "en"
      )
    }
  };
};

export const removePokemonFromTeam = pokemon => {
  return {
    type: "team/remove",
    payload: pokemon
  };
};

export const updatePokemonOnTeam = pokemon => {
  return {
    type: "team/update",
    payload: pokemon
  };
};
