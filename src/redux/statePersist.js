export const loadState = () => {
  try {
    let serializedState = localStorage.getItem("pokedex");
    return undefined;
  } catch (e) {
    console.log(e);
    return undefined;
  }
};
