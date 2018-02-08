import React from 'react';
import { Link } from 'react-router-dom';
import { Redirect } from 'react-router-dom';

const UserProjectItem = ({ project, deleteProject }) => {
  return (
    <li className="user-project-item">
      {project.title}
      <div className="user-buttons">
        <Link className="btn btn-submit" to={`/projects/${project.id}/edit`}>Edit</Link>
        <button className="btn btn-delete" type="delete" onClick={() => { deleteProject(project.id); }}>Delete</button>
      </div>
    </li>
  );
};

export default UserProjectItem;
