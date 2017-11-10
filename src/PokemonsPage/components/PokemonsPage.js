import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { List } from "semantic-ui-react";
import { fetchNextPage } from "../actions";
import Loading from "../../common/Loading";
import InfiniteScroll from "react-infinite-scroller";
class PokemonsPage extends React.Component {
  render() {
    if (this.props.error) {
      return (
        <div
          className="fadeIn"
          style={{ width: "60%", margin: "0 auto", textAlign: "center" }}
        >
          An error occurred. (How's your internet?)
        </div>
      );
    }
    const pokemon = this.props.pokemon;
    return (
      <InfiniteScroll
        pageStart={0}
        loadMore={this.props.fetchNextPage}
        hasMore={this.props.page * 20 < 802}
        loader={<Loading />}
      >
        <List>
          {pokemon.map(pokemon => (
            <List.Item key={pokemon.name}>
              <Link to={"/pokemon/" + pokemon.name}>{pokemon.name}</Link>
            </List.Item>
          ))}
        </List>
      </InfiniteScroll>
    );
  }
}

const mapStateToProps = state => {
  return {
    pokemon: state.pokemonsPage.pokemon,
    page: state.pokemonsPage.page,
    error: state.pokemonsPage.error
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchNextPage: () => dispatch(fetchNextPage())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PokemonsPage);
