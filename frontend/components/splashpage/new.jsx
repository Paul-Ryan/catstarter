import React from 'react';
import { Link } from 'react-router-dom';
import ProjectIndexItem from './project_index';


class New extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tab: "new",
    };
  }

  renderProjectIndexItem(n) {
    if (typeof this.props.listProjects[n] === 'undefined') {
      return null;
    }

    return (
      <ProjectIndexItem
        project={this.props.listProjects[n]}
      />
    );
  }

  render() {
    return (
      <div className="new-noteworthy">
        <ul className="splash-list">
          <li className="list-header">NEW & NOTEWORTHY</li>
          <li className="list-header">POPULAR</li>
        </ul>
        <ul className="new-index">
          {this.renderProjectIndexItem(1)}
          {this.renderProjectIndexItem(2)}
          {this.renderProjectIndexItem(3)}
          {this.renderProjectIndexItem(4)}
        </ul>
        <Link to="projects">View All</Link>
      </div>
    );
  }
}

export default New;
