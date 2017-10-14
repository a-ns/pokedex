import {
  addPokemon,
  requestPokemonByName,
  requestFailurePokemonByName,
  shouldFetchPokemonByName
} from "./actions";

describe("Pokemon Actions", () => {
  describe("addPokemon", () => {
    it("should return an object with type: 'ADD_POKEMON' and payload of a pokemon", () => {
      const mockData_Pokemon = {
        name: "bulbasaur",
        otherData: {}
      };

      const sut = addPokemon(mockData_Pokemon);

      const expectedRV = {
        type: "ADD_POKEMON",
        payload: {
          name: "bulbasaur",
          data: {
            name: "bulbasaur",
            otherData: {}
          }
        }
      };
      expect(sut).toEqual(expectedRV);
    });
  });
});
