export const fetchProjects = () => {
  return $.ajax({
    url: 'api/projects',
    method: 'GET',
  });
};

export const fetchProject = id => {
  return $.ajax({
    url: `api/projects/${id}`,
    method: 'GET',
  });
};

export const createProject = project => {
  return $.ajax({
    url: `api/projects`,
    method: 'POST',
    data: { project: project }
  });
};

export const deleteProject = id => {
  return $.ajax({
    url: `api/projects/${id}`,
    method: 'DELETE',
  });
};
