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
        <Link to="/">Explore</Link>
        <Link to="/">Start a project</Link>
      </section>

      <section className="global-nav-center">
        <h1><Link to="/">Kickstarter</Link></h1>
      </section>

      <section className="global-nav-right">
        <h3>search</h3>
        {display}
      </section>
    </header>
  );
};




// if logged in
// A welcome message including the user's username
// A button to logout
