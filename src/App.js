import React, { Component } from 'react';
import { Link , Switch, Route} from 'react-router-dom'
import { connect } from 'react-redux'
import Pokedex from './Pokedex/'
import Home from './components/Home'
import Nav from './components/Nav'
import PokemonDetailed from './Pokemon/detailed'



class App extends Component {

  render() {
    return(
      <div>
        <Nav />
        <main>
          <Switch>
            <Route exact path='/' component={Pokedex} />
            <Route exact path='/:pokemon' component={PokemonDetailed} />
          </Switch>
        </main>
      </div>
    )
  }
}





export default App
