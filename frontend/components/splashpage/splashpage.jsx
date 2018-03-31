import React from 'react';
import SplashBar from './splash_bar';
import New from './new';
import Featured from './featured';
import Category from './category';

// import * as Select from '../reducers.selectors';

class SplashPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
      currentCategory: "Games",
      featuredProjects: this.props.projects,
      featuredProject: {
        id: 1,
        title: "Special Glasses: see what you've been missing!",
        author: {username: "Cat"},
        imageUrl: "https://res.cloudinary.com/paul-ryan/image/upload/v1517897262/cool-glasses.jpg"
      }
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

  pickFeatured(projects, currentCategory) {
    let featured = projects.filter(project =>
      project['categories'].includes(currentCategory));

    if (featured[0]) {
      return featured;
    } else {
     return projects[0];
    }
  }

  handleClick(category) {
    if (this.state.currentCategory === category) {
      return;
    }

    let featured = this.pickFeatured(
      Object.values(this.props.projects), category);

    this.setState({
      currentCategory: category,
      featuredProject: featured[0],
      listProjects: featured.slice(1)
    });
  }

  render() {
    if (this.props.projects.length === 0) {
      return null;
    }

    return (
      <div className="container">
        <SplashBar />

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
            featuredProject={this.state.featuredProject}
            projects={Object.values(this.props.projects)}
            currentCategory = {this.state.currentCategory}
          />
          <New
            projects={Object.values(this.props.projects)}
            currentCategory = {this.state.currentCategory}
            listProjects = {this.state.listProjects}
          />
        </section>
      </div>
    );
  }
}

export default SplashPage;
