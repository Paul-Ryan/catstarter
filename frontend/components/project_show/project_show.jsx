import React from 'react';
import { Link } from 'react-router-dom';

class ProjectShow extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchProject(this.props.match.params.projectId);
  }

  daysToGo() {
    let date1 = Date.parse(this.props.project.dueDate);
    let dueDate = new Date(date1);
    let today = new Date;
    let timeDiff = Math.abs(today.getTime() - dueDate.getTime());
    let diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));

    return (
     diffDays
    );
  }

  projectHeader() {
    return (
      <div className="show-project-header row">
        <p className="col col-2">By {this.props.project.author.username}</p>
        <header className="col col-9">
          <h1>{this.props.project.title}</h1>
          <h2>{this.props.project.blurb}</h2>
        </header>
      </div>
    );
  }

  projectStats() {
    return (
      <div className="show-project-stats row">
        <img className="show-image col col-8" src={this.props.project.imageUrl} />
        <ul className="project-stats col col-4">
          <li><span className="green-stat">$3,650</span><br />pledged of ${this.props.project.fundingGoal}</li>
          <li><span className="gray-stat">181</span><br />backers</li>
          <li><span className="gray-stat">{this.daysToGo()}</span><br />days to go</li>
          <Link className="btn btn-submit back-this-project" to="/">Back this project</Link>
          <li>This project will only be funded if it reaches its goal by {this.props.project.dueDate}</li>
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
    if (this.props.project.author) {
      return (
        <section className="show-project">
          <div className="show-project-header row">
            <header className="col col-12">
              {this.projectHeader()}
            </header>
            {this.projectStats()}
            {this.projectAbout()}
          </div>
        </section>
      );
    } else {
      return null;
    }
  }
}

export default ProjectShow;
