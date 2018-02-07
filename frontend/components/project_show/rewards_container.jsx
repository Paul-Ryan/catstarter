import React from 'react';
import { connect } from 'react-redux';
import Rewards from './rewards';

const mapStateToProps = (state, ownProps) => {
  const rewards = state.entities.rewards;
  return ({
    rewards
  });
};

export default connect(
  mapStateToProps,
  null
)(Rewards);
