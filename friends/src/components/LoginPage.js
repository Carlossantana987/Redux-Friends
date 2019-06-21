import React from "react";
import { connect } from "react-redux";
import { loginStart } from "../actions";

class LoginPage extends React.Component {
  state = {
    credentials: { username: "", password: "" }
  };

  handleLogin = e => {
    e.preventDefault();
    this.props.loginStart(this.state.credentials);
  };

  handleChange = e => {
    this.setState({
      credentials: {
        ...this.state.credentials,
        [e.target.name]: e.target.value
      }
    });
  };

  render() {
    return (
      <form onSubmit={this.handleLogin}>
        <input
          placeholder="UserName"
          name="username"
          value={this.state.credentials.usermage}
          onChange={this.handleChange}
        />
        <input
          placeholder="Password"
          name="password"
          value={this.state.credentials.password}
          onChange={this.handleChange}
        />
        <button onSubmit={this.handleLogin}>Submit</button>
      </form>
    );
  }
}

export default connect(
  null,
  { loginStart }
)(LoginPage);
