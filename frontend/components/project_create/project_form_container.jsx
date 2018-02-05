import React from 'react';
import { connect } from 'react-redux';
import { createProject } from '../../actions/project_actions';
import ProjectForm from 'project_form';

const mapStateToProps = (state, ownProps) => {

  return ({
    project: {}
  });
};

const mapDispatchToProps = (dispatch, ownProps) => {

  return ({
    createProject: (project) => dispatch(createProject(project))
  });
};