import React from 'react';
import SplashBar from './splash_bar';
import New from './new';
import FeaturedRight from './featured_right';
import Featured from './featured';
import Category from './category';


class SplashPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      date: new Date(),
      currentCategory: "Crafts",
    };
  }

  componentDidMount() {
      this.props.fetchProjects();
      this.props.fetchCategories();
  }

  renderCategory(category) {
    return (
      <Category
        value={category}
        onClick={() => this.handleClick(category)}
      />
    );
  }

  pickFeatured() {
    let projects = Object.values(this.props.projects);
    let count = 0;
    let i = 0;
    let displayProjects = [];

    while (count < 5 && i < projects.length) {
      if (projects[i].categories.includes(this.state.currentCategory)) {
        displayProjects.push(projects[i]);
        count++;
      }
      i++;
    }

  }

  handleClick(currentCategory) {
    this.setState({ currentCategory });
  }

  render() {

    // pick the featured and new projects to display based on the currentCategory
    let projects = Object.values(this.props.projects);
    let count = 0;
    let i = 0;
    let displayProjects = [];

    while (count < 5 && i < projects.length) {
      if (projects[i].categories.includes(this.state.currentCategory)) {
        displayProjects.push(projects[i]);
        count++;
      }
      i++;
    }

    if (displayProjects.length === 0) {
      return null;
    }
    console.log("display projects", displayProjects);
    console.log("slice 1", displayProjects.slice(1));
    return (
      <div className="container">
        <SplashBar />
          <span className="current-category">{this.state.currentCategory}</span>

        <div className="categories">
          <section className="category-bar">
            {this.renderCategory("Music")}
            {this.renderCategory("Games")}
            {this.renderCategory("Food")}
            {this.renderCategory("Arts")}
            {this.renderCategory("Publishing")}
            {this.renderCategory("Crafts")}
            {this.renderCategory("Film")}
            {this.renderCategory("Technology")}
            {this.renderCategory("Design")}
          </section>
        </div>

        <section className="splash-widgets">
          <Featured
            featuredProject={displayProjects[0]}
            projects={Object.values(this.props.projects)}
            currentCategory = {this.state.currentCategory}
          />
          <New
            listProjects = {displayProjects.slice(1)}
            currentCategory = {this.state.currentCategory}
          />
        </section>
      </div>
    );
  }
}

export default SplashPage;
