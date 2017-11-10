import React from "react";

class SearchNotFound extends React.Component {
  render() {
    return (
      <div style={{ margin: "0 auto", width: "60%" }}>
        Search query , {this.props.query} not found
      </div>
    );
  }
}

export default SearchNotFound;
