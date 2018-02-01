import React from 'react';
import { Link, withRouter } from 'react-router-dom';


// const newUser = Boolean(this.props.formType === "signup");

class SessionForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: "",
      email: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    console.log(this.state);
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    const user = this.state;
    this.props.processForm({user});
    this.setState({username: "", email: "", password: ""});
  }

  demoLogin() {
    this.props.login({
      user: {
        username: 'demoLogin',
        email: 'demo@email.com',
        password: 'password'
      }
    });
  }

  navLink() {
    if (this.props.formType === 'login') {
      return <Link to="/signup">sign up instead</Link>;
    } else {
      return <Link to="/login">log in instead</Link>;
    }
  }

  emailField() {
    if (this.props.formType === 'signup') {
      return (
        <label>Email:
          <input
            type="text"
            value={this.state.email}
            onChange={this.update('email')}
            />
        </label>
      );
    }
  }

  render() {
    return (
    <section className="session">
      <h1 className="session-header">Log in</h1>
      <form className="session-form"onSubmit={this.handleSubmit}>
        <label>Username:
          <input
            type="text"
            value={this.state.username}
            onChange={this.update('username')}
            />
        </label>

        {this.emailField()}

        <label>Password:
          <input
            type="password"
            value={this.state.password}
            onChange={this.update('password')}
            />
        </label>

        <input type="submit" className="btn btn-submit" value="Submit" />
      </form>
      <button className="btn btn-demo" onClick={() => this.demoLogin()}>Demo Account Login</button>
    </section>
  );
  }
}

export default withRouter(SessionForm);
