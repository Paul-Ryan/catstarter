import React from 'react';
import { Link } from 'react-router-dom';

function ProjectIndexItem(props) {
  let project = props.project;

  return (
    <li className="project-item">
      <Link to={`projects/${project.id}`} className="new-link">
        <img className="new-img" src={project.imageUrl} />
        <h3>{project.title}</h3>
      </Link>
    </li>
  );
}

export default ProjectIndexItem;
