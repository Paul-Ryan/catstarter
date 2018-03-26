import React from 'react';
import { Link } from 'react-router-dom';

function Featured(props) {
  if (props.projects.length === 0) {
    return null;
  }

  let imgUrl = props.projects[0].imageUrl;
  let backgroundImg = { backgroundImage: `url(${imgUrl})` };
  let featured = pickFeatured(props.projects);

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

function pickFeatured(projects) {
  // console.log(Object.values(projects));
  const allProjects = Object.values(projects)

  return projects[0];
}

export default Featured;
