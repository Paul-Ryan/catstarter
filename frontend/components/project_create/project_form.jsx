import React from 'react';

class ProjectForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      author_id: props.user.id,
      title: "",
      image_url: "",
      blurb: "",
      description: "",
      funding_duration: "",
      funding_goal: 0
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log("state: ", this.state);
    this.props.createProject(this.state);
    this.setState({
      author_id: this.props.user.id,
      title: "",
      image_url: "",
      blurb: "",
      description: "",
      due_date: "",
      funding_goal: 0
    });
  }

  render () {
    return (
      <div className="form">
        <h1>Create your project</h1>
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
              value={this.state.image_url}
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

          <label>Funding duration
            <input
              type="date"
              className="form-due-date"
              value={this.state.due_date}
              onChange={this.update('due_date')} />
          </label>

          <label>Funding goal
            <input
              type="number"
              value={this.state.funding_goal}
              onChange={this.update('funding_goal')} />
          </label>

          <input type="submit" className="btn btn-submit" value="Create project!" />
        </form>
      </div>
    );
  }
}

export default ProjectForm;
