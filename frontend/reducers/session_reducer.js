import merge from 'lodash/merge';

import {
  RECEIVE_CURRENT_USER,
} from '../actions/session_actions';
import { RECEIVE_PLEDGE } from '../actions/pledge_actions';


const _nullUser = Object.freeze({
  currentUser: null
});

const sessionReducer = (state = _nullUser, action) => {
  Object.freeze(state);
  let newState;
  switch(action.type) {
    case RECEIVE_CURRENT_USER:
      const currentUser = action.currentUser;
      return merge({}, { currentUser });
    case RECEIVE_PLEDGE:
      newState = Object.assign({}, state);
      newState.currentUser.pledges.push(action.pledge.id);
      return merge({}, state, newState);
    default:
      return state;
  }
};

export default sessionReducer;
