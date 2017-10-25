import Container from "./container";
import React from "react";

class PokemonErrorBound extends React.Component {
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
    if (this.state.didError)
      return (
        <div className="fadeIn" style={{ margin: "0 auto", width: "60%" }}>
          An error occurred
        </div>
      );
    else {
      return (
        <div style={{ margin: "0 auto", width: "60%" }}>
          <Container {...this.props} />
        </div>
      );
    }
  }
}
export default PokemonErrorBound;
