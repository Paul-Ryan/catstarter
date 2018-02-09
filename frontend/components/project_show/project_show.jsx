import React from 'react';
import { Link } from 'react-router-dom';
import RewardsContainer from './rewards_container';

class ProjectShow extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      pledgeOpen: false,
      pledgeAmount: 0
    };
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

  openPledgeClick() {
    this.setState({pledgeOpen: true});
  }

  closePledgeClick() {
    this.setState({pledgeOpen: false});
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  logged_in() {
    return !!this.props.currentUser;
  }

  handlePledge() {
    this.props.createPledge({pledge_amount: this.state.pledgeAmount, project_id: this.props.projectId});
    this.closePledgeClick();
  }

  pledgeButton() {
    return (
      this.state.pledgeOpen
        ? <div>
            <input type="text" onChange={this.update("pledgeAmount")}></input>
            <button className="btn btn-submit back-this-project" onClick={() => this.handlePledge()}>Make your pledge</button>
            <button className="btn btn-submit back-this-project" onClick={() => this.closePledgeClick()}>Close pledge field</button>
          </div>
        : <button className="btn btn-submit back-this-project" onClick={() => this.openPledgeClick()}>Back this project</button>
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

          {this.pledgeButton()}


          <li>This project will only be funded if it reaches its goal by {this.props.project.dueDate}</li>
        </ul>
      </div>
    );
  }

  projectAbout() {
    return (
      <div className="col col-8">
        <h3>About</h3>
        <p>{this.props.project.description}</p>
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
            <div className="show-project-content row">
              {this.projectAbout()}
              <RewardsContainer />
            </div>
          </div>
        </section>
      );
    } else {
      return null;
    }
  }
}

export default ProjectShow;
