import * as RewardAPIUtil from '../util/reward_api_util';

export const RECEIVE_REWARD = "RECEIVE_REWARD";
export const REMOVE_REWARD = "REMOVE_REWARD";

const receiveReward = reward => ({
  type: RECEIVE_REWARD,
  reward
});

const removeReward = id => ({
  type: REMOVE_REWARD,
  id
});

export const createReward = (reward) => dispatch => {
  return RewardAPIUtil.createReward(reward)
    .then(dbReward => (dispatch(receiveReward(dbReward))
  ));
};

export const deleteReward = id => dispatch => {
  return RewardAPIUtil.deleteReward(id)
    .then(() => dispatch(removeReward(id))
  );
};
