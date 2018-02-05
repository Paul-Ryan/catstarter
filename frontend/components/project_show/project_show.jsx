import React from 'react';
import { Link } from 'react-router-dom';

class ProjectShow extends React.Component {
  constructor(props) {
    super(props);
    // let currentProject = this.props.projects;
  }

  componentDidMount() {
    this.props.fetchProject(this.props.match.params.projectId);
  }

  projectHeader() {
    return (
      <div className="show-project-header row">
        <p className="col col-2">By {this.props.project.author_id}</p>
        <header className="col col-8">
          <h1>{this.props.project.title}</h1>
          <h2>{this.props.project.blurb}</h2>
        </header>
      </div>
    );
  }
  // <h1>{this.props.projects.title}</h1>

  render() {
    return (
      <section className="show-project">
        <div className="show-project-header row">
          <header className="col col-8">
            {this.projectHeader()}
          </header>
          <div className="show-project-stats row">
          </div>
          <div className="show-project-content row">
          </div>
        </div>
      </section>
    );
  }
}

export default ProjectShow;
