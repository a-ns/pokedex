import Container from "./container";
import React from "react";
import withMargin from "../../common/withMargin";

class PokemonErrorBound extends React.Component {
  constructor(props) {
    super(props);
    console.log(this.props);
    this.state = {
      didError: false
    };
  }
  componentDidCatch() {
    this.setState({ didError: true });
  }
  render() {
    if (this.state.didError)
      return <div className="fadeIn">An error occurred</div>;
    else {
      return <Container {...this.props} />;
    }
  }
}
export default withMargin(PokemonErrorBound);
