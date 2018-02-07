import React from 'react';
import { Redirect } from 'react-router-dom';

class ProjectEditForm extends React.Component {
  constructor(props) {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.props.fetchProject(this.props.match.params.projectId);
  }

  componentWillReceiveProps(props) {
      this.setState(props.project);
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    console.warn(this.state);
    this.props.updateProject(this.state).then(() => this.props.history.push(`/projects/${this.state.id}`));
    this.setState({
      author_id: this.props.user.id,
      title: "",
      image_url: "",
      blurb: "",
      description: "",
      due_date: "",
      funding_goal: 0
    });
    this.setState({ fireRedirect: true });
  }

  render () {
    const { from } = this.props.location.state || '/';

    if (!this.state) {
      return null;
    }

    console.log("state", this.state);

    return (
      <div className="form">
        <h1>Update your project</h1>
        <ul className="form-select">
          <li><button>Basics</button></li>
          <li><button>Rewards</button></li>
        </ul>

        <form className="project-form" onSubmit={this.handleSubmit}>
          <label>Title
            <input
              type="text"
              value={this.state.title}
              onChange={this.update('title')} />
          </label>

          <label>Image url
            <input
              type="text"
              value={this.state.imageUrl}
              onChange={this.update('image_url')} />
          </label>

          <label>Short blurb
            <input
              type="text"
              value={this.state.blurb}
              onChange={this.update('blurb')} />
          </label>

          <label>Description
            <textarea
              type="textarea"
              className="form-description"
              value={this.state.description}
              onChange={this.update('description')} />
          </label>

          <label>Due date
            <input
              type="date"
              className="form-due-date"
              value={this.state.dueDate}
              onChange={this.update('due_date')} />
          </label>

          <label>Funding goal
            <input
              type="number"
              value={this.state.fundingGoal}
              onChange={this.update('funding_goal')} />
          </label>

          <input type="submit" className="btn btn-submit" value="Update your project!" />
        </form>
      </div>
    );
  }
}

export default ProjectEditForm;
