import React from 'react';
import { Link } from 'react-router-dom';

const barFill = {
  width: '75%'
};

const ProjectIndexItem = ({ project }) => (
  <li className="project-index-item col col-4">
    <div className="grayBorder">
      <Link to={`projects/${project.id}`}>
        <div className="project-index-image-box">
          <img className="project-index-image" src={project.imageUrl} />
        </div>
      </Link>
      <div className="project-index-title">
        <Link className="project-index-header" to={`projects/${project.id}`}>
          <h1>{project.title}</h1>
        </Link>
        <p className="project-author">by {project.author.username}</p>
      </div>
      <div className="project-index-info">
        <div className="project-pledge-bar">
          <div className="project-pledge-bar-fill" style={barFill}></div>
        </div>
        <p className="project-pledge-total">Total pledged</p>
        <p>Percent of goal reached</p>
        <p>number of days to go</p>
        <p className="project-categories">categories</p>
      </div>
    </div>
  </li>
);

export default ProjectIndexItem;
