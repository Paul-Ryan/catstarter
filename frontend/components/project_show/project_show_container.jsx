import React from 'react';
import { connect } from 'react-redux';
import ProjectShow from './project_show';
import { fetchProject } from '../../actions/project_actions';
import { selectProject } from '../../reducers/selectors';

const mapStateToProps = (state, { match }) => {
  const projectId = parseInt(match.params.projectId);
  const project = selectProject(state.entities, match.params.projectId);
  // const project = fetchProject(match.params.projectId);

  console.log("project Id", projectId);
  console.log("project", project);
  return {
      projectId,
      project
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return ({
    fetchProject: id => dispatch(fetchProject(id))
  });
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProjectShow);
