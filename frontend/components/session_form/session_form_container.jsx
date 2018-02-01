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

const mapDispatchToProps = (dispatch, ownProps) => {
  console.log("session props", ownProps);
  const formType = ownProps.location.pathname.slice(1);
  console.log("formtype: ", formType);
  const processForm = (formType === 'login') ? login : signup;

  return ({
    processForm: user => dispatch(processForm(user))
  });
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionForm);
