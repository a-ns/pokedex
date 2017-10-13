import React from "react";

const Presentation = ({ pokemon }) => {
  const { abilities, id, name, stats, sprites, types, moves } = pokemon.data;

  return (
    <div className="pokemon">
      <img src={sprites.front_default} alt={`${name}_front_default`} />

      <div className="pokemon-id">{id}</div>
      <div className="pokemon-name">{name}</div>
      <div className="pokemon-stats">
        {stats.map(stat => {
          return (
            <div key={stat.stat.name}>
              {stat.stat.name} | {stat.base_stat}
            </div>
          );
        })}
      </div>
      <div className="pokemon-moves">
        {moves.map(({ move }) => {
          return <div key={move.name}>{move.name}</div>;
        })}
      </div>
    </div>
  );
};

const Pokemon = Presentation;
export default Pokemon;
