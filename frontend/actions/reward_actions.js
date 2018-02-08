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

window.createReward = createReward;


// {project_id: 122,
// title: "demo Demo",
// description: "demo reward 1 description",
// reward_minimum_amount: 100}


// $.ajax({
//   url: `/api/projects/122/rewards`,
//   method: 'POST',
//   data: { reward: {project_id: 122,
//   title: "demo Demo",
//   description: "demo reward 1 description",
//   reward_minimum_amount: 100} }
// });
