import merge from 'lodash/merge';

import { RECEIVE_PLEDGE } from '../actions/pledge_actions';
import { REMOVE_PLEDGE } from '../actions/pledge_actions';
import { RECEIVE_PROJECT } from '../actions/project_actions';


const pledgesReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState;

  switch (action.type) {
    case RECEIVE_PLEDGE:
      newState = {[action.pledge.id]: action.pledge};
      return merge({}, state, newState);
    case RECEIVE_PROJECT:
      newState = action.payload.pledges;
      return merge({}, state, newState);
    default:
      return state;
  }
};

export default pledgesReducer;
