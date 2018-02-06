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
    // const { projects } = this.props;
    // console.log(projects);

    return (
      <div>
        <h1>Your projects</h1>
          <ul className="row">

          </ul>
      </div>
    );
  }
}

export default UserInfo;


// {
//   projects.map(project => (
//     <UserProjectItem
//       project={project}
//       key={project.id} />
//   ))
// }
