import React from "react";

import PokemonsPage from "./PokemonsPage";
import withMargin from "../../common/withMargin";
class PokemonsPageErrorBound extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      didError: false
    };
  }

  componentDidCatch() {
    this.setState({ didError: true });
  }

  render() {
    if (this.state.didError) {
      return <div>An error occurred</div>;
    } else {
      return <PokemonsPage {...this.props} />;
    }
  }
}

export default withMargin(PokemonsPageErrorBound);
