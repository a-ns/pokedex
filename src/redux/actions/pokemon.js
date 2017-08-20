






const BASE_URL = 'http://www.pokeapi.co/api/v2/'

export const ALL_POKEMON_REQ = 'ALL_POKEMON_REQ'
export const allPokemonReq = () => {
    return {
        type: ALL_POKEMON_REQ,
    }
}

export const ALL_POKEMON_SUC = 'ALL_POKEMON_SUC'
export const allPokemonSuc = (json) => {
    return {
        type: ALL_POKEMON_SUC,
        payload: json.results
    }
}

export const ALL_POKEMON_FAIL = 'ALL_POKEMON_FAIL'
export const allPokemonFail = (err) => {
    return {
        type: ALL_POKEMON_FAIL,
        err
    }
}

export const fetchAllPokemon = () => {
    return (dispatch) => {
        dispatch(allPokemonReq())
        return fetch(`${BASE_URL}pokemon/`)
            .then(
                response => response.json(),
                error => console.log('Error, ', error),
            )
            .then(
                json => dispatch(allPokemonSuc(json))
            )
    }
}

export const ONE_POKEMON_REQ = 'ONE_POKEMON_REQ'
export const onePokemonReq = () => {
    return {
        type: ONE_POKEMON_REQ,
    }
}

export const ONE_POKEMON_FAIL = 'ONE_POKEMON_FAIL'
export const onePokemonFail = (err) => {
    return {
        type: ONE_POKEMON_FAIL,
        err,
    }
}

export const ONE_POKEMON_SUC = 'ONE_POKEMON_SUC'
export const onePokemonSuc = (pokemon) => {
    return {
        type: ONE_POKEMON_SUC,
        payload: pokemon,
    }
}


export const fetchOnePokemon = (url) => {
    return (dispatch) => {
        dispatch(onePokemonReq())
        return fetch(`${url}`)
            .then(
                response => response.json(),
                error => console.log('Error, ', error),
            )
            .then(
                json => dispatch(onePokemonSuc(json))
            )
    }
}