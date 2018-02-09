import React from 'react';
import { Link } from 'react-router-dom';
import ProjectIndexItem from './project_index_item';

class ProjectIndex extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      categories: ""
    };
  }

  componentDidMount() {
    this.props.fetchProjects();
  }

  render () {
    const { projects } = this.props;

    return (
      <section className="project-index">
        <nav className="categories">Projects</nav>
        <ul className="row">
          {
            projects.map(project => (
              <ProjectIndexItem
                project={project}
                key={project.id} />
            ))
          }
        </ul>
      </section>
    );
  }
}

export default ProjectIndex;
