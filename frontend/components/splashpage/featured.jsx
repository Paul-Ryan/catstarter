import React from 'react';
import { Link } from 'react-router-dom';

function Featured(props) {
  if (props.length === 0) {
    return null;
  }

  let featured = props.featuredProject;
  let backgroundImg = { backgroundImage: `url(${props.featuredProject.imageUrl})` };

  return (
    <div className="featured">
      <h1 className="current-category">{props.currentCategory}</h1>
      <Link to={`projects/${featured.id}`}>
        <h2>FEATURED PROJECT</h2>
        <div className="featured-projects" style={backgroundImg}>
          <div className="featured-text">
            <p className="featured-title">{featured.title}</p>
            <p className="featured-author">By {featured.author.username}</p>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default Featured;
