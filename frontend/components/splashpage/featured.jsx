import React from 'react';
import { Link } from 'react-router-dom';

function Featured(props) {
  if (props.projects.length === 0) {
    return null;
  }

  let featured = props.featuredProject;
  let imgUrl = props.projects[0].imageUrl;
  // let backgroundImg = { backgroundImage: `url(${imgUrl})` };
  let backgroundImg = { backgroundImage: `url(${props.featuredProject.imageUrl})` };
  // let featured = pickFeatured(props.projects, props.currentCategory);

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

// function pickFeatured(projects, currentCategory) {
//   // console.log(Object.values(projects));
//   // console.log("Projects", projects[0]);
//   // console.log("current", currentCategory);
//   let featured;
//   featured = projects.forEach( (project) => {
//     let categories = project['categories'];
//     console.log("categories", categories);
//     if (categories && categories.indexOf(currentCategory) !== -1) {
//       return project;
//     }
//   });
//   return projects[0];
// }

function pickFeatured(projects, currentCategory) {
  let featured;
  featured = projects.filter(project => project['categories'].includes(currentCategory))
  console.log(featured[0]);
  if (featured[0]) {
    return featured[0];
  } else {
   return projects[0];
  }
}

export default Featured;
