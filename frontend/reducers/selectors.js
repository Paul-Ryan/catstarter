import { values } from 'lodash';

export const selectAllProjects = ({projects}) => {
  return Object.values(projects);
};

export const featuredProjects = ({projects}) => {
  let featured = Object.values(projects);
  return featured.slice(0, 5);
};

export const selectProject = ({ projects }, id) => {
   const project = projects[id] || {};
   return project;
};

export const selectUserProjects = (projects, currentUserId) => {
  let arrProjects = Object.values(projects);

  return arrProjects.filter(project => (
    project.authorId === currentUserId
  ));
};
