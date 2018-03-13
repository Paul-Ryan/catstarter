import React from 'react';

class FeaturedProjects extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      featuredProject: "",
    };
  }


  render() {
    if (this.props.projects.length === 0) {
      return null;
    }

    return (
      <div className="featured">
        <h2>FEATURED PROJECT</h2>
        <div className="featured-projects">
          <p className="featured-title">title</p>
          <p className="featured-author">Project Author</p>
          <p className="featured-percent">percent funded</p>
        </div>
      </div>
    );
  }
}

export default FeaturedProjects;
