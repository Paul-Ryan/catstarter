import * as SessionAPIUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const RECEIVE_SESSION_ERRORS = "RECEIVE_SESSION_ERRORS";

const receiveCurrentUser = (currentUser) => ({
  type: RECEIVE_CURRENT_USER,
  currentUser
});

const receiveErrors = (errors) => ({
  type: RECEIVE_SESSION_ERRORS,
  errors
});

export const signup = user => dispatch => {
  return SessionAPIUtil.signup(user)
    .then(dbUser => (dispatch(receiveCurrentUser(dbUser))
  ), err => (
    dispatch(receiveErrors(err.responseJSON))
  ));
};

export const login = user => dispatch => {
  return SessionAPIUtil.login(user)
    .then(dbUser => (dispatch(receiveCurrentUser(dbUser))
  ), err => (
    dispatch(receiveErrors(err.responseJSON))
  ));
};

export const logout = () => dispatch => {
  return SessionAPIUtil.logout()
    .then(user => dispatch(receiveCurrentUser(null)));
};
