import {
  RECEIVE_PROJECT_ERRORS,
  RECEIVE_PROJECTS,
  RECEIVE_PROJECT,
  REMOVE_PROJECT
} from '../actions/project_actions';

const _nullErrors = [];

export default (state = _nullErrors, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_PROJECT_ERRORS:
      return action.errors;
    case RECEIVE_PROJECTS:
      return _nullErrors;
    case RECEIVE_PROJECT:
      return _nullErrors;
    case REMOVE_PROJECT:
      return _nullErrors;
    default:
      return state;
  }
};
