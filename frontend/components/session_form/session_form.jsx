import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: "",
      email: ""
    };
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    const user = this.state;
    this.props.processForm({user});
  }

  renderErrors() {
    return(
      <ul>
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  render() {
    return (
    <form onSubmit={(e) => this.handleSubmit(e)}>

      {this.renderErrors()}

      <label>Username:
        <input
          type="text"
          value={this.state.username}
          onChange={this.update('username')}
          />
      </label>

      <label>Email:
        <input
          type="text"
          value={this.state.email}
          onChange={this.update('email')}
          />
      </label>

      <label>Password:
        <input
          type="text"
          value={this.state.password}
          onChange={this.update('password')}
          />
      </label>

      <button>Create Account</button>
    </form>
  );
  }
}

export default SessionForm;
