import React from 'react';
import { connect } from 'react-redux';
import Rewards from './rewards';
import { selectProject } from '../../reducers/selectors';
import _ from 'lodash';
import {withRouter} from 'react-router';

const mapStateToProps = (state, ownProps) => {
  const rewards = _.pick(state.entities.rewards, state.entities.projects[ownProps.match.params.projectId].rewards);
  return ({
    rewards
  });
};


export default withRouter(connect(
  mapStateToProps,
  null
)(Rewards));
