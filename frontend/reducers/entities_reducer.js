import { combineReducers } from 'redux';
import projectsReducer from './projects_reducer';
import rewardsReducer from './rewards_reducer';
import pledgesReducer from './pledges_reducer';

export default combineReducers({
  projects: projectsReducer,
  rewards: rewardsReducer,
  pledges: pledgesReducer
});
