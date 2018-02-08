import React from 'react';
import { Link } from 'react-router-dom';

const RewardIndexItem = ({ reward }) => (
  <li>
    <h1>{reward.title}</h1>
    <p>{reward.description}</p>
    <p>{reward.reward_minimum_amount}</p>
  </li>
);

export default RewardIndexItem;
