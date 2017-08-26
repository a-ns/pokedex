import React from 'react';
import { connect } from 'react-redux'
import Loading from '../components/Loading'
import {
    fetchOnePokemon
} from '../redux/actions/pokemon'

import './detailed.css'

class PokemonDetailed extends React.Component { // props.match.params.pokemon String

    componentDidMount() {
        this.props.fetchOnePoke(this.props.match.params.pokemon)
    }
    render() {
        let pokemon = this.props.pokemon
        if( !pokemon || pokemon.isFetching )
            return <Loading />
        pokemon = this.props.pokemon.data
        const { stats, moves, types, weight, id } = pokemon
        return (
            <div className='detailed-container'>
                <div style={{padding: '15px'}}>{stats.map((stat, i) => <div key={i}>{stat.base_stat} {stat.stat.name}</div>)}</div>
                <div>
                    <img src={pokemon.sprites.front_default} alt={pokemon.name + '_front_default'} />
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        pokemon: state.detailed[ownProps.match.params.pokemon]
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        fetchOnePoke: (name) => dispatch(fetchOnePokemon(name))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PokemonDetailed)