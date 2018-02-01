import React from 'react';
import { Link } from 'react-router-dom';

const SignUp = ({ formType }) => {
  if (formType === 'login') {
    return (<p className="link-signup">New to Kickstarter?
      <Link className="sign-up" to="/signup">Sign up!</Link>
    </p>);
  } else {
    return (
      <div></div>
    );
  }
};


export default SignUp;
