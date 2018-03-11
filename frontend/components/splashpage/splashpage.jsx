import React from 'react';
import FormattedDate from './formatted_date';
import FeaturedProjects from './featured_projects';

class SplashPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date()
      };
  }
  componentDidMount() {
      this.props.fetchProjects();
  }

  render() {

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
        <FeaturedProjects projects={"project"} />
      </div>
    );
  }
}

export default SplashPage;