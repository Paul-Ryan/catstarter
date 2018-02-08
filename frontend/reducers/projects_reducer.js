import merge from 'lodash/merge';

import {
  RECEIVE_PROJECTS,
  RECEIVE_PROJECT,
  REMOVE_PROJECT
} from '../actions/project_actions';

import { RECEIVE_REWARD } from '../actions/reward_actions';

const projectsReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState;
  switch(action.type) {
    case RECEIVE_PROJECTS:
      return merge({}, state, action.projects);
    case RECEIVE_PROJECT:
      newState = {[action.payload.project.id]: action.payload.project};
      return merge({}, state, newState);
    case REMOVE_PROJECT:
      newState = merge({}, state);
      delete newState[action.id];
      return newState;
    case RECEIVE_REWARD:
      newState = Object.assign({}, state);
      newState[action.reward.project_id].rewards.push(action.reward.id);
      return merge({}, state, newState);
    default:
      return state;
  }
};

export default projectsReducer;
