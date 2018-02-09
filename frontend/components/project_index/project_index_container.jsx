import React from 'react';
import { connect } from 'react-redux';
import ProjectIndex from './project_index';

import { fetchProjects, fetchProject } from '../../actions/project_actions';

const mapStateToProps = (state, ownProps) => {

  return ({
    projects: Object.values(state.entities.projects)
  });
};

const mapDispatchToProps = (dispatch, ownProps) => {

  return ({
    fetchProjects: () => dispatch(fetchProjects()),
    fetchProject: projectId => dispatch(fetchProject(projectId))
  });
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProjectIndex);
