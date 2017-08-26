import { 
    ONE_POKEMON_REQ,
    ONE_POKEMON_FAIL,
    ONE_POKEMON_SUC,
} from '../actions/pokemon'

export const detailedReducer = (pokemon = {}, action) => {
    const { type, payload } = action
    switch (type) {
        case ONE_POKEMON_REQ: {
            return {
                ...pokemon,
                [payload]: {
                    isFetching: true,
                    data: undefined
                }
            }

        }
        case ONE_POKEMON_FAIL: {
            return {
                ...pokemon,
                isFetching: false,
                hasErrored: true,
            }
        }
        case ONE_POKEMON_SUC: {
            return {
                ...pokemon,
                [payload.species.name]: {
                    isFetching: false,
                    data: action.payload
                },
            }
        }
        default: {
            return pokemon
        }
    }
}