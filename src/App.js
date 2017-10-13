import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { withRouter } from "react-router-dom";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchValue: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(e) {
    e.preventDefault();
    console.log("here", e.target);
    this.props.history.push(`/${this.state.searchValue}`);
    this.setState({ searchValue: "" });
  }

  handleChange(e) {
    this.setState({ searchValue: e.target.value });
  }
  render() {
    return [
      <nav key="1">
        <form onSubmit={this.handleSubmit}>
          <input
            placeholder="Enter pokemon"
            type="text"
            value={this.state.searchValue}
            onChange={this.handleChange}
          />
        </form>
      </nav>,
      <main key="2">{this.props.children}</main>
    ];
  }
}

export default withRouter(App);
