import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { Link } from "react-router-dom";
import { Input, Menu } from "semantic-ui-react";
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
    const searchValue = this.state.searchValue.toLowerCase();
    this.props.history.push(`/pokemon/${searchValue}`);
    this.setState({ searchValue: "" });
  }

  handleChange(e) {
    this.setState({ searchValue: e.target.value });
  }
  render() {
    return [
      <Menu key="1" borderless>
        <Menu.Item>
          <Link to="/">Home</Link>
        </Menu.Item>
        <div style={{ margin: "0 auto" }}>
          <Menu.Item>
            <form onSubmit={this.handleSubmit}>
              <Input
                placeholder="Something like Pikachu"
                type="text"
                value={this.state.searchValue}
                onChange={this.handleChange}
              />
            </form>
          </Menu.Item>
        </div>
      </Menu>,
      <main key="2">{this.props.children}</main>
    ];
  }
}

export default withRouter(App);
