import teamReducer from "./reducer";

describe("#Team Reducer", () => {
  it("Should add a new pokemon to the team", () => {
    let action = {
      type: "team/add",
      payload: {
        name: "squirtle",
        uuid: "1234",
        stats: {
          attack: 1,
          specialAttack: 1,
          defense: 1,
          specialDefense: 1,
          speed: 1,
          hp: 1
        },
        types: ["water"],
        moves: []
      }
    };
    let sut = teamReducer(undefined, action);
    let expectedRV = [
      {
        name: "squirtle",
        uuid: "1234",
        stats: {
          attack: 1,
          specialAttack: 1,
          defense: 1,
          specialDefense: 1,
          speed: 1,
          hp: 1
        },
        types: ["water"],
        moves: []
      }
    ];
    expect(sut).toEqual(expectedRV);
  });
  it("should remove a pokemon from the team", () => {
    let mockAction = {
      type: "team/remove",
      payload: {
        uuid: "1234"
      }
    };
    let sut = teamReducer([{ name: "squirtle", uuid: "1234" }], mockAction);
    let expectedRV = [];
    expect(sut).toEqual(expectedRV);
  });
  it("should update a pokemon currently on the team", () => {
    let mockAction = {
      type: "team/update",
      payload: {
        uuid: "1234",
        data: {
          stats: {
            defense: 2
          }
        }
      }
    };

    let sut = teamReducer(
      [
        {
          name: "squirtle",
          uuid: "1234",
          stats: { defense: 1, hp: 1, specialAttack: 1 }
        },
        {
          name: "blastoise",
          uuid: "1111",
          stats: { defense: 55, hp: 222, specialAttack: 44 }
        }
      ],
      mockAction
    );

    let expectedRV = [
      {
        name: "squirtle",
        uuid: "1234",
        stats: { defense: 2, hp: 1, specialAttack: 1 }
      },
      {
        name: "blastoise",
        uuid: "1111",
        stats: { defense: 55, hp: 222, specialAttack: 44 }
      }
    ];

    expect(sut).toEqual(expectedRV);
  });
});
