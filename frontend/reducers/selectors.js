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
