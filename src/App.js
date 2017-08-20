import React, { Component } from 'react';
import { Link , Switch, Route} from 'react-router-dom'
import logo from './logo.svg';
import './App.css';
import Pokedex from './Pokedex/presenter'
import Home from './components/Home'
import Nav from './components/Nav'
import PokemonDetailed from './Pokemon/detailed'
const BASE_URL = 'http://www.pokeapi.co/api/v2/'




class App extends Component {
  constructor () {
    super()
    this.state = {
      data: undefined
    }
  }

  fetchAllPokemon() {
    return fetch(`${BASE_URL}pokemon/`).then(res => res.json())
  }
  
  componentDidMount() {
    this.fetchAllPokemon().then(data => this.setState({data}))
  }



  render() {
    return(
      <div>
        <Nav />
        <main>
          <Switch>
            <Route exact path='/' component={() => {
              if(!this.state.data) {
                return <div>Loading...</div>
              }
              return <Pokedex pokemon={this.state.data.results} />
            }} />
            <Route exact path='/:pokemon' component={PokemonDetailed} />
          </Switch>
        </main>
      </div>
    )
  }
}

export default App;
