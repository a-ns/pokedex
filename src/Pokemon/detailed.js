import React from 'react';

const PokemonDetailed = (props) => {
    return (
        <div>
            {props.match.params.pokemon}
        </div>
    )
}

export default PokemonDetailed