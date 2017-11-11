import React from "react";
import { connect } from "react-redux";
import withMargin from "../../common/withMargin";
import { removePokemonFromTeam, updatePokemonOnTeam } from "../actions";
import { Intro } from "../../pokemon/components/presentation";
import "./team.css";
class Team extends React.Component {
  isTeamEmpty(team) {
    if (!team) return true;
    if (team.length === 0) return true;
    return false;
  }
  render() {
    if (this.isTeamEmpty(this.props.team)) {
      return (
        <div>
          To add pokemon to your team, search for the pokemon you want to add
          then click the 'Team Up!' button [WIP]
        </div>
      );
    }
    return (
      <div className="team-container">
        {this.props.team.map(pokemon => {
          return (
            <div key={pokemon.uuid} className="pokemon-teammate fadeIn">
              <Intro {...pokemon} />
            </div>
          );
        })}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    team: state.team
  };
};
const mapDispatchToProps = dispatch => {
  return {
    removeFromTeam: pokemon => dispatch(removePokemonFromTeam(pokemon)),
    updatePokemonOnTeam: pokemon => dispatch(updatePokemonOnTeam(pokemon))
  };
};
export default withMargin(connect(mapStateToProps, mapDispatchToProps)(Team));
