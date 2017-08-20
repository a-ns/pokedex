import React, {Component} from 'react'
import Pokemon from '../Pokemon/'
import { connect } from 'react-redux'

import {
  fetchAllPokemon,
} from '../redux/actions/pokemon'
const BASE_URL = 'http://www.pokeapi.co/api/v2/'


class Pokedex extends Component {

  componentDidMount() {
    this.props.fetchAll()
  }
  renderPokemon(pokemon, i) {
    return (
      <Pokemon key={i} name={pokemon.name} url={pokemon.url} />
    )
  }

  render () {
    return (
      <div style={{margin: '0 auto', width: '60%'}}>
        {this.props.pokemon.map(this.renderPokemon)}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    pokemon: state.items
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchAll: () => {
      dispatch(fetchAllPokemon())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Pokedex)