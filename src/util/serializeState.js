export const saveState = state => {
  try {
    console.log("saving:", state);
    Object.keys(state.pokemon).forEach(key => {
      state.pokemon[key].isFetching = false;
    });
    const serializedState = JSON.stringify(state);
    localStorage.setItem("pokedex", serializedState);
  } catch (e) {}
};

export const loadState = () => {
  try {
    console.log("loading");
    const serializedState = localStorage.getItem("pokedex");
    if (serializedState === null) return undefined;
    let state = JSON.parse(serializedState);
    console.log("loadedState:", state);
    return state;
  } catch (e) {
    return undefined;
  }
};
