import React from "react";
import Presentation from "./presentation";
import { connect } from "react-redux";
import Loading from "../../common/Loading";
import { fetchPokemonByName } from "../actions";
import { addPokemonToTeam } from "../../Team/actions";
class Container extends React.Component {
  componentDidMount() {
    this.props
      .fetchPokemonByName(this.props.match.params.pokemon)
      .catch(() => this.props.history.replace("/search-not-found"));
  }

  componentWillReceiveProps(props) {
    if (props.match.params.pokemon !== this.props.match.params.pokemon)
      this.props
        .fetchPokemonByName(props.match.params.pokemon)
        .catch(() => this.props.history.replace("/search-not-found"));
  }

  render() {
    if (!this.props.pokemon) {
      return <Loading />;
    }
    if (this.props.pokemon.isFetching) {
      return <Loading />;
    }
    if (!this.props.pokemon.data) {
      return <Loading />;
    }
    return (
      <Presentation
        pokemon={this.props.pokemon}
        addPokemonToTeam={() =>
          this.props.addPokemonToTeam(this.props.pokemon.data)}
      />
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    pokemon: state.pokemon[ownProps.match.params.pokemon]
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchPokemonByName: name => dispatch(fetchPokemonByName(name)),
    addPokemonToTeam: pokemon => dispatch(addPokemonToTeam(pokemon))
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Container);
