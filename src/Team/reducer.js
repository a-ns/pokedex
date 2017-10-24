const initialState = [];
const reducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case "team/add": {
      return state.concat(payload);
    }
    case "team/remove": {
      return state.filter(poke => poke.uuid !== payload.uuid);
    }
    default:
      return state;
  }
};

export default reducer;
