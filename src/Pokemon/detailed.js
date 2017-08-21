import React from 'react';
import { connect } from 'react-redux'
import Loading from '../components/Loading'
import {
    fetchOnePokemon
} from '../redux/actions/pokemon'

const mapStateToProps = (state, ownProps) => {
    return {
        pokemon: state[ownProps.match.params.pokemon]
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        fetchOnePoke: (name) => dispatch(fetchOnePokemon(name))
    }
}

class PokemonDetailed extends React.Component { // props.match.params.pokemon String

    componentDidMount() {
        this.props.fetchOnePoke(this.props.match.params.pokemon)
    }
    render() {
        const pokemon = this.props.pokemon
        if(!pokemon) {
            return (
                <div>
                    <Loading />
                </div>
            )
        }
        return (
            <div>
                {console.log(pokemon)}
                <img src={pokemon.sprites.front_default} alt={pokemon.name + '_front_default'} />
            </div>
        )
    }
}



export default connect(mapStateToProps, mapDispatchToProps)(PokemonDetailed)