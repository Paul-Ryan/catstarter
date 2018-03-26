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
      currentCategory: "Music",
      featuredProjects: this.props.projects
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

  handleClick(category) {
    if (this.state.currentCategory === category) {
      return;
    }
    this.setState({
      currentCategory: category,
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
            projects={Object.values(this.props.projects)} 
            currentCategory = {this.state.currentCategory}
          />
          <New projects={Object.values(this.props.projects)} />
        </section>
      </div>
    );
  }
}

export default SplashPage;
