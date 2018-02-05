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
      </form>
    );
  }

}
