import React from 'react';
import { connect } from 'react-redux';
import RewardForm from './reward_form';
import { createReward } from '../../actions/reward_actions';

const mapStateToProps = (state, ownProps) => {
  console.log(ownProps);
  return ({
    currentUserId: state.session.currentUser.id
  });
};

const mapDispatchToProps = dispatch => {
  return ({
    createReward: (reward) => dispatch(createReward(reward))
  });
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RewardForm);
