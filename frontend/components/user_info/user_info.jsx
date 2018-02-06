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
      <div className="user-info">
        <h1>Your projects</h1>
          <ul className="user-item-list">
            {
              this.props.projects.map(project => (
                <UserProjectItem
                  project={project}
                  key={project.id}
                  deleteProject = {this.props.deleteProject}
                  />
              ))
            }
          </ul>
          <div className="logout">
            <button className="btn btn-demo" onClick={this.props.logout}>Log out</button>
          </div>
      </div>
    );
  }
}

export default UserInfo;
