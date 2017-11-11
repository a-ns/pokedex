import {
  addPokemonToTeam,
  removePokemonFromTeam,
  updatePokemonOnTeam
} from "./actions";

describe("#Team Actions", () => {
  const mockPokemon = {
    name: "bulbasaur",
    stats: { defense: 1, hp: 1, specialAttack: 1 }
  };
  describe("team/add", () => {
    it("should create a team/add action", () => {
      const expectedRV = { payload: mockPokemon, type: "team/add" };
      const sut = addPokemonToTeam(mockPokemon);

      expect(sut).toMatchObject(expectedRV);
    });
  });
  describe("team/remove", () => {
    it("should create a team/remove action", () => {
      const expectedRV = { payload: mockPokemon, type: "team/remove" };
      const sut = removePokemonFromTeam(mockPokemon);
      expect(sut).toEqual(expectedRV);
    });
  });
  describe("team/update", () => {
    it("should create a team/update action", () => {
      const expectedRV = { payload: mockPokemon, type: "team/update" };
      const sut = updatePokemonOnTeam(mockPokemon);
      expect(sut).toEqual(expectedRV);
    });
  });
});
