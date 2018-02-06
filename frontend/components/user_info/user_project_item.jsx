import React from 'react';
import { Link } from 'react-router-dom';

const UserProjectItem = ({ project }) => (
  <li className="user-project-item">
    {project.title}
  </li>
);

export default UserProjectItem;
