import React from "react";

export default WrappedComponent => {
  return class extends React.Component {
    render() {
      return (
        <div style={{ width: "60%", margin: "0 auto" }}>
          <WrappedComponent {...this.props} />
        </div>
      );
    }
  };
};
