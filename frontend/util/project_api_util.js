export const fetchProjects = search => {
  return $.ajax({
    url: 'api/projects',
    method: 'GET',
    data: { search }
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
    data: { project }
  });
};

export const updateProject = project => {
  return $.ajax({
    url: `api/projects/${project.id}`,
    method: 'PATCH',
    data: { project }
  });
};

export const deleteProject = id => {
  return $.ajax({
    url: `api/projects/${id}`,
    method: 'DELETE',
  });
};

export const searchProjects = search => {
  return $.ajax({
    url: `project_search?${search}`,
    method: 'GET',
    data: { search }
  });
};
