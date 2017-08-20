import React, {Component} from 'react'
import Pokemon from '../Pokemon/presenter'

const BASE_URL = 'http://www.pokeapi.co/api/v2/'


class Pokedex extends Component {
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

export default Pokedex