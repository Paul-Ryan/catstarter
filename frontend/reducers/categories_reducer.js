import merge from 'lodash/merge';

import {
  RECEIVE_CATEGORIES,
  RECEIVE_CATEGORY
 } from '../actions/category_actions';

const categoriesReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_CATEGORIES:
      return merge({}, state, action.categories);
    case RECEIVE_CATEGORY:
      return merge({}, state, action.payload.category);
    default:
      return state;
  }
};

export default categoriesReducer;
