import React from 'react';
import { connect } from 'react-redux';
import ProjectShow from './project_show';
import { fetchProject } from '../../actions/project_actions';
import { selectProject } from '../../reducers/selectors';
import { createPledge } from '../../actions/pledge_actions';

const mapStateToProps = (state, { match }) => {
  const projectId = parseInt(match.params.projectId);
  const project = selectProject(state.entities, match.params.projectId);
  return {
      projectId,
      project
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return ({
    fetchProject: id => dispatch(fetchProject(id)),
    createPledge: pledge => dispatch(createPledge(pledge))
  });
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProjectShow);
