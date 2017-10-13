import React from "react";
import Presentation from "./presentation";
import { connect } from "react-redux";
import { fetchPokemonByName } from "../actions";
import { Link } from "react-router-dom";
class Container extends React.Component {
  componentDidMount() {
    this.props
      .fetchPokemonByName(this.props.match.params.pokemon)
      .catch(() => this.props.history.replace("/"));
  }

  componentWillReceiveProps(props) {
    if (props.match.params.pokemon !== this.props.match.params.pokemon)
      this.props
        .fetchPokemonByName(props.match.params.pokemon)
        .catch(() => this.props.history.replace("/"));
  }

  render() {
    if (!this.props.pokemon) {
      return <div>Loading</div>;
    }
    if (this.props.pokemon.isFetching) {
      return <div>Loading</div>;
    }
    return [
      <Link key="1" to="/">
        Home
      </Link>,
      <Presentation key="2" pokemon={this.props.pokemon} />
    ];
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
