import {
  RECEIVE_PROJECT_ERRORS,
  RECEIVE_PROJECT,
  CLEAR_ERRORS,
} from '../actions/project_actions';

const _nullErrors = [];

export default (state = _nullErrors, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_PROJECT_ERRORS:
      return action.errors;
    case RECEIVE_PROJECT:
      return _nullErrors;
    case CLEAR_ERRORS:
      return _nullErrors;
    default:
      return state;
  }
};
