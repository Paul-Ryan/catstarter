import React from 'react';

class ProjectForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      image_url: "",
      blurb: "",
      description: "",
      funding_duration: "",
      funding_goal: 0
    };
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  render () {
    return (
      <form>
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
            value={this.state.description}
            onChange={this.update('description')} />
        </label>

        <label>Funding duration
          <input
            type="date"
            value={this.state.funding_duration}
            onChange={this.update('funding_duration')} />
        </label>

        <label>Funding goal
          <input
            type="text"
            value={this.state.funding_goal}
            onChange={this.update('funding_goal')} />
        </label>
      </form>
    );
  }
}

export default ProjectForm;
