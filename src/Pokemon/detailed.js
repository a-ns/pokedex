import React, { Component } from 'react';

class PokemonDetailed extends Component {

    render() {
        console.log(this.props)
        return (
            <div>
                {this.props.match.params.pokemon}
            </div>
        )
    }
}

export default PokemonDetailed