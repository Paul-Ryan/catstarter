import React from 'react';
import { Link, withRouter } from 'react-router-dom';

import SignUp from './signup';

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
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    const user = this.state;
    console.log("process form ", this.props.processForm);
    this.props.processForm({user});
    this.setState({username: "", email: "", password: ""});
  }

  renderErrors() {
    return(
      <ul className="error-list">
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.loggedIn) {
      this.props.history.push('/');
    }
    console.log(this.props);
    if (nextProps.match.path !== this.props.match.path) {
      this.props.clear();
    }

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

  submitLink() {
    if (this.props.formType === 'login') {
      return <input type="submit" className="btn btn-submit" value="Log me in!" />;
    } else {
      return <input type="submit" className="btn btn-submit" value="Sign up!" />;
    }
  }

  emailField() {
    if (this.props.formType === 'signup') {
      return (
        <label>
          <input
            type="text"
            placeholder="Email"
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
      {this.renderErrors()}
      <form className="session-form"onSubmit={this.handleSubmit}>
        <label>
          <input
            type="text"
            placeholder="Username"
            value={this.state.username}
            onChange={this.update('username')}
            />
        </label>

        {this.emailField()}

        <label>
          <input
            type="password"
            placeholder="Password"
            value={this.state.password}
            onChange={this.update('password')}
            />
        </label>

        {this.submitLink()}
      </form>
      <button className="btn btn-demo" onClick={() => this.demoLogin()}>Demo Account Login</button>
      <SignUp formType={this.props.formType} />
    </section>
  );
  }
}

export default withRouter(SessionForm);
