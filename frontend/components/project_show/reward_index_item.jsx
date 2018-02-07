import React from 'react';
import { Link } from 'react-router-dom';

const RewardIndexItem = ({ reward }) => (
  <li>
    {reward.title}
    {reward.description}
    {reward.reward_minimum_amount}
  </li>
);

export default RewardIndexItem;
