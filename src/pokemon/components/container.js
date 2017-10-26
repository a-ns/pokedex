import React from "react";
import Presentation from "./presentation";
import { connect } from "react-redux";
import Loading from "../../common/Loading";
import { fetchPokemonByName } from "../actions";
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
      return <Loading />;
    }
    if (this.props.pokemon.isFetching) {
      return <Loading />;
    }
    if (!this.props.pokemon.data) {
      return <Loading />;
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
