import * as CategoryAPIUtil from '../util/category_api_util';

export const RECEIVE_CATEGORIES = "RECEIVE_CATEGORIES";
export const RECEIVE_CATEGORY = "RECEIVE_CATEGORY";
export const RECEIVE_CATEGORY_ERRORS = "RECEIVE_CATEGORY_ERRORS";

const receiveCategories = categories => ({
  type: RECEIVE_CATEGORIES,
  categories
});

const receiveCategory = payload => ({
  type: RECEIVE_CATEGORY,
  payload
});

const receiveErrors = errors => ({
  type: RECEIVE_CATEGORY_ERRORS,
  errors
});

export const fetchCategories = () => dispatch => {
  return CategoryAPIUtil.fetchCategories()
    .then(categories => dispatch(receiveCategories(categories))
  );
};

export const fetchCategory = categoryId => dispatch => {
  return CategoryAPIUtil.fetchCategory(categoryId)
    .then(payload => (dispatch(receiveCategory(payload))
  ), err => (
    dispatch(receiveErrors(err.responseJSON))
  ));
};
