import React from 'react';

class SearchPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      results: {}
    };
  }

  render () {
    return (<h1>Search Page</h1>);
  }
}

export default SearchPage;
