import React from 'react';
import SearchPage from './search_page';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  return ({
    results: {}
  });
};


const mapDispatchToProps = (dispatch, ownProps) => {
  return ({

  });
};

export default connect(
  mapStateToProps,
  null
)(SearchPage);
