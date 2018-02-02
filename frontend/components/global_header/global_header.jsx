import React from 'react';
import { Link } from 'react-router-dom';

export default ({ currentUser, logout }) => {
  const display = currentUser ? (
    <div className="current-user">
      <h2>Welcome, {currentUser.username}!</h2>
      <button className="header-btn" onClick={logout}>Logout</button>
    </div>
  ) : (
    <div>
      <Link className="header-btn" to="/login">Login</Link>
    </div>
  );

  return (

    <header className="global-nav">
      <section className="global-nav-left">
        <Link className="header-btn" to="/">Explore</Link>
        <Link className="header-btn" to="/">Start a project</Link>
      </section>

      <section className="global-nav-center">
        <Link to="/"><h1 className="header-logo">CATSTARTER</h1></Link>
      </section>

      <section className="global-nav-right">
        {display}
        <Link className="header-btn" to="/">Search <i className="fas fa-search"></i></Link>
      </section>
    </header>
  );
};
