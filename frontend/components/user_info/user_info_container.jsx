import React from 'react';
import { connect } from 'react-redux';
import UserInfo from './user_info.jsx';
import { fetchProjects, fetchProject, deleteProject } from '../../actions/project_actions';
import { selectUserProjects } from '../../reducers/selectors';

const mapStateToProps = (state, ownProps) => {
  return ({
    projects: selectUserProjects(state.entities.projects, state.session.currentUser.id)
  });
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return ({
    fetchProjects: () => dispatch(fetchProjects()),
    deleteProject: id => dispatch(deleteProject(id))
  });
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserInfo);
