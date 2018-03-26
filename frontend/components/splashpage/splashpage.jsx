import React from 'react';
import SplashBar from './splash_bar';
import CategoryBar from './category_bar';
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
        <section>
          <CategoryBar />
        </section>

        <section className="category-bar">
          {this.renderCategory("Music")}
          {this.renderCategory("Games")}
          {this.renderCategory("Food")}
        </section>

        <section className="splash-widgets">
          <Featured projects={Object.values(this.props.projects)} />
          <New projects={Object.values(this.props.projects)} />
        </section>
      </div>
    );
  }
}

export default SplashPage;
