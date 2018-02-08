import React from 'react';
import { connect } from 'react-redux';
import { updateProject, fetchProject } from '../../actions/project_actions';
import { createReward } from '../../actions/reward_actions';
import ProjectEditForm from './project_edit_form';

const mapStateToProps = (state, ownProps) => {
  return ({
    project: state.entities.projects[ownProps.match.params.projectId],
    user: state.session.currentUser
  });
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return ({
    updateProject: (project) => dispatch(updateProject(project)),
    fetchProject: (id) => dispatch(fetchProject(id)),
    createReward: (reward) => dispatch(createReward(reward))
  });
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProjectEditForm);
