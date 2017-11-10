import React from "react";

import { Link } from "react-router-dom";

class Homepage extends React.Component {
  render() {
    return (
      <div style={{ margin: "0 auto", width: "60%" }}>
        <div>
          For building a team go to <Link to="/team">Team</Link>
        </div>
        <div>
          For a list of all pokemon go to <Link to="/pokemon">Pokemon</Link>
        </div>
      </div>
    );
  }
}

export default Homepage;
