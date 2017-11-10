import PokemonsPageReducer, { initialState } from "./reducer";

describe("#PokemonsPage Reducer", () => {
  describe("initialState", () => {
    it("~should be {pokemon: [], baseURL: 'someURL', page: 0}", () => {
      const expectedRV = {
        error: null,
        pokemon: [],
        baseURL: "https://pokeapi.co/api/v2/pokemon/?offset=",
        page: 0
      };
      expect(initialState).toEqual(expectedRV);
    });
  });
  describe("reducer", () => {
    describe("ADD_NEXT_PAGE", () => {
      it("~should add a new page", () => {
        let mockAction = {
          type: "ADD_NEXT_PAGE",
          payload: [{ name: "bulbasaur" }, { name: "charmander" }]
        };
        let sut = PokemonsPageReducer(undefined, mockAction);

        const expectedRV = {
          error: null,
          page: 1,
          pokemon: [{ name: "bulbasaur" }, { name: "charmander" }],
          baseURL: "https://pokeapi.co/api/v2/pokemon/?offset="
        };
        expect(sut).toEqual(expectedRV);
      });
    });
    describe("FETCH_NEXT_PAGE_START", () => {});
    it("~should not modify state on unexpected action type", () => {
      let mockAction = {
        type: "UNKNOWN_ACTION"
      };
      const expectedRV = {
        page: 0,
        pokemon: [],
        baseURL: "https://pokeapi.co/api/v2/pokemon/?offset=",
        error: null
      };
      let sut = PokemonsPageReducer(undefined, mockAction);
      expect(sut).toEqual(expectedRV);
    });
    it("~should not modify state with falsey action", () => {
      let mockAction = undefined;
      const mockState = {
        page: 0,
        pokemon: [],
        baseURL: "https://pokeapi.co/api/v2/pokemon/?offset="
      };
      const expectedRV = mockState;
      let sut = PokemonsPageReducer(mockState, mockAction);
      expect(sut).toEqual(expectedRV);
    });
  });
});
