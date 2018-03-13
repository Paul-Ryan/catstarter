import React from 'react';
import { Link } from 'react-router-dom';

function Featured(props) {
  if (props.projects.length === 0) {
    return null;
  }

  let imgUrl = props.projects[0].imageUrl;
  let backgroundImg = { backgroundImage: `url(${imgUrl})` };

  return (
    <div className="featured">
      <Link to={`projects/${props.projects[0].id}`}>
        <h2>FEATURED PROJECT</h2>
        <div className="featured-projects" style={backgroundImg}>
          <p className="featured-title">{props.projects[0].title}</p>
          <p className="featured-author">{props.projects[0].author.username}</p>
        </div>
      </Link>
    </div>
  );
}

export default Featured;
