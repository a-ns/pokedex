export const requestNextPage = () => {
  return {
    type: "FETCH_NEXT_PAGE_START"
  };
};

export const addNextPage = pokemon => {
  return {
    type: "ADD_NEXT_PAGE",
    payload: pokemon
  };
};

export const fetchNextPage = () => {
  return (dispatch, getStore) => {
    dispatch(requestNextPage());
    return fetch(
      `${getStore().homepage.baseURL}${getStore().homepage.page * 20}`
    )
      .then(res => res.json())
      .then(json => json.results)
      .then(pokemon => dispatch(addNextPage(pokemon)))
      .catch(err => dispatch({ type: "FETCH_ERROR", payload: { error: err } }));
  };
};
