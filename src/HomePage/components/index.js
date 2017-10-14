import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { List } from "semantic-ui-react";
import { fetchNextPage } from "../actions";
import InfiniteScroll from "react-infinite-scroller";
class HomePage extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const pokemon = this.props.pokemon;
    return (
      <InfiniteScroll
        pageStart={0}
        loadMore={this.props.fetchNextPage}
        hasMore={this.props.page * 20 < 802}
        loader={<div className="loader">Loading ...</div>}
      >
        <List style={{ margin: "0 auto", width: "60%" }}>
          {pokemon.map(pokemon => (
            <List.Item key={pokemon.name}>
              <Link to={"/" + pokemon.name}>{pokemon.name}</Link>
            </List.Item>
          ))}
        </List>
      </InfiniteScroll>
    );
  }
}

const mapStateToProps = state => {
  return {
    pokemon: state.homepage.pokemon,
    page: state.homepage.page
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchNextPage: () => dispatch(fetchNextPage())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
