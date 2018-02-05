export const selectProject = ({ projects }, id) => {
   const project = projects[id] || {};
   return project;
};
