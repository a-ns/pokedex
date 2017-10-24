import HomePageReducer, { initialState } from "./reducer";

describe("#HomePage Reducer", () => {
  describe("initialState", () => {
    it("~should be {pokemon: [], baseURL: 'someURL', page: 0}", () => {
      const expectedRV = {
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
        let sut = HomePageReducer(undefined, mockAction);

        const expectedRV = {
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
        baseURL: "https://pokeapi.co/api/v2/pokemon/?offset="
      };
      let sut = HomePageReducer(undefined, mockAction);
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
      let sut = HomePageReducer(mockState, mockAction);
      expect(sut).toEqual(expectedRV);
    });
  });
});
