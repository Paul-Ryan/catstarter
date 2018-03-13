import React from 'react';
import SplashBar from './splash_bar';
import CategoryBar from './category_bar';
import New from './new';
import Featured from './featured';
// import * as Select from '../reducers.selectors';

class SplashPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
      currentCategory: "games",
      featuredProjects: this.props.projects
      };
  }
  componentDidMount() {
      this.props.fetchProjects();
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
        <section className="splash-widgets">
          <Featured projects={Object.values(this.props.projects)} />
          <New projects={Object.values(this.props.projects)} />
        </section>
      </div>
    );
  }
}

export default SplashPage;
