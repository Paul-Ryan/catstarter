import React from 'react';
import { Link } from 'react-router-dom';
import RewardIndexItem from './reward_index_item';

class Rewards extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    return(
      <div className="col col-4 rewards-col">
        <h3>Rewards</h3>
        <ul className="reward-list">
        {
          Object.values(this.props.rewards).map(reward => (
            <RewardIndexItem
              reward={reward}
              key={`reward-${reward.id}`}
              />
          ))
        }
        </ul>

      </div>
    );
  }
}


export default Rewards;
