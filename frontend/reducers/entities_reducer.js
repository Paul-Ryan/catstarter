import { combineReducers } from 'redux';
import projectsReducer from './projects_reducer';

export default combineReducers({
  projects: projectsReducer
});
