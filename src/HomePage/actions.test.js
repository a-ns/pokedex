import { requestNextPage, addNextPage, fetchNextPage } from "./actions";

describe("HomePage actions", () => {
  describe("requestNextPage", () => {
    it("should return object with type 'FETCH_NEXT_PAGE_START'", () => {
      let sut = requestNextPage();
      expect(sut).toEqual({ type: "FETCH_NEXT_PAGE_START" });
    });
  });
  describe("addNextPage", () => {
    it("should return object with type 'ADD_NEXT_PAGE', and a payload of objects in array", () => {
      let mockData = [{ name: "bulbasaur" }, { name: "charmander" }];
      let sut = addNextPage(mockData);
      expect(sut).toEqual({ type: "ADD_NEXT_PAGE", payload: mockData });
    });
  });
  describe("fetchNextPage", () => {
    it("should fetch data", () => {});
  });
});
