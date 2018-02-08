import React from 'react';

class RewardForm extends React.Component {
  constructor(props) {
    super();

    this.state = {
      title: "",
      description: "",
      reward_minimum_amount: 0
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.createReward(this.state);
    this.setState({
      title: "",
      description: "",
      reward_minimum_amount: 0
    });
  }

  render() {
    return (
      <div>
        <h1>Add reward</h1>
        <form onSubmit={this.handleSubmit}>
          <label>Title
            <input
              type="text"
              value={this.state.title}
              onChange={this.update('title')} />
          </label>

          <label>Description
            <input
              type="text"
              value={this.state.description}
              onChange={this.update('description')} />
          </label>

          <label>Reward amount
            <input
              type="integer"
              value={this.state.reward_minimum_amount}
              onChange={this.update('reward_minimum_amount')} />
          </label>
        </form>

        <input type="submit" value="Add reward" />
      </div>
    );
  }
}

export default RewardForm;
