import React from 'react';
import FormattedDate from './formatted_date';


function SplashBar(props) {
  if (props.length === 0) {
    return null;
  }

  return (
    <section className="splash-bar">
      <div className="splash-section">
        <FormattedDate />
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
  );

}

export default SplashBar;
