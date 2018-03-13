import React from 'react';
import { Link } from 'react-router-dom';

function New(props) {
  if (props.projects.length === 0) {
    return null;
  }

  return (
    <div className="new-noteworthy">
      <h2 className="new-headers">NEW & NOTEWORTHY</h2>
      <ul className="new-index">
        <li className="project-item">
          <Link to={`projects/${props.projects[1].id}`} className="new-link">
            <img className="new-img" src={props.projects[1].imageUrl} />
            <h3>{props.projects[1].title}</h3>
          </Link>
        </li>
        <li className="project-item">
          <Link to={`projects/${props.projects[2].id}`} className="new-link">
            <img className="new-img" src={props.projects[2].imageUrl} />
            {props.projects[2].title}
          </Link>
        </li>
        <li className="project-item">
          <Link to={`projects/${props.projects[3].id}`} className="new-link">
            <img className="new-img" src={props.projects[3].imageUrl} />
            <h3>{props.projects[3].title}</h3>
          </Link>
        </li>
        <li className="project-item">
          <Link to={`projects/${props.projects[4].id}`} className="new-link">
            <img className="new-img" src={props.projects[4].imageUrl} />
            <h3>{props.projects[4].title}</h3>
          </Link>
        </li>
      </ul>
      <Link to="projects">View All</Link>
    </div>
  );
}

export default New;
