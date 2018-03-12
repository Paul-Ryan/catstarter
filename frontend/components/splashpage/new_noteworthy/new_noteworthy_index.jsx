import React from 'react';
import { Link } from 'react-router-dom';

class NewNoteworthy extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      category: "projects"
    };
  }

  render() {
    return (
      <div className="new-noteworthy">
        <h2 className="new-headers">NEW & NOTEWORTHY</h2>
        <ul className="project-index">
          <li className="project-item">
            <img className="new-img" src="http://lorempixel.com/100/60/" />
            <Link to="" className="new-link"> href="#">title</Link>
            <p>Percent funded</p>
          </li>
          <li className="project-item">
            <img className="new-img" src="http://lorempixel.com/100/60/" />
            <Link to="" className="new-link"> href="#">title</Link>
            <p>Percent funded</p>
          </li>
          <li className="project-item">
            <img className="new-img" src="http://lorempixel.com/100/60/" />
            <Link to="" className="new-link"> href="#">title</Link>
            <p>Percent funded</p>
          </li>
          <li className="project-item">
            <img className="new-img" src="http://lorempixel.com/100/60/" />
            <Link to="" className="new-link"> href="#">title</Link>
            <p>Percent funded</p>
          </li>
        </ul>
        <button>View All</button>
      </div>
    );
  }
}

export default NewNoteworthy;
