import React from 'react';
import UserProjectItem from './user_project_item';

class UserInfo extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchProjects();
  }

  render() {
    return (
      <div>
        <h1>Your projects</h1>
          <ul className="row">
            {
              this.props.projects.map(project => (
                <UserProjectItem
                  project={project}
                  key={project.id}
                  deleteProject = {this.props.deleteProject} />
              ))
            }
          </ul>
      </div>
    );
  }
}

export default UserInfo;
