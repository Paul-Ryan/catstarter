import React from 'react';
import { Link } from 'react-router-dom';

const RewardIndexItem = ({ reward }) => (
  <li className="reward-item">
    <h1>{reward.title}</h1>
    <p><span className="pledge-form-tag">Description:</span> {reward.description}</p>
    <p><span className="pledge-form-tag">Required pledge:</span> ${reward.reward_minimum_amount}</p>
  </li>
);

export default RewardIndexItem;
