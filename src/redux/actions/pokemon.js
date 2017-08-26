import Pokedex from 'pokedex-promise-v2'
const p = new Pokedex({
    protocol: 'https',
    cacheLimit: 10000 * 1000,
})

const BASE_URL = 'https://www.pokeapi.co/api/v2/'

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

export const fetchAllPokemon = (offset) => {
    return (dispatch) => {
        dispatch(allPokemonReq())
        if (/* is cached */false) {

        }
        else return fetch(`${BASE_URL}pokemon/?offset=${offset}`)
            .then(
                response => response.json(),
                error => console.log('Error, ', error),
            )
            .then(
                json => dispatch(allPokemonSuc(json)),
                error => console.log('Error, ', error),
            )
    }
}

export const ONE_POKEMON_REQ = 'ONE_POKEMON_REQ'
export const onePokemonReq = (name) => {
    return {
        type: ONE_POKEMON_REQ,
        payload: name
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


export const fetchOnePokemon = (pokemonName) => {
    return (dispatch, getState) => {
        dispatch(onePokemonReq(pokemonName))
        if (/* is cached */ !getState().detailed[pokemonName].isFetching) {

        }
        else return p.getPokemonByName(pokemonName)
            .then(response => {
                dispatch(onePokemonSuc(response))
            })
        // return fetch(`${url}`)
        //     .then(
        //         response => response.json(),
        //         error => console.log('Error, ', error),
        //     )
        //     .then(
        //         json => dispatch(onePokemonSuc(json))
        //     )
    }
}