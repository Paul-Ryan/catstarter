import React from 'react';
import FormattedDate from './formatted_date';
import New from './new';
import CategoryBar from './category_bar';
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

    let keys = Object.values(this.props.projects);
    // console.log(keys);

    return (
      <div className="container">
        <section className="splash-bar">
          <div className="splash-section">
            <FormattedDate date={this.state.date} />
            <p className="splash-sub">Bringing creative projects to life.</p>
          </div>
          <div className="splash-section">
            <p className="splash-top">TOTAL BACKERS</p>
            <p className="splash-sub">145,673</p>
          </div>
          <div className="splash-section">
            <p className="splash-top">FUNDED PROJECTS</p>
            <p className="splash-sub">2,749</p>
          </div>
          <div className="splash-section">
            <p className="splash-top">LIVE PROJECTS</p>
            <p className="splash-sub">782</p>
          </div>
        </section>
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
