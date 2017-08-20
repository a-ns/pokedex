export const ALL_POKEMON_REQ = 'ALL_POKEMON_REQ'
export const ALL_POKEMON_SUC = 'ALL_POKEMON_SUC'
export const ALL_POKEMON_FAIL = 'ALL_POKEMON_FAIL'

const BASE_URL = 'http://www.pokeapi.co/api/v2/'

export const allPokemonReq = () => {
    return {
        type: ALL_POKEMON_REQ,
    }
}

export const allPokemonSuc = (json) => {
    return {
        type: ALL_POKEMON_SUC,
        payload: json.results
    }
}

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