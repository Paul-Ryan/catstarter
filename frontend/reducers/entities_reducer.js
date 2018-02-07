import { combineReducers } from 'redux';
import projectsReducer from './projects_reducer';
import rewardsReducer from './rewards_reducer';

export default combineReducers({
  projects: projectsReducer,
  rewards: rewardsReducer
});
