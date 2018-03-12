import React from 'react';

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
        <div className="new-headers">NEW & NOTEWORTHY</div>
        <ul>
          <li>
            <img className="new-img" src="http://lorempixel.com/100/60/" />
            <h4>title</h4>
            <p>Percent funded</p>
          </li>
          <li>
            <img className="new-img" src="http://lorempixel.com/100/60/" />
            <h4>title</h4>
            <p>Percent funded</p>
          </li>
          <li>
            <img className="new-img" src="http://lorempixel.com/100/60/" />
            <h4>title</h4>
            <p>Percent funded</p>
          </li>
          <li>
            <img className="new-img" src="http://lorempixel.com/100/60/" />
            <h4>title</h4>
            <p>Percent funded</p>
          </li>
        </ul>
        <button>View All</button>
      </div>
    );
  }
}

export default NewNoteworthy;
