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

    <header className="header">
      <ul>
        <li>Explore</li>
        <li>Start a project</li>
      </ul>
        <h1><Link to="/">Kickstarter</Link></h1>
        <h3>search</h3>
        <div>
          {display}
        </div>
    </header>
  );
};




// if logged in
// A welcome message including the user's username
// A button to logout
