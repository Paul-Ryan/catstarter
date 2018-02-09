import React from 'react';

class RewardForm extends React.Component {
  constructor(props) {
    super();

    this.state = {
      title: "",
      description: "",
      reward_minimum_amount: 0,
      project_id: props.projectId,
      submitNote: false
    };
    this.nextReward = this.nextReward.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  nextReward() {
    this.setState({submitNote: false});
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.createReward(this.state);
    this.setState({
      title: "",
      description: "",
      reward_minimum_amount: 0,
      project_id: this.props.projectId,
      submitNote: true
    });
  }

  render() {
    return (
      <div className="form form-edit">
        <h1>Add reward</h1>
        <form
          className="project-form"
          onSubmit={this.handleSubmit}>

          <label>Title
            <input
              type="text"
              value={this.state.title}
              onChange={this.update('title')}
              onFocus={this.nextReward} />
          </label>

          <label>Description
            <input
              type="text"
              value={this.state.description}
              onChange={this.update('description')}
              onFocus={this.nextReward} />
          </label>

          <label>Reward amount
            <input
              type="integer"
              value={this.state.reward_minimum_amount}
              onChange={this.update('reward_minimum_amount')}
              onFocus={this.nextReward} />
          </label>
          {
            this.state.submitNote
            ? <div className="btn submit-message">Reward Submitted!</div>
            : <input type="submit" className="btn btn-submit" value="Add reward" />
          }
        </form>

      </div>
    );
  }
}

export default RewardForm;
