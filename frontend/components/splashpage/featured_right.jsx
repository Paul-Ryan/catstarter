import React from 'react';
import { Link } from 'react-router-dom';
import ProjectIndexItem from './project_index';


function FeaturedRight(props) {

  return (
    <div className="new-noteworthy">
      <ul className="splash-list">
        <li className="list-header">NEW & NOTEWORTHY</li>
      </ul>
      <ul className="new-index">
        {renderProjectIndexItem(1, props)}
        {renderProjectIndexItem(2, props)}
        {renderProjectIndexItem(3, props)}
        {renderProjectIndexItem(4, props)}
      </ul>
      <Link to="projects">View All</Link>
    </div>
  );
}

function renderProjectIndexItem(n, props) {
  if (typeof props.listProjects[n] === 'undefined') {
    return null;
  }

  return (
    <ProjectIndexItem
      project={props.listProjects[n]}
    />
  );
}


export default FeaturedRight;
