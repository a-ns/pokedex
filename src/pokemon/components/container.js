import React from "react";
import Presentation from "./presentation";
import { connect } from "react-redux";
import { fetchPokemonByName } from "../actions";
class Container extends React.Component {
  componentDidMount() {
    this.props
      .fetchPokemonByName(this.props.match.params.pokemon)
      .catch(() => this.props.history.replace("/"));
  }

  render() {
    if (!this.props.pokemon) {
      return <div>Loading</div>;
    }
    if (this.props.pokemon.isFetching) {
      return <div>Loading</div>;
    }
    return <Presentation pokemon={this.props.pokemon} />;
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    pokemon: state.pokemon[ownProps.match.params.pokemon]
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchPokemonByName: name => dispatch(fetchPokemonByName(name))
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Container);
