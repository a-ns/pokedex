import {combineReducers} from 'redux'
import {
    ALL_POKEMON_REQ,
    ALL_POKEMON_SUC,
    ALL_POKEMON_FAIL,
} from '../actions/pokemon'

const initialState = {
    isFetching: false,
    items: []
}

const rootReducer = (state = initialState, action) => {
    const { type, payload } = action;

    switch (type) {
        case ALL_POKEMON_REQ: {
            return {
                ...state,
                isFetching: true
            }
        }
        case ALL_POKEMON_SUC: {
            return {
                ...state,
                isFetching: false,
                items: payload,
            }
        }
        default: {
            return state;
        }
    }
};

const pokemonReducer = (state, action) => {
    const { type, payload } = action

    switch (type) {
        default: {
            return state;
        }
    }
}

export default rootReducer;