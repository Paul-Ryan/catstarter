import React from 'react';
import { Link } from 'react-router-dom';

function Featured(props) {
  let featured = props.featuredProject;
  let backgroundImg = { backgroundImage: `url(${props.featuredProject.imageUrl})` };

  return (
    <div className="featured">
      <Link to={`projects/${featured.id}`}>
        <h2>FEATURED PROJECT</h2>
        <div className="featured-projects" style={backgroundImg}>
          <p className="featured-title">{featured.title}</p>
          <p className="featured-author">By {featured.author.username}</p>
        </div>
      </Link>
    </div>
  );
}

export default Featured;
