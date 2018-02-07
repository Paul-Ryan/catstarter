import * as ProjectAPIUtil from '../util/project_api_util';

export const RECEIVE_PROJECT_ERRORS = "RECEIVE_PROJECT_ERRORS";
export const RECEIVE_PROJECTS = "RECEIVE_PROJECTS";
export const RECEIVE_PROJECT = "RECEIVE_PROJECT";
export const REMOVE_PROJECT = "DELETE_PROJECT";

// We need two actions: one to go fetch all the benches from our Rails API, and one that tells our store to change our application state to represent the bench data in our action.

const receiveProjects = projects => ({
  type: RECEIVE_PROJECTS,
  projects
});

const receiveProject = payload => ({
  type: RECEIVE_PROJECT,
  payload
});

const removeProject = (id) => ({
  type: REMOVE_PROJECT,
  id
});

const receiveErrors = (errors) => ({
  type: RECEIVE_PROJECT_ERRORS,
  errors
});

export const fetchProjects = () => dispatch => {
  return ProjectAPIUtil.fetchProjects()
    .then(dbProjects => (dispatch(receiveProjects(dbProjects))
  ), err => (
    dispatch(receiveErrors(err.responseJSON))
  ));
};

export const fetchProject = projectId => dispatch => {
  return ProjectAPIUtil.fetchProject(projectId)
    .then(dbProject => (dispatch(receiveProject(dbProject))
  ), err => (
    dispatch(receiveErrors(err.responseJSON))
  ));
};

export const createProject = project => dispatch => {
  return ProjectAPIUtil.createProject(project)
    .then(dbProject => (dispatch(receiveProject(dbProject))
  ), err => (
    dispatch(receiveErrors(err.responseJSON))
  ));
};

export const updateProject = project => dispatch => {
  return ProjectAPIUtil.updateProject(project)
    .then(dbProject => (dispatch(receiveProject(project))
  ), err => (
    dispatch(receiveErrors(err.responseJSON))
  ));
};

export const deleteProject = projectId => dispatch => {
  return ProjectAPIUtil.deleteProject(projectId)
    .then(() => dispatch(removeProject(projectId))
  ), err => (
    dispatch(receiveErrors(err.responseJSON))
  );
};
