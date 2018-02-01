import React from 'react';
import { Link } from 'react-router-dom';

export default ({ currentUser, logout }) => {
  const display = currentUser ? (
    <div>
      <h3>Welcome {currentUser.username}</h3>
      <button onClick={logout}>Logout</button>
    </div>
  ) : (
    <div>
      <Link className="btn" to="/signup">Sign Up</Link>
      <Link className="btn" to="/login">Login</Link>
    </div>
  );

  return (

    <header className="global-nav">
      <section className="global-nav-left">
        <Link className="btn" to="/">Explore</Link>
        <Link className="btn" to="/">Start a project</Link>
      </section>

      <section className="global-nav-center">
        <h1><Link to="/">CATSTARTER</Link></h1>
      </section>

      <section className="global-nav-right">
        <Link className="btn" to="/">Search</Link>
        {display}
      </section>
    </header>
  );
};
