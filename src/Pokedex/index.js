import React, {Component} from 'react'
import Pokemon from '../Pokemon/glance'
import { connect } from 'react-redux'

import Loading from '../components/Loading'

class Pokedex extends Component {

  renderPokemon(pokemon) {
    const urlSplit = pokemon.url.split('/')
    const dexnum = urlSplit[urlSplit.length - 2]
    return (
      <Pokemon key={dexnum} dexnum={dexnum} name={pokemon.name} url={pokemon.url} />
    )
  }

  render () {
    if(!this.props.pokemon){
      return <Loading />
    }
    return (
      <div style={{margin: '0 auto', width: '60%'}}>
        {this.props.pokemon.map(this.renderPokemon)}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    pokemon: state.glance.items
  }
}

export default connect(mapStateToProps, null)(Pokedex)