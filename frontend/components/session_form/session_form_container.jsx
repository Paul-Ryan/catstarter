import { connect } from 'react-redux';
import { login, logout, signup, clear } from '../../actions/session_actions';

import SessionForm from './session_form';

const mapStateToProps = (state, ownProps) => {
  const formType = ownProps.location.pathname.slice(1);

  return ({
    loggedIn: Boolean(state.session.currentUser),
    errors: state.errors.session,
    formType
  });
};

const mapDispatchToProps = (dispatch, ownProps) => {
  const formType = ownProps.location.pathname.slice(1);
  const processForm = (formType === 'login') ? login : signup;

  return ({
    processForm: user => dispatch(processForm(user)),
    clear: () => dispatch(clear()),
    login: user => dispatch(login(user))
  });
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionForm);
