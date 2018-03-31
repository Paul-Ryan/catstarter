import React from 'react';
import { Link } from 'react-router-dom';
import ProjectIndexItem from './project_index';


class New extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tab: "new",
      category: props.currentCategory,
      projects: props.projects,
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ category: nextProps.currentCategory });
  }

  renderProjectIndexItem(n) {
    return (
      <ProjectIndexItem
        project={this.props.projects[n]}
      />
    );
  }

  render() {
    if (this.props.projects.length === 0) {
      return null;
    }

    return (
      <div className="new-noteworthy">
        <ul className="splash-list">
          <li className="list-header">NEW & NOTEWORTHY</li>
          <li className="list-header">POPULAR</li>
        </ul>
        <ul className="new-index">
          {this.renderProjectIndexItem(1)}
          <li className="project-item">
            <Link to={`projects/${this.props.projects[2].id}`} className="new-link">
              <img className="new-img" src={this.props.projects[2].imageUrl} />
              {this.props.projects[2].title}
            </Link>
          </li>
          <li className="project-item">
            <Link to={`projects/${this.props.projects[3].id}`} className="new-link">
              <img className="new-img" src={this.props.projects[3].imageUrl} />
              <h3>{this.props.projects[3].title}</h3>
            </Link>
          </li>
          <li className="project-item">
            <Link to={`projects/${this.props.projects[4].id}`} className="new-link">
              <img className="new-img" src={this.props.projects[4].imageUrl} />
              <h3>{this.props.projects[4].title}</h3>
            </Link>
          </li>
        </ul>
        <Link to="projects">View All</Link>
      </div>
    );
  }
}

export default New;
