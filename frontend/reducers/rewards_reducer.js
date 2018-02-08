import merge from 'lodash/merge';

import { RECEIVE_PROJECT } from '../actions/project_actions';
import { REMOVE_REWARD, RECEIVE_REWARD } from '../actions/reward_actions';

const rewardsReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState;
  switch (action.type) {
    case RECEIVE_PROJECT:
      newState = action.payload.rewards;
      return merge({}, state, newState);
    case RECEIVE_REWARD:
      newState = {[action.reward.id]: action.reward};
      return merge({}, state, newState);
    default:
      return state;
  }
};

export default rewardsReducer;
