import React from 'react';
import { Link } from 'react-router-dom';
import { Redirect } from 'react-router-dom';

const UserProjectItem = ({ project, deleteProject }) => {
  console.log("project ", project);
  console.log("deleteproject ", deleteProject);

  return (
    <li className="user-project-item">
      {project.title}
      <Link to={`/projects/${project.id}/edit`}>Edit</Link>
      <button type="delete" onClick={() => { deleteProject(project.id); }}>Delete</button>
    </li>
  );
};

export default UserProjectItem;


// <Link to="/about">About</Link>
