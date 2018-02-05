import React from 'react';
import { Link } from 'react-router-dom';

class ProjectShow extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchProject(this.props.match.params.projectId);
  }

  projectHeader() {
    return (
      <div className="show-project-header row">
        <p className="col col-2">By {this.props.project.author_id}</p>
        <div className="col col-1"></div>
        <header className="col col-8">
          <h1>{this.props.project.title}</h1>
          <h2>{this.props.project.blurb}</h2>
        </header>
      </div>
    );
  }

  projectStats() {
    return (
      <div className="show-project-stats row">
        <img className="show-image col col-8" src={this.props.project.image_url} />
        <ul className="project-stats col col-4">
          <li><span className="green-stat">$3,650</span><br />pledged of ${this.props.project.funding_goal}</li>
          <li><span className="gray-stat">181</span><br />backers</li>
          <li><span className="gray-stat">14</span><br />days to go</li>
          <Link className="btn btn-submit back-this-project" to="/">Back this project</Link>
          <li>This project will only be funded if it reaches its goal by {this.props.project.due_date}</li>
        </ul>
      </div>
    );
  }

  projectAbout() {
    return (
      <div className="show-project-content row">
        <div className="col col-8">
          <h3>About</h3>
          <p>{this.props.project.description}</p>
        </div>
      </div>
    );
  }

  render() {
    return (
      <section className="show-project">
        <div className="show-project-header row">
          <header className="col col-8">
            {this.projectHeader()}
          </header>
          {this.projectStats()}
          {this.projectAbout()}
        </div>
      </section>
    );
  }
}

export default ProjectShow;
