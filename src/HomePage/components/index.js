import React from "react";

import Homepage from "./Homepage";

class HomepageErrorBound extends React.Component {
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
      return (
        <div style={{ margin: "0 auto", width: "60%" }}>An error occurred</div>
      );
    } else {
      return <Homepage {...this.props} />;
    }
  }
}

export default HomepageErrorBound;
