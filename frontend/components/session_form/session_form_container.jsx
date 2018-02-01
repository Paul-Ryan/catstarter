import { connect } from 'react-redux';
import { login, logout, signup } from '../../actions/session_actions';

import SessionForm from './session_form';

const mapStateToProps = (state, ownProps) => {

  console.log(ownProps);

  return ({
    loggedIn: Boolean(state.session.currentUser),
    errors: state.errors.session
  });
};



// loggedIn (boolean) - representing whether a currentUser exists
// errors (array) - list of errors from the state
// formType (string): 'login' or 'signup' given the current ownProps.location.pathname



const mapDispatchToProps = (dispatch, ownProps) => {
  console.log("session props", ownProps);
  const formType = location.pathname.slice(1);
  const processForm = (formType === 'login') ? login : signup;
  
  return ({
    processForm: user => dispatch(processForm(user))
  });
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionForm);
