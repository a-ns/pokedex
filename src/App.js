import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
class App extends Component {
  render() {
    return <main>{this.props.children}</main>;
  }
}

export default App;
