import React from 'react';
import { connect } from 'react-redux';
import UserInfo from './user_info.jsx';
import { fetchProjects, fetchProject } from '../../actions/project_actions';


const mapStateToProps = (state, ownProps) => {
  return ({
    projects: Object.values(state.entities.projects)
  });
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return ({
    fetchProjects: () => dispatch(fetchProjects())
  });
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserInfo);
