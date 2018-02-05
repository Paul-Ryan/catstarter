import React from 'react';
import { Link } from 'react-router-dom';

class ProjectShow extends React.Component {
  constructor(props) {
    super(props);
    const project = props.project;
    const projectId = props.projectId;
  }

  componentDidMount() {
    this.props.fetchProject(this.props.match.params.projectId);
  }

  render() {
    console.log(this.props);
    return (
      <section className="show-project">
        Here is your project show
      </section>
    );
  }
}

export default ProjectShow;
